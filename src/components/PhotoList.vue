<template>
  <div class="photolist__container">
    <h2 class="photolist__header">Portfolio</h2>
    <div
      class="photolist__inner"
      v-if="photoList.length">
      <div
        class="photolist__inner--grid-item"
        v-for="(photo, idx) in photoList"
        v-on:click="onPhotoSelected(idx)"
        :key="idx">
        <img
          class="photolist__inner--thumbnail"
          v-bind:src="photo.url"
          alt="photo.url"/>
      </div>
    </div>
    <Loading v-else />
  </div>
</template>

<script>
import Loading from './Loading';

export default {
  name: 'PhotoList',
  props: ['handlePhotoSelected'],
  components: { Loading },
  methods: {
    onPhotoSelected(idx) {
      this.handlePhotoSelected(idx);
    },
  },
  computed: {
    photoList() {
      return this.$store.state.photos.photoList;
    },
  },
};
</script>

<style>
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
