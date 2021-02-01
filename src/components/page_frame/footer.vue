<template>
  <div class="footer-line">
    <p style="text-align: center">
      Made by Nikita Safronov via Vue.js & Semantic UI on Jan 2021
    </p>
  </div>
</template>

<script>
  export default {
    data(){
      return{

      }
    },
  }
</script>


<style scoped>
  .footer-line {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    max-width: var(--desktop-width);
    margin: auto;
    padding: 10px 0 10px;

    line-height: 40px;

    background-color: #333;
    color: #fff;

    font-size: 15px;
    font-family: 'Roboto', sans-serif;
  }
</style>
