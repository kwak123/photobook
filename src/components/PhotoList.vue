<template>
  <div class="photolist__container">
    <h2 class="photolist__header">Portfolio</h2>
    <div
      class="photolist__inner"
      v-if="photoList.length">
      <div
        class="photolist__inner--grid-item"
        v-for="(photo, idx) in photoList"
        v-on:click="setSelectedPhoto({ idx })"
        :key="idx">
        <img
          class="photolist__inner--thumbnail"
          v-bind:src="photo.url"
          alt="photo.url"/>
      </div>
    </div>
    <Loading v-else v-bind="{ requesting, error, message }" />
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

import Loading from './Loading';

export default {
  name: 'PhotoList',
  components: { Loading },
  data() {
    return {
      message: 'User has no photos',
    };
  },
  methods: mapMutations(['setSelectedPhoto']),
  computed: mapState({
    photoList: state => state.photos.photoList,
    requesting: state => state.photos.requesting,
    error: state => state.photos.requesting,
  }),
};
</script>

<style>
.photolist__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: fit-content;
}

.photolist__inner {
  display: grid;
  grid-template-columns: repeat(4, 64px);
  grid-auto-rows: 64px;
  grid-gap: 8px;
}

.photolist__header {
  width: fit-content;
  border-bottom: lightgrey 1px solid;
}

.photolist__inner--thumbnail {
  height: 64px;
  width: 64px;
  object-fit: cover;
}
</style>
