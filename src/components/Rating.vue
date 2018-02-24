<template>
  <div class="rating__container">
    <span
      v-for="n in 5"
      class="rating__container--star"
      :class="{ checked: rating + n > 5}"
      :key="n"
      @click="handleRatingSelected(6 - n)">
      ☆
    </span>
  </div>
</template>

<script>
export default {
  name: 'Rating',
  props: ['rating', 'handleRatingSelected'],
  mounted() {
    this.handleStars();
  },
  updated() {
    this.handleStars();
  },
  methods: {
    handleStars() {
      for (let i = 0; i < this.$el.children.length; i += 1) {
        const el = this.$el.children[i];
        if (el.className.includes('checked')) {
          el.innerHTML = '★';
        } else {
          el.innerHTML = '☆';
        }
      }
    },
  },
};
</script>

<style>
.rating__container {
  display: flex;
  flex-direction: row-reverse;
}

.rating__container--star {
  margin: 0 2px;
  cursor: pointer;
  font-size: 20px;
}

.rating__container--star:hover,
.rating__container--star:hover ~ span {
  color: #63947c;
}

.rating__container--star:active,
.rating__container--star:active ~ span {
  filter: brightness(0.9);
}

.rating.checked {
  color: darkslategrey;
}
</style>
