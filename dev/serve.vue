<script>
import Vue from 'vue';
import VueAudioPlayer from '@/vue-audio-player.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VueAudioPlayer
  },

});
</script>

<template>
  <div id="app">
    <vue-audio-player src="https://d3ctxlq1ktw2nl.cloudfront.net/staging/2021-05-25/fb095de4c931b43df24cef68541e89c6.m4a"/>
    <vue-audio-player color="#2edeb0" rangeColor="#2edeb050" src="https://d3ctxlq1ktw2nl.cloudfront.net/staging/2021-05-17/e65d4630980a822363aee15b84b760e6.m4a"/>
    <vue-audio-player color="rgb(29, 161, 242)" rangeColor="rgba(29, 161, 242, .5)" src="https://d3ctxlq1ktw2nl.cloudfront.net/staging/2021-02-19/337f657d44eee46c63a79b7302b31f6b.m4a"/>
    <vue-audio-player color="#333333" rangeColor="#33333350" src="https://d3ctxlq1ktw2nl.cloudfront.net/staging/2021-03-05/1135fcddf2d57ba8a42417e36d98d825.m4a"/>
  </div>


</template>

<style scoped>
#app{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background-color: #563d7c;
  width: 100%;
  height: 100vh;
  padding: 300px;
}

#audio{
  margin-bottom: 20px;
}
</style>
