<!--

Entry point into the Vue App

Notes:
* I am aware that passing callbacks through propchains is a little bit non-Vue-y but
it's much more DRY here

-->

<template>
  <div id="app">
    <Profile
      v-bind="{ photoList, photo, user, handlePhotoSelected, handleEditComplete,
        handleRatingSelected }"/>
  </div>
</template>

<script>
import Profile from './components/Profile';

import sampleData from '../sample.json';
import sampleUser from '../sample-user.json';

export default {
  name: 'App',
  components: {
    Profile,
  },
  data() {
    return {
      photoList: [],
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
      handleRatingSelected: (rating) => {
        this.photo.rating = rating;
      },
    };
  },
  mounted() {
    this.photoList = sampleData;
    this.user = sampleUser;
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
