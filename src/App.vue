<!--

Entry point into the Vue App

Notes:
* I am aware that passing callbacks through propchains is a little bit non-Vue-y but
it's much more DRY here

-->

<template>
  <div id="app">
    <Profile />
  </div>
</template>

<script>
import Profile from './components/Profile';
import store from './store';

export default {
  name: 'App',
  store,
  components: {
    Profile,
  },
  mounted() {
    this.$store.dispatch('fetchUser');
    this.$store.dispatch('fetchPhotoList');
  },
};
</script>

<style>
html {
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
}

body {
  height: 100%;
  width: 100%;
}

*, *:before, *:after {
  box-sizing: inherit;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
}
</style>
