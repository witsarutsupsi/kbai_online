<template>
  <div class="sim-panel d-flex justify-content-center">
  <div id="webgl"></div>
  </div>
</template>

<script>
import htmlimport from '@/components/UnityBuild/index.html';

export default {
  name: "webgl",
  components: {
    htmlimport
  },
};
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
