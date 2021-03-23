<template>
  <div class="sim-panel d-flex justify-content-center">

    <div v-html="html"></div>

  </div>
</template>

<script>
export default {
    data () {
      return {
        html: '<object data="UnityBuild/index.html" height="600" width="1000"></object>',
      };
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
