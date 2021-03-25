<template>
  <div id="app">
    <Main msg="Welcome to Your Vue.js App" />
    <Simulator msg="Welcome to Your Vue.js App" />
    <unity src="/assets/Build/VKBuild.json" width="1000" height="600" unityLoader="/assets/Build/UnityLoader.js" ref="myInstance"></unity>
    <GamePage msg="game panel"/>
  </div>
</template>

<script>
import Main from "../components/main.vue";
import Simulator from "../components/simulator.vue";
import Unity from 'vue-unity-webgl'
import GamePage from "../assets/index.html";

export default {
  name: "app",
  components: {
    Main, Simulator, Unity, GamePage
  },
};
</script>
