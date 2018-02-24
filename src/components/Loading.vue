<template>
  <div class="loading"></div>
</template>

<script>
export default {
  name: 'Loading',
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
