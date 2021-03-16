<template>
  <div class="sim-panel d-flex justify-content-center">Virtual Kanomchan
  </div>
</template>

<script>
import vk from "@/assets/UnityBuild/index.html";
export default {
  data () {
    return {
      vk,
      foo:null
    }
  }
}
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