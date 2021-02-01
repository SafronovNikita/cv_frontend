<template>
  <div id="app" style="min-height: 100%">
    <router-view/>
  </div>
</template>

<script>
  import screen_width_mixin from "./screen_width_mixin";

  export default {
    mixins:[
      screen_width_mixin
    ],
  }
</script>

<style>

:root {
  --desktop-width: 1050px;
  --teal: #00B5AD;
  --blue-light: #D9E5F0;
  --orange: #F2711C;
  --grey: #888;
}

body{
  font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
}

body:after{
  content : "";
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  background-image: url('/static/bg.png') !important;
  background-size: cover !important;
  width: 100%;
  height: 100%;
  opacity : 0.5;
  z-index: -2;
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
.ui input{
  border-color: #963 !important;
  color: #630 !important;
}
.ui input::placeholder{
  color: #963 !important;
}

</style>
