<template>
  <div class="sim-panel d-flex justify-content-center">

    <div v-html="html"></div>

  </div>
</template>

<script>
export default {
    data () {
      return {
        html: '<p>Hello World</p>',
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
