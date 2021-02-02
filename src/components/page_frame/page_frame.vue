<template>
  <div class="main-wrapper shadow">
    <header_line></header_line>

    <div class="content-container">
      <router-view></router-view>
    </div>

    <download_line></download_line>
    <footer_line></footer_line>
  </div>
</template>

<script>
  import header_line from "./header";
  import download_line from "./download_line";
  import footer_line from "./footer";

  export default {
    components:{
      header_line,
      download_line,
      footer_line,
    },
    data(){
      return{
      }
    },
  }
</script>


<style scoped>
  .main-wrapper{
    max-width: var(--desktop-width);
    margin: 0 auto 0;

    background-color: #fff;
    opacity: 1;
  }

  .shadow{
    box-shadow: 0 0 10px rgba(100, 100, 100, .5);
  }

  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  .content-container{
    min-height: 1000px;
  }

</style>
