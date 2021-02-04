<template>
  <div>
    <hr class="gradient">

    <div class="header-line">
      <div
        class="buttons-wrapper"
        :class="{narrow:!is_screen_big}"
      >
        <div class="ui orange basic label item">
          {{lang === LANGUAGES.RU ? 'Скачать резюме:' : 'Download CV:'}}
        </div>
        <a
          class="ui orange button item"
          :href="download_path_by_lang('en')"
          target="_blank"
          rel="noopener"
        >
          PDF EN
        </a>
        <a
          class="ui orange button item"
          :href="download_path_by_lang('ru')"
          target="_blank"
          rel="noopener"
        >
          PDF RU
        </a>
        <div
          class="ui orange button item"
          @click="download_json()"
        >
          JSON
        </div>
      </div>

    </div>

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
    },
    methods:{
      download_path_by_lang(lang){
        var target_route = this.$router.resolve({name:'download', params:{lang:lang}} )

        return window.location.origin + target_route.href
      },
      download_json() {
        var element = document.createElement('a');
        element.setAttribute(
          'href',
          'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.cv_data))
        );
        element.setAttribute('download', 'nikita_safronov_cv.json');

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
      },
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
    padding: 10px 0 15px;

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
    background-image: linear-gradient(to right, #f0f0f0, var(--orange), #f0f0f0);
  }

</style>
