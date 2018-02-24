<template>
  <div class="photodetail__container">
    <div
      class="photodetail__inner"
      v-if="photo.url">
      <Editable
        class="photodetail__inner--title"
        :content="photo.title"
        :handleEditComplete="handleEditComplete"
        content-type="title" />
      <img class="inner__photo" v-bind:src="photo.url" alt="photo.url"/>
      <p class="inner__rating">
        {{ photo.rating }}
      </p>
      <Editable
        class="photodetail__inner--description"
        :content="photo.description"
        :handleEditComplete="handleEditComplete"
        content-type="description"/>
    </div>

    <div v-else>
      <p>Select a photo below</p>
    </div>
  </div>
</template>

<script>
import Editable from './Editable';

export default {
  name: 'PhotoDetail',
  components: {
    Editable,
  },
  props: ['photo', 'handleEditComplete'],
};
</script>

<style scoped>
.photodetail__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.photodetail__inner--title {
  width: auto;
  min-width: 8px;
  margin-bottom: 16px;
  font-size: 20px;
  border-bottom: lightgrey 1px solid;
}

.inner__photo {
  width: 640px;
  height: 400px;
  object-fit: cover;
}
</style>

