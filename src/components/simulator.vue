<template>
  <div class="sim-panel d-flex justify-content-center">

    <div v-html="html"></div>

  </div>
</template>

<script>
export default {
    data () {
      return {
        html: '
  <head>
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Virtual Kanomchan</title>
    <link rel="shortcut icon" href="UnityBuild/TemplateData/favicon.ico">
    <link rel="stylesheet" href="UnityBuild/TemplateData/style.css">
    <script src="UnityBuild/TemplateData/UnityProgress.js"></script>
    <script src="UnityBuild/Build/UnityLoader.js"></script>
    <script>
      var gameInstance = UnityLoader.instantiate("gameContainer", "UnityBuild/Build/VKBuild.json", {onProgress: UnityProgress});
    </script>
  </head>
  <body>
    <div class="webgl-content">
      <div id="gameContainer" style="width: 990px; height: 557px"></div>
      <div class="footer"></div>

    </div>

  </body>',
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
