import Vue from "vue";

export default {
  data(){
    return {
    }
  },
  computed:{
    is_screen_big(){
      return this.$store.state.screen_type === this.$store.state.SCREEN_TYPES.BIG
    },
    is_screen_medium(){
      return this.$store.state.screen_type === this.$store.state.SCREEN_TYPES.MEDIUM
    },
    is_screen_small(){
      return this.$store.state.screen_type === this.$store.state.SCREEN_TYPES.SMALL
    }
  }

}
