<template>
  <div class="navbar">
    <div class="container">
<!--      <p><router-link :to="{path:' /'}" class="title"> Vue Store </router-link></p>-->
<!--      <router-view></router-view>-->
      <form class="search-box">
        <input class="search" type="text" placeholder="search here">
        <button type="submit" class="search-btn">Search</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "Navbar"
}
</script>

<style scoped>
.navbar{
  background-color: #2c3e50;
  color: #ffffff;
  padding: 10px 0;
}
.navbar .container{
  display: flex;
  justify-content: start;
}
.title{
  font-size: 24px;
  color: white;
  padding-right: 10px;
  text-decoration: none;
  position: relative;
  top: 10px;
}
.search-box{
  display: flex;
  margin-top: 8px;
}
.search{
  width: 250px;
  height: 30px;
  border: transparent;
  background-color: white;
  padding: 5px;
}
.search:focus{
  outline: 0;
}
.search-btn{
  border: 1px solid white;
  background-color: transparent;
  color: white;
  margin-left: 5px;
  width: 100px;
  height: 30px;
  cursor: pointer;
  transition: all ease 1s;
}
.search-btn:hover{
  background-color: white;
  color: #2c3e50;
}
</style>