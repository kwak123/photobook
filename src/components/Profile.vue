<template>
  <div class="profile__container">
    <div class="profile__side-panel">
      <h1>Photobook</h1>
      <UserInfo v-bind:user="user"/>
      <PhotoList
        v-bind="{ photoList, handlePhotoSelected }"/>
    </div>
    <div class="profile__selected">
      <PhotoDetail v-bind:photo="photo"/>
    </div>
  </div>
</template>

<script>
import UserInfo from './UserInfo';
import PhotoList from './PhotoList';
import PhotoDetail from './PhotoDetail';

export default {
  name: 'Profile',
  components: {
    UserInfo,
    PhotoList,
    PhotoDetail,
  },
  props: ['photoList', 'photo', 'user', 'handlePhotoSelected'],
};
</script>

<style>
.profile__container {
  display: flex;
}

.profile__side-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30vw;
}

.profile__selected {
  width: 70vw;
}
</style>
