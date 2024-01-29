// 把 link-ui-web 里面的 table 二次封装一层，通过传入 tableData 和 columnconfig 满足平时 table 的作用
export default {
  name: "myTable",
  props: {
    columnConfig: {
      type: Array,
      default: () => [],
    },
    tableData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  template: `
    <el-table v-bind="$attrs" :data="tableData">
      <el-table-column 
        v-for="(item, index) in columnConfig" 
        :key="index" 
        v-bind="item">
        <template v-if="item.isFormatMoney || item.isFormatDict || item.isNeedTemplate" v-slot:default="{ row }">
          <span v-if="item.isFormatMoney">{{ row[item.prop] | numFormate }}</span>
          <span v-if="item.isFormatDict">{{ row[item.prop] | strToObjValue }}</span>
          <slot v-if="item.isNeedTemplate" :name="item.prop" :row="row"></slot>
        </template>
      </el-table-column>
    </el-table>
  `,
};
