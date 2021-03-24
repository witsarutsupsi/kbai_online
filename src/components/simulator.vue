<template>
  <div class="sim-panel d-flex justify-content-center">
    <div v-html="SystemHTML">
    </div>
  </div>
</template>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
document.getElementById("data").innerHTML = "1234"

export default {
  data() {
    return {
      SystemHTML: `
        <p id="data">

        </p>
      `
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
