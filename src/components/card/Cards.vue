<script>
import CardItem from './CardItem.vue';

export default {
  name: 'cards',
  props: {
    parentData: Array,
  },
  render(h) {
    return h(
      'ul',
      {
        class: 'cardBox',
      },
      this.parentData
        .map((item) => h(
          'CardItem',
          {
            key: item.ID,
            props: { 'parent-data': item },
          },
        )),
    );
  },
  components: { CardItem },
};
</script>
<style lang="scss">
  .cardBox {
    display: grid;
    grid: {
      template-columns: repeat(3, 1fr);
      column-gap: 30px;
      row-gap: 30px;
    }
    margin: {
      top: 25px;
    }
    @include pad {
      grid: {
        template-columns: repeat(2, 1fr);
      }
    }
    @include phone-lg {
      margin: {
        top: 15px;
      }
      grid: {
        template-columns: repeat(1, 1fr);
        row-gap: 10px;
      }
    }
  }
</style>
