<template>
  <footer class="footer">
    <p class="footer__text">{{ parentTitle }}</p>
    <a :href="parentSrc" class="footer__link">{{ parentSrc }}</a>
  </footer>
</template>
<script>
export default {
  name: 'the-footer',
  props: {
    parentTitle: {
      type: String,
      required: true,
    },
    parentSrc: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss">
  .footer {
    font: {
      size: 12px;
    }
    color: #666;
    padding: {
      top: 15px;
      bottom: 15px;
    }
    text: {
      align: center;
    }
    &__link {
      color: inherit;
    }
  }
</style>
