<template>
  <div id="app">
    <Main msg="Welcome to Your Vue.js App" />
    <Simulator msg="Welcome to Your Vue.js App" />
    
  </div>

</template>

<script>
import Main from "../components/main.vue";
import Simulator from "../components/simulator.vue";

export default {
  name: "app",
  components: {
    Main, Simulator
  },
};
</script>
