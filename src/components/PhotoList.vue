<template>
  <div class="photolist__container">
    <h2 class="photolist__header">Portfolio</h2>
    <div class="photolist__inner">
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
  </div>
</template>

<script>
export default {
  name: 'PhotoList',
  props: ['photo-list', 'handlePhotoSelected'],
  methods: {
    onPhotoSelected(idx) {
      this.handlePhotoSelected(idx);
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
