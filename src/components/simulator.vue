<template>
    <div class="sim-panel font-weight-bold">Virtual Kanomchan
		<unity src="assets/Build/VKBuild.json" width="1000" height="600" unityLoader="assets/Build/UnityLoader.js" ref="myInstance"></unity>
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
  color: #06754b;
  font-size: 35px;
  text-align: center;
  background-color: #fff7d6;
  margin: auto;
  width: 1280px;
  height: 720px;
}
</style>
