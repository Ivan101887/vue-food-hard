<template>
  <div id="app">
    <TheLoader v-if="isLoading" />
    <TheHeader :parent-title="title" />
    <main class="main container mx-auto">
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
      <Cards :parent-data="SelectedData" />
    </main>
    <TheFooter :parent-title="source.info" :parent-src="source.src" />
  </div>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader.vue';
import TheFooter from '@/components/layout/TheFooter.vue';
import TheLoader from '@/components/TheLoader.vue';
import Cards from '@/components/card/Cards.vue';
import FilterSelect from '@/components/FilterSelect.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
    TheLoader,
    Cards,
    FilterSelect,
  },
  data() {
    return {
      title: '農場地方美食小吃料理',
      source: {
        info: '政府資料開放平台',
        src: 'https://data.gov.tw/dataset/6037',
      },
      now: {
        city: '',
        town: '',
      },
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
          return this.data
            .filter((item) => item.City === this.now.city)
            .filter((item) => item.Town === this.now.town);
        }
        return this.data.filter((item) => item.City === this.now.city);
      }
      return this.data;
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
  },
};
</script>

<style lang="scss" scoped>
  .form {
    text: {
      align: center;
    }
    background: {
      color: #fff;
    }
    border: {
      radius: 5px;
    }
    padding: {
      top: 20px;
      bottom: 20px;
    }
    @include phone-lg {
      padding: {
        top: 0;
        bottom: 0;
      }
      background: {
        color: transparent;
      }
    }
  }
  .main {
    padding: {
      left: 15px;
      right: 15px;
    }
    @include phone-lg {
      padding: {
        left: 10px;
        right: 10px;
      }
    }
  }
</style>
