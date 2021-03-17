<template>
  <div class="sim-panel d-flex justify-content-center">Virtual Kanomchan
  <div v-html="htmlvk"></div>
  </div>
</template>

<script>
export default{
  data(){
    return{
      htmlvk: "<object data='/components/UnityBuild/index.html' height='300' width='500'></object>",
    };
  }
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
