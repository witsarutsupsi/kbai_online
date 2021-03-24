<template>
  <div class="sim-panel d-flex justify-content-center">
    <html/>
  </div>
</template>

<script>
import html from "@/components/index.html";
  
export default {
  name: "sim-panel",
  components: {
    html,
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
