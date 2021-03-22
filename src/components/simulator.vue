<template>
  <div class="sim-panel d-flex justify-content-center">
    {{scene}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      scene: require('./UnityBuild/index.html')
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
