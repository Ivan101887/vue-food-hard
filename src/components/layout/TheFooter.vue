<template>
  <footer class="footer">
    <div class="container mx-auto">
      <h3 class="footer__co">CMoney全曜財經資訊</h3>
      <blockquote>
        <p class="footer__resource">
          資料來源:
          <a
            href="https://data.gov.tw/dataset/6037"
            class="footer__link"
            target="_blank"
          >
            政府資料開放平台
          </a>
        </p>
      </blockquote>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'the-footer',
};
</script>
<style lang="scss">
  .footer {
    width: 100%;
    background: {
      color: #999;
    }
    text: {
      indent: 15px;
    }
    color: #ccc;
    padding: {
      top: 20px;
      bottom: 20px;
    }
    @include phone-lg {
      text: {
        indent: 0;
        align: center;
      }
    }
    &__co {
      font: {
        size: 20px;
        weight: 600;
      }
      margin: {
        bottom: 5px;
      }
    }
    &__resource {
      font: {
        size: 14px;
      }
    }
    &__link {
      color: #fff;
      text: {
        decoration: none;
      }
    }
  }
</style>
