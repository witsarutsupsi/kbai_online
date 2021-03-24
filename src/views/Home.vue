<template>
  <div id="app">
    <Main msg="Welcome to Your Vue.js App" />
    <VK msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Main from "../components/main.vue";
import VK from "../components/UnityBuild/vk.vue";

export default {
  name: "app",
  components: {
    Main, VK
  },
};
</script>