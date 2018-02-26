<template>
  <div class="userinfo__container">
    <div class="userinfo__avatar--container">
      <img
        class="userinfo__avatar--img"
        :src="avatar"
        alt="User profile picture"/>
    </div>
    <div class="userinfo__username--container">
      <h4 class="userinfo__username--text">{{ username }}</h4>
    </div>
    <div class="userinfo__first--container userinfo__flex">
      <p class="userinfo__first--title">First name:</p>
      <p class="userinfo__first--text">{{ first }}</p>
    </div>
    <div class="userinfo__last--container userinfo__flex">
      <p class="userinfo__last--title">Last name:</p>
      <p class="userinfo__last--text">{{ last }}</p>
    </div>
    <div class="userinfo__rating--container userinfo__flex">
      <p class="userinfo__rating--title">Rating:</p>
      <p class="userinfo__rating--text">{{ rating}}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'UserInfo',
  computed: mapState({
    avatar: state => state.user.avatar,
    username: state => state.user.username,
    first: state => state.user.first,
    last: state => state.user.last,
    rating: state => state.user.rating,
  }),
};
</script>

<style>
.userinfo__container {
  display: flex;
  min-height: fit-content;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.userinfo__flex {
  display: flex;
  width: 80%;
  justify-content: space-between;
  border-bottom: 1px lightgrey solid;
}

.userinfo__avatar--container {
  height: 128px;
  width: 128px;
}

.userinfo__avatar--img {
  height: 128px;
  min-height: 128px;
  width: 128px;
  min-width: 128px;
  object-fit: cover;
  border-radius: 64px;
}

.userinfo__username--text {
  margin: 16px 0 8px 0;
}

.userinfo__username--text:empty::before {
  content: 'Username';
  color: lightgrey;
}

.userinfo__rating--text {
  /* width of star + space */
  margin-left: -22px;
}

.userinfo__rating--text:before {
  content: '★ ';
}
</style>
