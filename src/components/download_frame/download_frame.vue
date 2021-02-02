<template>
  <div class="download-wrapper">
    <cv_body></cv_body>
  </div>
</template>

<script>
  import cv_body from "../cv_body/cv_body";

  export default {
    components:{
      cv_body
    },
    data(){
      return {
      }
    },
    created() {
      window.print()
    }
  }
</script>

<style scoped>
  .download-wrapper{
    width: var(--desktop-width);

    background-color: #fff;
  }
</style>

<style>
  body:after{
    content : "";
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    background-image: url('/static/white_rect.png') !important;
    background-size: cover !important;
    width: 100%;
    height: 100%;
    opacity : 1;
    z-index: -2;
  }
</style>
