<template>
  <div id="app">
    <Main msg="Welcome to Your Vue.js App" />
    <Simulator msg="Welcome to Your Vue.js App" />
    <unity src="/Build/VKBuild.json" width="1000" height="600" unityLoader="/Build/UnityLoader.js" ref="myInstance"></unity>
  </div>

</template>

<script>
import Main from "../components/main.vue";
import Simulator from "../components/simulator.vue";
import Unity from 'vue-unity-webgl'


export default {
  name: "app",
  components: {
    Main, Simulator, Unity
  },
};
</script>
