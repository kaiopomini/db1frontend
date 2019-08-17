<template>
  <div>
    <h1>Cadastro de Ações</h1>

    <v-card max-width="900" class="mx-auto">
      <v-container>
        <v-row>
          <v-col cols="12" sm="3" md="6">
            <v-text-field v-model="stock.name" label="Nome" placeholder="Nome" type="text"></v-text-field>
          </v-col>
          <v-col cols="12" sm="3" md="6">
            <v-text-field v-model="stock.date" label="Data" placeholder="01-01-2019" type="date"></v-text-field>
          </v-col>
          <v-col cols="12" sm="3" md="6">
            <v-text-field v-model="stock.value.start" label="Valor início" placeholder="0,00" type="number"></v-text-field>
          </v-col>
          <v-col cols="12" sm="3" md="6">
            <v-text-field v-model="stock.value.end" label="Valor final" placeholder="0,00" type="number" ></v-text-field>
          </v-col>
        </v-row>
        <v-card-actions>
          
              <v-btn @click="save" text>Salvar</v-btn>
          
            
              <v-btn @click="cancel" text>Cancelar</v-btn>
           
          
        </v-card-actions>
      </v-container>
    </v-card>

    <pre>{{ stock }}</pre>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Stock from "../domain/stock/stock.entity";
import StockService from "../domain/stock/stock.service";
import DateHandler from '../shared/date/date-handler';

@Component
export default class Cadastro extends Vue {
  stock = new Stock({});
  
  
  save() {
    
    StockService.postPost(this.stock);
    
  }

  cancel() {
    this.$router.push("/consulta");
  }

  
  
}
</script>