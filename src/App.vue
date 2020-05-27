<template>
  <div id="app">
   <!-- <TodoPage /> -->
   <ArchivePage />
  </div>
</template>

<script>
 //import TodoPage from './Pages/TodoPage.vue'
import ArchivePage from './Pages/ArchivePage.vue'
export default {
  name: 'App',
  components: {
    //TodoPage
    ArchivePage
  }
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
</style>
