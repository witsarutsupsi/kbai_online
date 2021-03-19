<template>
  <div class="sim-panel d-flex justify-content-center">VK
  <unity src="components/UnityBuild/Build/VKBuild.json" width="1000" height="600" unityLoader="components/UnityBuild/Build/UnityLoader.js"></unity>
  </div>
</template>

<script>
import Unity from 'vue-unity-webgl'

  new Vue({
    components: { Unity }
  })
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
