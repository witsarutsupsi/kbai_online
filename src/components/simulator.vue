<template>
  <div class="sim-panel d-flex justify-content-center">Virtual Kanomchan</div>
  <div id="data"></div>
</template>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
  function callback(res){
    document.getElementById("data").innerHTML = res.IPv4;
  }
  $.ajax({
    url:"https://geoip-db.com/jsonp/",
      dataType:"jsonp"
  })
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
