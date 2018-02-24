<template>
  <div class="">
    <p>{{ username }}</p>
    <p>{{ first }}</p>
    <p>{{ last }}</p>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  data() {
    return {
      username: 'TestAccount',
      imageUrL: '',
      first: 'Default',
      last: 'User',
      rating: 3.8,
    };
  },
};
</script>
