<template>
  <div>
    <h1>{{ title }}</h1>

    <v-card max-width="900" class="mx-auto">
      <v-container>
        <v-form ref="form" :lazy-validation="false">
          <v-row>
            <v-col cols="12" sm="3" md="6">
              <v-text-field
                v-model="stock.name"
                label="Nome"
                placeholder="Nome"
                type="text"
                :rules="rules.name"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="3" md="6">
              <v-text-field
                v-model="stock.date"
                label="Data"
                placeholder="01-01-2019"
                type="date"
                :rules="rules.date"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="3" md="6">
              <v-text-field
                v-model="stock.value.start"
                label="Valor início"
                placeholder="0,00"
                type="number"
                :rules="rules.start"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="3" md="6">
              <v-text-field
                v-model="stock.value.end"
                label="Valor final"
                placeholder="0,00"
                type="number"
                :rules="rules.end"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>
        <v-card-actions>
          <v-btn @click="save" :disable="saving" text>Salvar</v-btn>

          <v-btn @click="cancel" :disable="saving" text>Cancelar</v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Stock from "../domain/stock/stock.entity";
import StockService from "../domain/stock/stock.service";
import DateHandler from "../shared/date/date-handler";

@Component
export default class Cadastro extends Vue {
  stock = new Stock({});
  saving = false;
  form: any = this.$refs.form;
  isUpdatating = false;
  rules = {
    name: [
      (value: any) => !!value || "Name is mandatory",
      (value: any) => value.length > 3 || 'Name must be more than 3 charactere'
      ],
    date: [(value: any) => !!value || "Date is mandatory"],
    start: [
      (value: any) => !!value || "Start is mandatory",
      (value: any) => value > 0 || "must be more than 0"
    ],
    end: [
      (value: any) => !!value || "End is mandatory",
      (value: any) => value > 0 || "must be more than 0"
      ]
  };

  save() {
    const form: any = this.$refs.form;
    if (form.validade()) {
      this.saving = true;
      this.saveOrUpdate()
          .then(() => this.$router.push("/consulta"))
          .catch((err: any) => console.log(err))
          .finally(() => (this.saving = false));
      
    }
  }

  private saveOrUpdate(): Promise<any>{
    if (this.isUpdatating) {
      return StockService.update(this.stock.id, this.stock);
    }
    return StockService.save(this.stock);
  }

  created(){
    this.isUpdatating = true;
    if (this.$route.params.id){
      StockService.getOne(this.$route.params.id)
      .then(stock => this.stock = stock)
    }
  }


  cancel() {
    this.$router.push("/consulta");
  }
  get title() {
    return this.isUpdatating ? 'Alterando ação' : 'Nova ação';
  }
}
</script>