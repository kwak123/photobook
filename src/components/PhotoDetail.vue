<template>
  <div class="photodetail__container">
    <div
      v-if="url"
      class="photodetail__inner">
      <Editable
        class="photodetail__inner--title"
        :content="title"
        :handleEditComplete="postPhotoUpdate"
        content-type="title" />
      <img class="photodetail__inner--photo" v-bind:src="url" alt="photo.url"/>
      <Rating
        class="photodetail__inner--rating"
        :rating="rating"
        :handleRatingSelected="postPhotoUpdate"/>
      <Editable
        class="photodetail__inner--description"
        :content="description"
        :handleEditComplete="postPhotoUpdate"
        content-type="description"/>
    </div>

    <div
      v-else
      class="photodetail__empty">
      <Loading v-bind="{ requesting, error, message }"/>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

import Editable from './Editable';
import Rating from './Rating';
import Loading from './Loading';

export default {
  name: 'PhotoDetail',
  components: {
    Editable,
    Rating,
    Loading,
  },
  data() {
    return {
      message: 'Select a photo',
    };
  },
  methods: mapActions(['updateRating', 'postPhotoUpdate']),
  computed: mapState({
    url: state => state.photos.selectedPhoto.url,
    title: state => state.photos.selectedPhoto.title,
    rating: state => state.photos.selectedPhoto.rating,
    description: state => state.photos.selectedPhoto.description,
    requesting: state => state.photos.requesting,
    error: state => state.photos.error,
  }),
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
  min-height: 28px;
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

