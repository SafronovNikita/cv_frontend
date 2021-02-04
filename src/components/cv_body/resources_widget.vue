<template>
  <div
    class="resources-list"
  >
    <span class="first r-item">
      {{lang === LANGUAGES.RU ? 'Ресурсы:' : 'Resources:'}}
    </span>

    <span
      class="r-item"
      v-for="(resource, idx) in resources"
    >

      <a
        class="link"
        :href="resource.href"
        target="_blank"
        rel="noopener"
      >
        <span :data-content="resource.text">
          {{resource.text}}
        </span>
      </a>

      <span>
        {{ (idx === resources.length - 1) ? '' : ',' }}
      </span>
    </span>

  </div>
</template>

<script>
  import cv_data from './cv_data.js'

  export default {
    props:{
      resources:{
        type:Array,
        required:true,
      }
    },
    data(){
      return {
        cv_data:cv_data,

        LANGUAGES:this.$store.state.LANGUAGES,
      }
    },
    computed:{
      lang(){
        return this.$route.params.lang
      },
    },
  }
</script>

<style scoped>
  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
  .resources-list{
    display: flex;
    flex-direction: row;
    justify-content: left;
    /*flex-wrap: wrap;*/
  }

  /*.resources-list .r-item{*/
  /*  margin: 0 5px 0;*/
  /*}*/
  .resources-list .first.r-item{
    margin: 0;
    font-weight: bold;
  }

  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
  /*fill link on hover. src: (https://codepen.io/kathykato/pen/zYYRGRQ) */
  .link {
    text-decoration: none;
    color: black;
    cursor: pointer;

    position: relative;
    transition: clip-path 275ms ease;
  }

  .link:hover span::before, link:focus span::before {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  .link span {
    position: relative;
    display: inline-block;
    color: var(--link-color);
  }
  .link span::before{
    position: absolute;
    content: attr(data-content);
    color: var(--link-hover-color);
    text-decoration: underline;
    text-decoration-color: var(--link-hover-color);
    clip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);
    transition: clip-path 275ms ease;
  }

</style>
