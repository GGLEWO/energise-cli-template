<template>
  <div v-bLoading="layerLoading">
    <div class="sear-box-201 sear-final">
      <llsInput
        v-model="queryCondition.limitNo"
        type="search"
        clearable
      >授信编号</llsInput>
      <llsInput
        v-model="queryCondition.companyName"
        type="search"
        clearable
      >企业名称</llsInput>
      <llsButton type="primary" @click="handleQuery()">查询</llsButton>
    </div>
    <!-- 列表 -->
    <my-table :column-config="columnConfig" :table-data="tableData">
      <template #action="{ row }">
        <div class="table-btn" @click="handleDetail(row)">查看</div>
      </template>
      <template #createTime="{ row }">
        <div>{{ row.createTime | dayFormat }}</div>
      </template>
      <template #limitNo="{ row }">
        <div class="table-btn" @click="handleDetail(row)">
          {{ row.limitNo }}
        </div>
      </template>
    </my-table>
    <!-- 分页器 -->
    <llsPagination
      :total="options.total"
      :page-size="options.size"
      :page-index="options.current"
      @change="pageChange"
    />
  </div>
</template>

<script>
import { validtableColumnConfig, invalidtableColumnConfig } from './config';
import dayjs from 'dayjs';
export default {
  filters: {
    dayFormat(val) {
      return dayjs(val).format('YYYY-MM-DD');
    },
  },
  props: {
    initIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      layerLoading: false,
      tableData: [],
      queryCondition: {
        limitNo: '',
        companyName: '',
      },
      options: {
        total: 0,
        current: 1,
        size: 10,
      },
    };
  },
  computed: {
    columnConfig() {
      if (this.initIndex === 0) {
        return validtableColumnConfig;
      } else {
        return invalidtableColumnConfig;
      }
    },
    tableDataUrl() {
      if (this.initIndex === 0) {
        return '/spylimit/limitValidList';
      } else {
        return '/spylimit/limitInvalidList';
      }
    },
  },
  created() {
    this.queRecordPage();
  },
  methods: {
    // 分页
    pageChange(obj) {
      this.options.current = obj.cur;
      this.options.size = obj.size;
      this.queRecordPage(obj.cur, obj.size);
    },
    handleQuery() {
      this.options.current = 1;
      this.queRecordPage();
    },
    // 得到表格数据
    queRecordPage(cur = 1, size = this.options.size) {
      const queryObj = {
        current: cur,
        size,
        queryCondition: {
          ...this.queryCondition,
          limitQueryType: this.initIndex === 1 ? 'INVALID' : null,
        },
      };
      this.layerLoading = true;
      this.$http
        .post(this.tableDataUrl, queryObj)
        .then(({ body: { data }}) => {
          console.log(data);
          this.tableData = data.records;
          this.options.total = data.total;
        })
        .finally(() => {
          this.layerLoading = false;
        });
    },

    handleDetail(row) {
      this.$router.push({
        path: '/ctpLimitBasicManage/detail',
        query: {
          limitNo: row.limitNo,
          enterpriseType: row.enterpriseType
            ? JSON.parse(row.enterpriseType)['dictParam']
            : '',
          occupyCompanyId: row.companyId,
          funderId: row.funderId,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.sear-final {
  .right1 {
    margin-left: 20px;
  }

  .right2 {
    margin-left: 20px;
  }
}

/deep/ .lls-table__fixed::before,
/deep/ .lls-table__fixed-right::before {
  height: 0;
}
</style>
