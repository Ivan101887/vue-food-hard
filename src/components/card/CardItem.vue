<script>
export default {
  name: 'card',
  props: {
    parentData: Object,
  },
  render(createElement) {
    return createElement(
      'li',
      {
        class: 'card',
        domProps: {
          innerHTML: `
          ${this.parentData.Url ? `<a href="${this.parentData.Url}" target="_blank">` : ''}
            <figure class="card__imgWrap">
              <img
                src="${this.parentData.PicURL}"
                alt="${this.parentData.Name}"
                class="card__img"
                loading="lazy"
              />
            </figure>
            <p class="card__tag">${this.parentData.City}</p>
            <div class="card__content">
              <em class="card__town">${this.parentData.Town}</em>
              <h2 class="card__name">${this.parentData.Name}</h2>
              <p class="card__desc">${this.parentData.HostWords}</p>
            </div>
          ${this.parentData.Url ? '</a>' : ''}`,
        },
      },
    );
  },

};
</script>
<style lang="scss">
  .card {
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    &:hover {
      .card {
        &__imgWrap {
          transform: scale(1.05);
        }
        &__content {
          bottom: 12px;
        }
      }
    }
    &__imgWrap {
      height: 200px;
      &::after {
        content: "";
        position: absolute;
        top: 0;
        display: block;
        width: 100%;
        height: 100%;
        background: {
          image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.3) 70%,
            rgba(0, 0, 0, 0.8) 100%
          );
        }
      }
      transition: all 0.5s ease-in;
    }
    &__img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &__tag {
      position: absolute;
      top: 0;
      font: {
        size: 12px;
      }
      color: #fff;
      background: {
        color: #e49400;
      }
      padding: 5px;
    }
    &__content {
      position: absolute;
      bottom: -54px;
      color: #fff;
      max-width: 100%;

      padding: {
        left: 12px;
      }
      transition: all 0.5s ease-in;
    }
    &__town {
      opacity: 0.6;
      display: block;
      margin: {
        bottom: 5px;
      }
      font: {
        size: 15px;
        style: italic;
      }
    }
    &__name {
      font: {
        weight: 400;
      }
      &::after {
        content: "";
        display: block;
        width: 48px;
        margin: {
          top: 10px;
          bottom: 10px;
        }
        border: {
          top: 2px solid #fff;
          bottom: 2px solid #fff;
        }
      }
    }
    &__desc {
      font: {
        size: 14px;
      }
      height: 38px;
      overflow: hidden;
      line-height: 1.35em;
    }
  }
</style>
