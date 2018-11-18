<template>
  <div id="app">
    <router-view/>
    <FootGuide/>
  </div>
</template>

<script>
  import FootGuide from './components/FooterGuide/FooterGuide'
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
  padding 10px
</style>
