/*
 * @Author: guanyaoming guanyaoming@linklogis.com
 * @Date: 2022-11-30 17:57:26
 * @LastEditors: guanym 1195817329@qq.com
 * @LastEditTime: 2022-12-03 15:55:55
 * @FilePath: \energise-cli-template\src\router\routes.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
exports.optionsRoutes = [
  {
    path: "table",
    name: "Table",
    meta: { title: "table", icon: "table" },
    component: (resolve) => require(["@/views/table"], resolve),
  },
  {
    path: "tree",
    name: "Tree",
    meta: { title: "tree", icon: "tree" },
    component: (resolve) => require(["@/views/tree"], resolve),
  },

  {
    path: "form",
    name: "Form",
    meta: { title: "form", icon: "form" },
    component: (resolve) => require(["@/views/form"], resolve),
  },

  {
    path: "nested",
    meta: {
      title: "Nested",
      icon: "nested",
    },
    name: "Nested",
    component: (resolve) => require(["@/views/nested/index"], resolve),
    children: [
      {
        path: "menu1",
        meta: { title: "Menu1" },
        name: "Menu1",
        component: (resolve) =>
          require(["@/views/nested/menu1/index"], resolve),
        children: [
          {
            path: "menu1-1",
            name: "Menu1A1",
            meta: { title: "Menu1-1" },
            component: (resolve) =>
              require(["@/views/nested/menu1/menu1-1"], resolve),
          },
          {
            path: "menu1-2",
            meta: { title: "Menu1-2" },
            name: "Menu1A2",
            component: (resolve) =>
              require(["@/views/nested/menu1/menu1-2/index"], resolve),
            children: [
              {
                path: "menu1-2-1",
                name: "Menu1A2A1",
                meta: { title: "Menu1-2-1" },
                component: (resolve) =>
                  require(["@/views/nested/menu1/menu1-2/menu1-2-1"], resolve),
              },
              {
                path: "menu1-2-2",
                name: "Menu1A2A2",
                meta: { title: "Menu1-2-2" },
                component: (resolve) =>
                  require(["@/views/nested/menu1/menu1-2/menu1-2-2"], resolve),
              },
            ],
          },
          {
            path: "menu1-3",
            name: "Menu1A3",
            meta: { title: "Menu1-3" },
            component: (resolve) =>
              require(["@/views/nested/menu1/menu1-3"], resolve),
          },
        ],
      },
      {
        path: "menu2",
        name: "Menu2",
        meta: { title: "menu2" },
        component: (resolve) =>
          require(["@/views/nested/menu2/index"], resolve),
      },
    ],
  },
];
