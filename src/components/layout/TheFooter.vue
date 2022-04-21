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
  render(h) {
    return h(
      'footer',
      {
        class: 'footer',
        domProps: {
          innerHTML:
          `<p class="footer__text">${this.parentTitle}</p>
           <a href="${this.parentSrc}" class="footer__link">${this.parentSrc}</a>`,
        },
      },
    );
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
