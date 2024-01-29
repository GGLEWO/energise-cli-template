import myTable from "./template.js";

myTable.install = function (Vue) {
  Vue.component(myTable.name, myTable);
};

export default myTable;
