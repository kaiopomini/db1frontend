<template>
  <div>
    <h1>Consulta de Ações</h1>
    <v-simple-table>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Data</th>
          <th class="text-left">Start</th>
          <th class="text-left">End</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in stocks" :key="index">
          <td>{{ item.name }}</td>
          <td>{{ item.dateFormated }}</td>
          <td>{{ item.value.startFormated }}</td>
          <td>{{ item.value.endFormated }}</td>
          
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Stock from "../domain/stock/stock.entity";
import StockService from "../domain/stock/stock.service";

@Component
export default class Consulta extends Vue {
  stocks: Stock[] = [];

  created() {
    this.findAllStocks();
  }
  findAllStocks() {
    StockService.getAll().then(stocks => {
      
      this.stocks = stocks;
    });
  }
  
}
</script>