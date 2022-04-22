<template>
  <aside class="sidebar">
    <figure class="adv">
      <a href="javascript:;">
        <img src="@/assets/image/adv/adv1.png" alt="adv1" class="adv__img" />
      </a>
    </figure>
    <figure class="adv">
      <a href="javascript:;">
        <img src="@/assets/image/adv/adv2.png" alt="adv2" class="adv__img" />
      </a>
    </figure>
    <figure class="adv adv-sticky">
      <a href="javascript:;">
        <img src="@/assets/image/adv/adv3.png" alt="adv3" class="adv__img" />
      </a>
    </figure>
  </aside>
</template>
<script>
export default {
  name: 'the-sidebar',
};
</script>
<style lang="scss" scoped>
  .adv {
    &-sticky {
      position: sticky;
      top: 0;
    }
    &__img {
      display: block;
      width: 100%;
      height: auto;
    }
    margin: {
      bottom: 15px;
    }
  }
</style>
