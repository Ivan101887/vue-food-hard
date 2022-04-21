<template>
  <header class="header">
    <h1 class="header__tit text-center">{{ parentTitle }}</h1>
  </header>
</template>
<script>
export default {
  name: 'the-header',
  props: {
    parentTitle: {
      type: String,
      required: true,
    },
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
