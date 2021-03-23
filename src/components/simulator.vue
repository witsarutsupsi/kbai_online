<template>
  <div class="sim-panel d-flex justify-content-center">

    <p>Using mustaches: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    <object data="/components/UnityBuild/index.html" height="1000" width="600"></object>


  </div>
</template>

<script>
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
