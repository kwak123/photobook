<!--

Entry point into the Vue App

Notes:
* I am aware that passing callbacks through propchains is a little bit non-Vue-y but
it's much more DRY here

-->

<template>
  <div id="app">
    <Profile
      v-bind="{ photoList, photo, user, handlePhotoSelected, handleEditComplete }"/>
  </div>
</template>

<script>
import Profile from './components/Profile';

import sampleData from '../sample.json';

export default {
  name: 'App',
  components: {
    Profile,
  },
  data() {
    return {
      photoList: sampleData,
      photo: {},
      user: {
        username: 'TestAccount',
        imageUrl: '',
        first: 'Default',
        last: 'User',
        average: '4.0',
      },
      handlePhotoSelected: (idx) => {
        if (this.photo !== this.photoList[idx]) {
          this.photo = this.photoList[idx];
        }
      },
      handleEditComplete: (type, content) => {
        this.photo[type] = content;
      },
    };
  },
};
</script>

<style>
html {
  box-sizing: border-box;
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
