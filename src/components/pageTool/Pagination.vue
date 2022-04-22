<template>
  <div class="pagebar">
      <input
        type="button"
        :value="index + 1"
        v-for="(item, index) in parentLen"
        :key="item"
        :class="[
          'pagebar__btn btn btn-light btn-sm',
          { 'pagebar__btn--active': parentIndex === index },
        ]"
        :disabled="parentIndex === index"
        @click="$emit('update', index)"
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
  .pagebar {
    &__btn {
      &--active {
        color: #fff;
        background: {
          color: #0ca4d3;
        }
      }
    }
  }
</style>
