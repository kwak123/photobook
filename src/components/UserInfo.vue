<template>
  <div class="userinfo__container">
    <div class="userinfo__avatar">
      <img :src="avatar" alt="User profile picture"/>
    </div>
    <h4 class="userinfo__username">{{ username }}</h4>
    <p class="userinfo__first">{{ first }}</p>
    <p class="userinfo__last">{{ last }}</p>
    <p class="userinfo__average">{{ 0 }}</p>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  computed: {
    avatar() {
      return this.$store.state.user.avatar;
    },
    username() {
      return this.$store.state.user.username;
    },
    first() {
      return `First name: ${this.$store.state.user.first}`;
    },
    last() {
      return `Last name: ${this.$store.state.user.last}`;
    },
  },
};
</script>

<style>
.userinfo__container {
  display: flex;
  min-height: fit-content;

  flex-direction: column;
  align-items: center;
}

.userinfo__avatar {
  height: 128px;
  width: 128px;
}

.userinfo__avatar > img {
  height: 128px;
  width: 128px;
  object-fit: cover;
  border-radius: 64px;
}

.userinfo__username {
  margin: 16px 0 8px 0;
}

.userinfo__average {
  /* width of star + space */
  margin-left: -22px;
}

.userinfo__average:before {
  content: '★ ';
}
</style>
