<template>

<div class="cart">
 <div class="container">
   <ul class="list-group" >
   <li class="list-group-item">
     <span class="title"> Name </span>
     <span> - </span>
     <span class="price"> Price </span>
   </li>

     <li class="list-group-item list-group-item-main" v-for="(item,index) in items" :key="index">
     <span class="title"> {{ item.title }} </span>
     <span> - </span>
     <span class="price"> {{item.price}} </span>
       <span class="remove-btn float-end" @click="remove(index)"> <b-icon icon="trash"></b-icon> </span>
     </li>

   <li class="list-group-item list-group-item-bot">
     <span class="title"> Total </span>
     <span> - </span>
     <span class="price"> {{ totalPrice }} </span>
   </li>
   </ul>
 </div>
</div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "Cart",
  data(){
    return{
      total_price : '',
    }
  },
  computed:{
    items(){
      return this.$store.getters.getCart
    },
    totalPrice(){
      var total = 0
      this.items.forEach(items =>{
        total += parseFloat(items.price)
      })
      return total.toFixed(2)
    }
  },
  methods:{
    remove(index){
      this.$store.commit('removeItem',index)
    }
  }
}
</script>

<style scoped>
.cart{
  margin: 20px 0;
}
.list-group-item{
  border: 1px solid black !important;
  list-style: none;
  margin-bottom: 5px;
}
.list-group-item-main{
  margin-bottom: 0 !important;
  border-bottom: none !important;
}
.list-group-item-bot{
  background-color: #c3c5c7;
}
.remove-btn{
  cursor: pointer;
}
</style>