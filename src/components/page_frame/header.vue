<template>
  <div>

    <div class="header-line">
      <div
        class="buttons-wrapper"
        :class="{narrow:!is_screen_big}"
      >
        <div class="ui teal basic label item">
          {{lang === LANGUAGES.RU ? 'Мои контакты:' : 'Contact me:'}}
        </div>
        <a
          class="ui teal button item"
          :href=" 'tel:' + cv_data.phone "
        >
          <i class="ui phone icon"></i>
        </a>
        <a
          class="ui teal button item"
          :href=" 'mailto:' + cv_data.email "
          target="_blank"
          rel="noopener"
        >
          <i class="ui envelope icon"></i>
        </a>
        <a
          class="ui teal button item"
          href="https://vk.com/safic2"
          target="_blank"
          rel="noopener"
        >
          <i class="ui vk icon"></i>
        </a>
        <a
          class="ui teal button item"
          href="https://github.com/SafronovNikita"
          target="_blank"
          rel="noopener"
        >
          <i class="ui github icon"></i>
        </a>
      </div>

      <div></div>

      <div class="ui buttons" style="margin: 5px;">
        <div
          class="ui left attached teal button"
          :class="{
            active: $route.params.lang === $store.state.LANGUAGES.RU,
            basic: $route.params.lang !== $store.state.LANGUAGES.RU
          }"
          @click="$router.push({params:{lang:'ru'}})"
        >
          RU
        </div>
        <div
          class="ui right attached teal button"
          :class="{
            active: $route.params.lang === $store.state.LANGUAGES.EN,
            basic: $route.params.lang !== $store.state.LANGUAGES.EN
          }"
          @click="$router.push({params:{lang:'en'}})"
        >
          EN
        </div>
      </div>

    </div>

    <hr class="gradient">
  </div>
</template>

<script>
  import screen_width_user_mixin from "../utils/screen_width_user_mixin";
  import cv_data from "../cv_body/cv_data";

  export default {
    mixins:[
      screen_width_user_mixin
    ],
    data(){
      return{
        LANGUAGES:this.$store.state.LANGUAGES,
        cv_data:cv_data
      }
    },
    computed:{
      lang(){
        return this.$route.params.lang
      },
    }
  }
</script>


<style scoped>
  .header-line {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: start;

    max-width: var(--desktop-width);
    margin: auto;
    padding: 15px 0 10px;

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
    background-image: linear-gradient(to right, #f0f0f0, var(--teal), #f0f0f0);
  }

</style>
