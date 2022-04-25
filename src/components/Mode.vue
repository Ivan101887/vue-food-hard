<template>
  <div class="disMode" id="DisMode">
    檢視模式:
    <button
      v-for="(item, i) in disMode"
      :key="i"
      :class="[
        'disMode__opt btn btn-cancel',
        { 'disMode__opt--active': parentIndex === i },
      ]"
      :value="i"
      type="button"
      @click.self="$emit('update', i)"
    >
      <font-awesome-icon class="icon" :icon="['fa-solid', item]" />
    </button>
  </div>
</template>
<script>
export default {
  name: 'mode',
  props: {
    parentIndex: Number,
  },
  data() {
    return {
      disMode: ['list', 'align-justify', 'border-all'],
    };
  },
};
</script>
<style lang="scss" scoped>
  .disMode {
    width: 50%;
    text: {
      align: right;
    }
    color: #999;
    font: {
      weight: 600;
    }
    @include pad {
      width: 100%;
      text: {
        align: center;
      }
      padding: {
        right: 15px;
      }
    }
    &__opt {
      height: fit-content;
      &:hover,
      &--active {
        color: #222;
      }
      .icon {
        pointer-events: none;
      }
    }
  }
</style>
