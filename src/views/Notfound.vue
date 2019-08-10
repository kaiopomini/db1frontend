<template>
  <div class="card">
    <v-card max-width="344" class="mx-auto">
      <v-card-title>Página não encontrada!</v-card-title>
      <v-card-text>Click para voltar a Home Page</v-card-text>
      <v-card-actions>

        <router-link to="/">
          <v-btn text>Click AQUI</v-btn>
        </router-link>
        
      </v-card-actions>
    </v-card>
     
  </div>
  
</template>
<style lang="sass" scoped>
.mx-auto
  margin-top: 100px,
  
.card
  text-align : center
</style>
