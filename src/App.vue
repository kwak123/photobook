<template>
  <div id="app">
    <UserInfo />
    <PhotoList v-bind:photo-list="photoList"/>
  </div>
</template>

<script>
import UserInfo from './components/UserInfo';
import PhotoList from './components/PhotoList';

import sampleData from '../sample.json';

export default {
  name: 'App',
  components: {
    UserInfo,
    PhotoList,
  },
  data() {
    return {
      photoList: sampleData,
    };
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
