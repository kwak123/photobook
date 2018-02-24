<template>
  <div class="container">
    <div
      class="inner"
      v-for="(photo, idx) in photoList"
      v-on:click="onPhotoSelected(idx)"
      :key="idx">
      <img
        class="inner__thumbnail"
        v-bind:src="photo.url"
        alt="photo.url"/>
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

<style scoped>
.container {
  display: grid;
  grid-template-columns: 64px 64px 64px 64px;
  grid-gap: 8px;
}

.inner__thumbnail {
  height: 64px;
  width: 64px;
  object-fit: cover;
}
</style>
