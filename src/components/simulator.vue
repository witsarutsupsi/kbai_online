<template>
  <div class="sim-panel">
    <unity src="Build/VKBuild.json" width="1000" height="600" unityLoader="Build/UnityLoader.js"></unity>  
  </div>
</template>


<script>
import Unity from 'vue-unity-webgl'
  
  new Vue({
    components: { Unity }
  })
</script>

<style>
.sim-panel {
  background-color: #fff2d6;
  padding: 20px;
  margin: auto;
  width: 1280px;
  height: 720px;
}
</style>
