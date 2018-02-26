<template>
  <div
    class="editable__input"
    contenteditable="true"
    :data-text="empty"
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
      this.handleEditComplete({ [this.contentType]: this.$el.innerText });
    },
    onKeyDown(e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        this.$el.blur();
        this.onEditComplete();
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
  cursor: text;
}

.editable__input:empty {
  /* Needed to show blinking cursor when empty */
  padding: 0 1px;
}

.editable__input:empty:not(:focus):before {
  content: attr(data-text);
  color: lightgrey;
}
</style>
