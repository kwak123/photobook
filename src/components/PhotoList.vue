<template>
  <div>
    <div v-for="(photo, idx) in photoList" :key="idx">
      <p>{{ photo.url }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotoList',
  props: ['photo-list'],
};
</script>
