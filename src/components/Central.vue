<template>
<div class="row">
  <div class="col-9">

    <Inventory :items="items" />


  </div>
  <div class="col-3">
    <Cart />
  </div>
</div>
</template>

<script>
import Inventory from '../Views/Inventory'
import Cart from '../Views/Cart'
import data from "@/data";
export default {
  // eslint-disable-next-line
  name: "Central",
  components: {
    Inventory,
    Cart
  },
  data(){
    return{
      items: []
    }
  },
  mounted(){
    this.items = data
  }
}

</script>

<style scoped>

</style>