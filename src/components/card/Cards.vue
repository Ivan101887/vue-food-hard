<template>
  <ul class="cardBox">
    <CardItem v-for="item in parentData" :key="item.ID" :parent-data="item" />
  </ul>
</template>
<script>
import CardItem from './CardItem.vue';

export default {
  name: 'cards',
  props: {
    parentData: Array,
  },
  components: { CardItem },
};
</script>
<style lang="scss">
  .cardBox {
    display: grid;
    grid: {
      template-columns: 1fr 1fr;
      column-gap: 30px;
      row-gap: 30px;
    }
    @include pad {
      grid: {
        template-columns: 1fr;
        row-gap: 10px;
      }
    }
    @include phone-lg {
      margin: {
        top: 15px;
      }
    }
  }
</style>
