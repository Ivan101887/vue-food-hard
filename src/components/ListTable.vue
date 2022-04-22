<template>
  <ul class="listTable">
    <li class="restraunt" v-for="item in parentData" :key="item.ID">
      <div class="restraunt__wrap">
        <figure class="restraunt__imgWrap">
          <img
            :src="item.PicURL"
            :alt="item.Name"
            class="restraunt__img"
            loading="lazy"
          />
        </figure>
        <div class="restraunt__content">
          <h2 class="restraunt__name">
            <a
              class="restraunt__link"
              v-if="item.Url"
              :href="item.Url"
              target="_blank"
            >
              {{ item.Name }}
            </a>
            <template v-else>
              {{ item.Name }}
            </template>
          </h2>
          <div class="restraunt__dist">
            <p class="restraunt__city">{{ item.City }}</p>
            <em class="restraunt__town">{{ item.Town }}</em>
          </div>
          <p class="restraunt__desc">
            {{
              parentIsMobile
                ? item.HostWords.substring(0, 40)
                : item.HostWords.substring(0, 100)
            }}
          </p>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'list-table',
  props: {
    parentData: Array,
    parentIsMobile: Boolean,
  },
};
</script>
<style lang="scss" scoped>
  .restraunt {
    &__wrap {
      position: relative;
      display: flex;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
      padding: 15px;
      margin: {
        bottom: 15px;
      }
      background-color: #fff;
      @include pad {
        padding: 10px;
      }
      @include phone-lg {
        padding: 15px;
        flex: {
          direction: column;
        }
      }
    }
    &__imgWrap {
      position: relative;
      overflow: hidden;
      width: 28%;
      @include pad {
        width: 50%;
      }
      @include phone-lg {
        width: 100%;
      }
      height: 160px;
      margin: {
        right: 15px;
      }
      flex: {
        shrink: 0;
      }
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
        opacity: 1;
        transition: all 0.5s ease-in-out;
      }
      &:hover {
        &::after {
          opacity: 0;
        }
        .restraunt {
          &__img {
            transform: scale(1.3);
          }
        }
      }
    }
    &__link {
      color: #02a0d2;
      text: {
        decoration: none;
      }
    }
    &__img {
      transition: all 0.5s ease-in;
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &__dist {
      position: absolute;
      top: 0;
      left: -50px;
      text-align: right;
      @include pad {
        display: flex;
        align-items: center;
        position: static;
        margin: {
          bottom: 10px;
        }
        text: {
          align: left;
        }
      }
    }
    &__city {
      width: fit-content;
      margin: {
        bottom: 10px;
      }
      font: {
        size: 0.84em;
      }
      color: #fff;
      padding: 5px;
      background: {
        color: #02a0d2;
      }
      @include pad {
        margin: {
          right: 10px;
          bottom: 0;
        }
      }
    }
    &__town {
      writing-mode: vertical-rl;
      padding: {
        right: 12px;
      }
      letter-spacing: 0.4em;
      font: {
        weight: 600;
      }
      color: #666;
      @include pad {
        writing-mode: horizontal-tb;
        letter-spacing: 0;
      }
    }
    &__content {
      margin-left: 15px;
      color: #000;
      @include pad {
        margin: {
          left: 5px;
        }
      }
      @include phone-lg {
        margin: {
          left: 0;
        }
      }
    }
    &__name {
      font: {
        size: 1.85rem;
        weight: 600;
      }
      margin: {
        bottom: 20px;
      }
      @include pad {
        font: {
          size: 1.5rem;
        }
        margin: {
          bottom: 10px;
        }
      }
      @include phone-lg {
        margin: {
          top: 15px;
          bottom: 15px;
        }
      }
    }
    &__desc {
      font: {
        size: 15px;
      }
      line-height: 1.7em;
      @include pad {
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
      @include phone-lg {
        -webkit-line-clamp: 2;
      }
    }
  }
</style>
