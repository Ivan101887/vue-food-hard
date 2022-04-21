<script>
export default {
  name: 'the-header',
  props: {
    parentTitle: {
      type: String,
      required: true,
    },
  },
  render(h) {
    return h(
      'header',
      {
        class: 'header',
        domProps: {
          innerHTML:
          `<h1 class="header__tit text-center">${this.parentTitle}</h1>`,
        },
      },
    );
  },
};
</script>
<style lang="scss">
  .header {
    padding: {
      top: 32px;
      bottom: 35px;
    }
    @include phone-md {
      padding: {
        top: 28px;
        bottom: 30px;
      }
    }
    @include phone-sm {
      padding: {
        top: 24px;
        bottom: 26px;
      }
    }
    &__tit {
      font: {
        size: 2rem;
        weight: 600;
      }
      color: #666;
      @include phone-lg {
        font: {
          size: 30px;
        }
      }
      @include phone-md {
        font: {
          size: 28px;
        }
      }
      @include phone-sm {
        font: {
          size: 24px;
        }
      }
    }
  }
</style>
