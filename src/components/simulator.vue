<template>
  <div class="sim-panel d-flex justify-content-center">VK
    <nav id="kb32">
      <SomeImage class="image" />
    </nav>
  </div>

</template>

<script>
import SomeImage from './assets/kidbright32_v12.svg';

export default {
  name: 'kb32',
  components: {
    SomeImage,
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
