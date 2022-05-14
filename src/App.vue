<template>
  <div>
    <Navbar/>
    <Central />
    <!--  <div class="container">-->
<!--    <div class="row">-->
<!--      <div class="col-md-9">-->
<!--        <inventory :items="items" />-->
<!--      </div>-->
<!--      <div class="col-md-3">-->
<!--        <cart />-->
<!--        <router-link  :to="{ path: '/item-details'}" >item details</router-link>-->
<!--        <br>-->
<!--        <router-link to="/item-details">item details</router-link>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Central from './components/Central'
// import Inventory from './Views/Inventory'
// import Cart from './Views/Cart'
export default {
  name: 'App',
  components: {
    // Inventory,
    Navbar,
    Central
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  margin: 0;
  padding: 0;
}
</style>
