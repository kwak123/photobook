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
      <img class="photodetail__inner--photo" v-bind:src="photo.url" alt="photo.url"/>
      <Rating
        class="photodetail__inner--rating"
        :rating="photo.rating"
        :handleRatingSelected="handleRatingSelected"/>
      <Editable
        class="photodetail__inner--description"
        :content="photo.description"
        :handleEditComplete="handleEditComplete"
        content-type="description"/>
    </div>

    <div
      class="photodetail__empty"
      v-else>
      <p>Select a photo</p>
    </div>
  </div>
</template>

<script>
import Editable from './Editable';
import Rating from './Rating';

export default {
  name: 'PhotoDetail',
  components: {
    Editable,
    Rating,
  },
  props: ['photo', 'handleEditComplete', 'handleRatingSelected'],
};
</script>

<style scoped>
.photodetail__container {
  padding: 32px 0;
  height: 100vh;
}

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

.photodetail__inner--rating {
  margin: 16px 0;
}

.photodetail__inner--photo {
  width: 640px;
  height: 400px;
  object-fit: cover;
}

.photodetail__empty {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>

