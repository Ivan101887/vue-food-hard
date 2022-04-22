<template>
  <div class="pageInfo">
    <span class="pageInfo__text">
      美食頁次 {{ parentIndex + 1 }}/{{ parentLen }}
    </span>
  </div>
</template>
<script>
export default {
  name: 'page-info',
  props: {
    parentLen: Number,
    parentIndex: Number,
  },
};
</script>
