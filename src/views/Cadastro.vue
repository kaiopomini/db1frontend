<template>
    <div>
        <h1>Cadastro de Ações</h1>
        <input v-model="stock.name" type="text">
        <input v-model="stock.date" type="text">
        <input v-model="stock.value.start" type="text">
        <input v-model="stock.value.end" type="text">
        <v-btn @click="save" text>Salvar</v-btn>
        <v-btn @click="cancel" text>Cancelar</v-btn>
        
        
        <pre>{{ stock }}</pre>
    </div>

</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import Stock from '../domain/stock/stock.entity'

@Component
export default class Cadastro extends Vue{
    stock = new Stock({});

    save(){
        console.log(this.stock)
    }
    
    cancel(){
        this.$router.push('/consulta')
    }
}

    

</script>