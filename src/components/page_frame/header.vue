<template>
  <div>
    <div class="header-line">

      <div
        class="buttons-wrapper"
        :class="{narrow:!is_screen_big}"
      >
        <div class="ui teal basic label item">
          Contact me:
        </div>
        <div class="ui teal button item">
          <i class="ui phone icon"></i>
        </div>
        <div class="ui teal button item">
          <i class="ui envelope icon"></i>
        </div>
        <div class="ui teal button item">
          <i class="ui vk icon"></i>
        </div>
      </div>

      <div
        class="buttons-wrapper"
        :class="{narrow:!is_screen_big}"
      >
        <div class="ui orange basic label item">
          Download CV:
        </div>
        <div class="ui orange button item">
          PDF EN
        </div>
        <div class="ui orange button item">
          PDF RU
        </div>
        <div class="ui orange button item">
          JSON
        </div>
      </div>

    </div>

    <hr class="gradient">
  </div>
</template>

<script>
  import screen_width_user_mixin from "../utils/screen_width_user_mixin";

  export default {
    mixins:[
      screen_width_user_mixin
    ],
    data(){
      return{

      }
    },
  }
</script>


<style scoped>
  .header-line {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    max-width: var(--desktop-width);
    margin: auto;
    padding: 10px 0 10px;

    line-height: 40px;

    background-color: #fff;
    color: #333;

    font-size: 15px;
  }

  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  .buttons-wrapper{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .buttons-wrapper.narrow{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .buttons-wrapper .item {
    margin: 5px;
    padding: 10px 20px;
  }

  .buttons-wrapper .ui.button,.ui.label {
    font-size: 15px;
    white-space: nowrap;
    width: 100%;
  }

  .buttons-wrapper .ui.button .ui.icon{
    margin: 0;
  }

  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  hr.gradient {
    border: 0;
    height: 2px;
    background-image: linear-gradient(to right, #f0f0f0, var(--teal), #f0f0f0, var(--orange), #f0f0f0);
  }

</style>
