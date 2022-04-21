<template>
  <div class="page">
    <input
      type="button"
      :value="index + 1"
      v-for="(item, index) in parentLen"
      :key="item"
      :class="['page__btn', { 'page__btn--active': parentIndex === index }]"
      :disabled="parentIndex === index"
      @click="$emit('update', $event.target.value - 1)"
    />
  </div>
</template>
<script>
export default {
  name: 'Pagination',
  props: {
    parentIndex: Number,
    parentLen: Number,
  },
};
</script>
<style lang="scss" scoped>
  .page {
    margin: {
      left: 23px;
    }
    &__btn {
      width: 100%;
      display: block;
      margin: {
        top: 6px;
        bottom: 6px;
      }
      border: 0;
      background: {
        color: transparent;
      }
      cursor: pointer;
      font: {
        size: 15px;
      }
      color: #888;
      &:hover {
        color: #666;
      }
      &--active {
        color: #666;
        font: {
          weight: 600;
        }
        &:disabled {
          cursor: default;
        }
        border: {
          right: 3px solid #0077b5;
        }
      }
    }
  }
</style>
