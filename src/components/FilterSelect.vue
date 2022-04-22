<template>
  <select
    class="form__sel"
    @change="change"
    :disabled="!parentData.length"
  >
    <option class="form__option" value="" selected>
      全部{{ parentName }}
    </option>
    <option
      class="form__option"
      v-for="item in parentData"
      :key="item"
      :value="item"
    >
      {{ item }}
    </option>
  </select>
</template>
<script>
export default {
  name: 'filter-select',
  props: {
    parentName: String,
    parentData: Array,
  },
  methods: {
    change(e) {
      this.$emit('update', e.target.value);
    },
  },
};
</script>
<style lang="scss" scoped>
  .form {
    &__sel {
      @include pad {
        width: 100%;
        margin: {
          bottom: 15px;
        }
      }
      border: {
        radius: 5px;
        width: 0;
      }
      font: {
        size: 15px;
      }
      appearance: none;
      background: {
        image: url("../assets/image/down-arrow.png");
        repeat: no-repeat;
        size: 6px 12px;
        position: 95% 50%;
        color: #ddd;
      }
      padding: 10px 30px 10px 15px;
      margin: {
        right: 5px;
      }
    }
    &__option {
      background: {
        color: #fff;
      }
    }
  }
</style>
