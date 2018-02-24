<template>
  <div class="profile__container">
    <div class="profile__side-panel">
      <h1>Photobook</h1>
      <UserInfo />
      <PhotoList />
    </div>
    <div class="profile__selected">
      <PhotoDetail />
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
};
</script>

<style>
.profile__container {
  display: flex;
  height: 100%;
}

.profile__side-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30vw;
  background-color: #f9f9f9;
  border-right: 1px lightgrey solid;
  overflow-y: scroll;
  padding-bottom: 16px;
}

.profile__selected {
  width: 70vw;
  overflow-y: scroll;
}
</style>
