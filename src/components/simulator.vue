<template>
  <div class="sim-panel">
    <p id="data"></p>
  </div>
</template>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>

function callback(res){
            document.getElementById("data").value = res.IPv4;
        }
        $.ajax({
            url:"https://geoip-db.com/jsonp/",
            dataType:"jsonp"
        })
</script>

<style>
.vk-panel {
  background-color: #fff2d6;
  padding: 20px;
  margin: auto;
  width: 1280px;
  height: 720px;
}
</style>
