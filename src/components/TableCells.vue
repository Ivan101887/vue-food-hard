<template>
  <div class="box">
    <table class="contentTbl">
      <thead class="contentTbl__thead">
        <tr class="contentTbl__tr">
          <th class="contentTbl__th cell-sm">編號</th>
          <th class="contentTbl__th cell-md">行政區域</th>
          <th class="contentTbl__th cell-md">鄉鎮區</th>
          <th class="contentTbl__th cel-lg">商家</th>
          <th class="contentTbl__th cell-xl">地址</th>
        </tr>
      </thead>
      <tbody class="contentTbl__tbody">
        <tr
          v-for="(item, index) in parentData"
          :key="item.ID"
          :class="['contentTbl__tr', index % 2 !== 0 ? 'bg-grey' : 'bg-white']"
        >
          <td class="contentTbl__td text-right text-cancel">
            {{ parentBegin + index + 1 }}
          </td>
          <td class="contentTbl__td text-cancel">{{ item.City }}</td>
          <td class="contentTbl__td text-cancel">{{ item.Town }}</td>
          <td class="contentTbl__td">
            <a
              class="contentTbl__link"
              v-if="item.Url"
              :href="item.Url"
              target="_blank"
            >
              {{ item.Name }}
            </a>
            <template v-else>
              {{ item.Name }}
            </template>
          </td>
          <td class="contentTbl__td text-ellipsis" :title="item.Address">
            {{ item.Address }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'table-cells',
  inheritAttrs: false,
  props: {
    parentData: Array,
    parentBegin: Number,
  },
};
</script>
<style lang="scss" scoped>
  .box {
    overflow-x: auto;
  }
  .contentTbl {
    width: 900px;
    table-layout: fixed;
    &__td,
    &__th {
      padding: 18px 10px;
      border: 1px solid #ddd;
      margin: {
        right: -1px;
        bottom: -1px;
      }
      white-space: nowrap;
    }
    &__th {
      border-bottom: {
        width: 2px;
      }
      box-sizing: border-box;
    }
    &__link {
      color: #02a0d2;
      &:hover {
        text: {
          decoration: none;
        }
      }
    }
    &__index {
      text-align: right;
    }
    &__thead {
      &__tr {
        font: {
          weight: 600;
        }
        color: #858585;
        background: linear-gradient(#f8f8f8, #ececec);
      }
    }
    &__tbody:hover {
      .contentTbl {
        &__tr:hover {
          background: {
            color: #eff4f7;
          }
        }
      }
    }
  }
  .cell {
    &-sm {
      width: 7.2%;
    }
    &-md {
      width: 10.4%;
    }
    &-lg {
      width: 30.1%;
    }
    &-xl {
      width: 41.9%;
    }
  }
</style>
