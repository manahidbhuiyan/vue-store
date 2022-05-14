<template>
<div class="inventory">
 <div class="container">
   <div class="items" v-for="item in items" :key="item.id">
<!--     <router-link :to="{path:'/item-details'}">-->
     <router-link :to="{path: 'item-details'}">


     <b-card
           :title="item.title"
           :img-src= "item.image"
           img-alt="Image"
           img-top
           tag="article"
           style="max-width: 20rem;"
           class="mb-2 card-title"
       >

          <b-card-text>
            {{ item.price }}
          </b-card-text>

         <b-button href="#" variant="danger" @click="addToCart(item)">Add to Cart</b-button>
       </b-card>
     </router-link>
<!--     </router-link>-->
<!--     <router-view></router-view>-->

   </div>
 </div>
  </div>
</template>

<script>

export default {
  // eslint-disable-next-line
  name: "Inventory",
  props:['items'],
  methods:{
    addToCart(item){
      this.$store.commit('addToCart',item)

    }
  }
}
</script>

<style scoped>
.inventory{
  margin: 20px 0;
}
.inventory .container{
  display: flex;
  flex-wrap: wrap;
}
.items{
  margin: 0 10px;
  width: 200px;
  max-height: 450px;
}
.items img{
  height: 200px;
}
.card-title{
  font-size: 16px;
}
</style>