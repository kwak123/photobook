<template>
  <div class="container">
    <div
      class="inner"
      v-if="photo.url">
      <p class="inner__text">
        {{ photo.title || 'No title' }}
      </p>
      <img class="inner__photo" v-bind:src="photo.url" alt="photo.url"/>
      <p class="inner__description">
        {{ photo.description || 'No description' }}
      </p>
      <p class="inner__rating">
        {{ photo.rating }}
      </p>
    </div>

    <div v-else>
      <p>Select a photo below</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotoDetail',
  props: ['photo'],
};
</script>

<style scoped>
.inner__photo {
  width: 640px;
  height: 400px;
  object-fit: cover;
}
</style>

