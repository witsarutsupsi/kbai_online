<template>
  <div id="sim-panel">
  <VK msg="Welcome to Your Vue.js App" />
  </div>
</template>


<script>
import VK from "./UnityBuild/vk.vue";

export default {
  name: "sim-panel",
  UnityBuild: {
    VK,
  },
};
</script>


