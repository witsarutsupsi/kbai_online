<template>
  <div class="sim-panel d-flex justify-content-center">VK
  <img :src="mySVG" />
  </div>

</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      mySVG: require('./assets/kidbright32_v12.svg')
    }
  }
}
</script>

<style lang="scss" scoped>
.sim-panel {
  background-color: #fff2d6;
  padding: 20px;
  margin: auto;
  width: 1280px;
  height: 720px;
}
</style>
