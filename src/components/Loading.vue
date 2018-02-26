<template>
  <div v-if="requesting" class="loading"></div>
  <div v-else>{{ text }}</div>
</template>

<script>
export default {
  name: 'Loading',
  props: ['requesting', 'error', 'message'],
  computed: {
    text() {
      return this.error ? this.error : this.message;
    },
  },
};
</script>

<style>
.loading {
  border: 6px solid lightgrey;
  border-top: 6px solid darkslategrey;
  border-radius: 50%;
  height: 48px;
  width: 48px;
  animation: rotate 3s linear infinite;
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
