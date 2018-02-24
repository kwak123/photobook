<!--
Based on https://codelike.pro/create-a-contenteditable-with-vue/
-->

<template>
  <div
    class="editable__input"
    contenteditable="true"
    :data-text="empty"
    @input="$emit('update:content', $event.target.innerText)"
    @keydown="onKeyDown"
    @blur="onEditComplete"></div>
</template>


<script>
export default {
  name: 'Editable',
  props: ['content', 'contentType', 'handleEditComplete'],
  mounted() {
    this.$el.innerText = this.content;
  },
  watch: {
    content() {
      this.$el.innerText = this.content;
    },
  },
  methods: {
    onEditComplete() {
      this.handleEditComplete(this.contentType, this.$el.innerText);
    },
    onKeyDown(e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        this.$el.blur();
        this.handleEditComplete();
      }
    },
  },
  computed: {
    empty() {
      return `No ${this.contentType}`;
    },
  },
};
</script>

<style>
.editable__input {
  outline: none;
  padding-bottom: 4px;
}

.editable__input:empty:not(:focus):before {
  content:attr(data-text);
  color: lightgrey;
}
</style>
