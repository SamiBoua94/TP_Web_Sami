<template >
  <div class= "container">
      <Menu ></Menu>
      <Index></Index>
  </div >
</template >
<script>
  import Menu from './components/Menu.vue'
  import Index from "./components/Index.vue";
  export default {
      name: 'App ',
      components: {
          Index,
          Menu
      }
  }
</script >
<style >
</style >