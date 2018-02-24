<template>
  <div class="">
    <p>{{ user.username }}</p>
    <p>{{ user.first }}</p>
    <p>{{ user.last }}</p>
    <p>{{ user.average }}</p>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  props: ['user'],
};
</script>
