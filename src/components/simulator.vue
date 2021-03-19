<template>
  <div class="sim-panel d-flex justify-content-center">VK
  
  <div id ="menu"><SomeIcon class="icon" /></div>
  </div>

</template>

<script>
import SomeIcon from "../assets/UI/png/totoro.png";

export default {
  name: 'menu',
  components: {
    SomeIcon,
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
