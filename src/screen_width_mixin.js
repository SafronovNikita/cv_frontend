import Vue from "vue";



export default {
  data(){
    return {
      SCREEN_TYPES: this.$store.state.SCREEN_TYPES,
      screen_width:0
    }
  },
  methods: {
    get_screen_width(){
      var de = document.body.parentNode;
      var db = document.body;
      if(window.opera)return db.clientWidth;
      if (document.compatMode=='CSS1Compat') return de.clientWidth;
      else return db.clientWidth;
    },
    calc_screen_type(){
      var w = this.screen_width

      if (w < 500){
        return this.SCREEN_TYPES.SMALL
      }else if(w < 1050){
        return this.SCREEN_TYPES.MEDIUM
      }else{
        return this.SCREEN_TYPES.BIG
      }
    },
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    on_resize() {
      // var w = window.innerWidth
      var w = this.get_screen_width()

      this.screen_width = w
      this.$store.state.screen_width = w
      this.$store.state.screen_type = this.calc_screen_type()
    },
  },

  mounted() {
    this.on_resize()

    this.$nextTick(() => {
      window.addEventListener('resize', this.on_resize);
    })
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.on_resize);
  },

}
