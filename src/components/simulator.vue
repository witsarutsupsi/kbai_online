<template>
  <div class="sim-panel d-flex justify-content-center">
  <div id="webgl">VK</div>
  </div>
</template>

<script>
import html from '@/components/UnityBuild/index.html'

export default {
  data() {
    return {
      html,   // es6 property shorthand syntax
      foo: null
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
