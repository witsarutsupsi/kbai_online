<template>
  <div class="sim-panel">
    <htmlImport msg="Welcome to Your Vue.js App"/>
  </div>
</template>


<script>

import htmlImport from "@/components/index.html";
 export default {
    components: {
      htmlImport
    }
  }
</script>

<style>
.vk-panel {
  background-color: #fff2d6;
  padding: 20px;
  margin: auto;
  width: 1280px;
  height: 720px;
}
</style>
