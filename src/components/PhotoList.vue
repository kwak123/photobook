<template>
  <div class="container">
    <h2>Portfolio</h2>
    <div class="inner">
      <div
        class="inner__thumbnail"
        v-for="(photo, idx) in photoList"
        v-on:click="onPhotoSelected(idx)"
        :key="idx">
        <img
          class="inner__thumbnail--photo"
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
.inner {
  display: grid;
  grid-template-columns: repeat(4, 64px);
  grid-auto-rows: 64px;
  grid-gap: 8px;
}

.inner__thumbnail--photo {
  height: 64px;
  width: 64px;
  object-fit: cover;
}
</style>
