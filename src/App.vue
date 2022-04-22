<template>
  <div id="app">
    <TheLoader v-if="isLoading" />
    <TheHeader :parent-title="title" />
    <div class="outer container mx-auto">
      <main class="main">
        <div class="inner">
          <div class="inner__head">
            <div class="form">
              <FilterSelect
                parent-name="行政區"
                parent-id="City"
                :parent-data="cityArr"
                @update="updateNowCity"
              />
              <FilterSelect
                parent-name="鄉鎮區"
                parent-id="Town"
                :parent-data="townArr"
                @update="updateNowTown"
              />
            </div>
            <mode :parent-index="index.mode" @update="updateModeIndex" />
          </div>
          <div class="inner__body">
            <ListTable
              :parent-data="SelectedData[index.page]"
              :parent-is-mobile="isMobile"
              v-if="index.mode === 0"
            />
            <Table
              :parent-data="SelectedData[index.page]"
              :parent-len="SelectedData.length"
              :parent-index="index.page"
              :parent-size="perPage"
              v-else-if="index.mode === 1"
            />
            <Cards :parent-data="SelectedData[index.page]" v-else />
          </div>
          <div class="inner__foot">
            <PageInfo
              :parent-index="index.page"
              :parent-len="SelectedData.length"
              v-if="!isMobile"
            />
            <Pagination
              :parent-index="index.page"
              :parent-len="SelectedData.length"
              @update="updatePageIndex"
            />
          </div>
        </div>
      </main>
      <TheSidebar v-if="!isMobile" />
    </div>
    <TheFooter :parent-title="source.info" :parent-src="source.src" />
  </div>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader.vue';
import TheFooter from '@/components/layout/TheFooter.vue';
import TheLoader from '@/components/TheLoader.vue';
import Cards from '@/components/card/Cards.vue';
import FilterSelect from '@/components/FilterSelect.vue';
import TheSidebar from '@/components/TheSidebar.vue';
import Pagination from '@/components/pageTool/Pagination.vue';
import Mode from '@/components/Mode.vue';
import PageInfo from '@/components/pageTool/PageInfo.vue';
import ListTable from '@/components/ListTable.vue';
import Table from '@/components/Table.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
    TheLoader,
    Pagination,
    Cards,
    FilterSelect,
    TheSidebar,
    Mode,
    PageInfo,
    ListTable,
    Table,
  },
  data() {
    return {
      title: '農場地方美食小吃料理',
      source: {
        info: 'CMoney全曜財經資訊',
        src: 'https://data.gov.tw/dataset/6037',
      },
      isMobile: window.innerWidth <= 480,
      now: {
        city: '',
        town: '',
      },
      index: {
        mode: 0,
        page: 0,
      },
      perPage: 10,
      data: [],
      isLoading: true,
    };
  },
  async created() {
    await this.getData();
    this.isLoading = !this.isLoading;
  },
  computed: {
    cityArr() {
      return [...new Set(this.data.map((item) => item.City))];
    },
    townArr() {
      return [...new Set(
        this.data.filter((item) => item.City === this.now.city).map((item) => item.Town),
      )];
    },
    SelectedData() {
      if (this.now.city) {
        if (this.now.town) {
          return this.sortData(
            this.data
              .filter((item) => item.City === this.now.city)
              .filter((item) => item.Town === this.now.town),
          );
        }
        return this.sortData(this.data.filter((item) => item.City === this.now.city));
      }
      return this.sortData(this.data);
    },
  },
  methods: {
    async getData() {
      try {
        const api = 'https://data.coa.gov.tw/Service/OpenData/ODwsv/ODwsvTravelFood.aspx';
        const res = await this.$http.get(api);
        this.data = res.data;
      } catch (e) {
        console.log('資料連結失敗:\n', e);
      }
    },
    updateNowCity(val) {
      this.now.city = val;
      this.now.town = '';
    },
    updateNowTown(val) {
      this.now.town = val;
    },
    sortData(array) {
      const arr = [];
      array.forEach((item, i) => {
        if (i % this.perPage === 0) {
          arr.push([]);
        }
        const index = Math.floor(i / this.perPage);
        arr[index].push(item);
      });
      return arr;
    },
    updatePageIndex(val) {
      this.index.page = val;
    },
    updateModeIndex(val) {
      this.index.mode = parseInt(val, 10);
    },
  },
};
</script>

<style lang="scss" scoped>
  .outer {
    display: grid;
    padding: {
      left: 15px;
      right: 15px;
    }
    grid: {
      template-columns: 75% 25%;
      column-gap: 30px;
    }
    @include pad {
      grid: {
        column-gap: 10px;
      }
    }
    @include phone-lg {
      grid: {
        template-columns: 100%;
        column-gap: 0;
      }
    }
  }
  .form {
    width: 50%;
    @include pad {
      width: 100%;
    }
  }
  .inner {
    &__head,
    &__foot {
      margin: {
        top: 15px;
        bottom: 15px;
      }
    }
    &__head {
      display: flex;
      flex: {
        wrap: wrap;
      }
      justify-content: space-between;
      align-items: flex-end;
    }
    &__foot {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>
