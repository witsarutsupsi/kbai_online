<template>
  <div id="app">
    <Main msg="Welcome to Your Vue.js App" />
    <unity src="/assets/Build/VKBuild.json" width="1000" height="600" unityLoader="/assets/Build/UnityLoader.js" ref="myInstance"></unity>
  </div>
  <div class="sim-panel">
  </div>
</template>

<script>
import Main from "../components/main.vue";
import Unity from 'vue-unity-webgl'

export default {
  name: "app",
  components: {
    Main, Unity
  },
};
</script>

<style>
.sim-panel {
  background-color: #fff7d6;
  margin: auto;
  width: 1280px;
  height: 720px;
}
</style>