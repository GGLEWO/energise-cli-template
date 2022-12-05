/*
 * @Author: guanyaoming guanyaoming@linklogis.com
 * @Date: 2022-11-30 17:57:26
 * @LastEditors: guanyaoming guanyaoming@linklogis.com
 * @LastEditTime: 2022-12-05 15:12:40
 * @FilePath: \energise-cli-template\src\router\routes.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
exports.optionsRoutes = [
  {
    path: "table",
    name: "Table",
    meta: { title: "table", icon: "table" },
    component: "table",
  },
  {
    path: "tree",
    name: "Tree",
    meta: { title: "tree", icon: "tree" },
    component: "tree",
  },

  {
    path: "form",
    name: "Form",
    meta: { title: "form", icon: "form" },
    component: "form",
  },

  {
    path: "nested",
    meta: {
      title: "Nested",
      icon: "nested",
    },
    name: "Nested",
    component: "nested/index",
    children: [
      {
        path: "menu1",
        meta: { title: "Menu1" },
        name: "Menu1",
        component: "nested/menu1/index",
        children: [
          {
            path: "menu1-1",
            name: "Menu1A1",
            meta: { title: "Menu1-1" },
            component: "nested/menu1/menu1-1",
          },
          {
            path: "menu1-2",
            meta: { title: "Menu1-2" },
            name: "Menu1A2",
            component: "nested/menu1/menu1-2/index",
            children: [
              {
                path: "menu1-2-1",
                name: "Menu1A2A1",
                meta: { title: "Menu1-2-1" },
                component: "nested/menu1/menu1-2/menu1-2-1",
              },
              {
                path: "menu1-2-2",
                name: "Menu1A2A2",
                meta: { title: "Menu1-2-2" },
                component: "nested/menu1/menu1-2/menu1-2-2",
              },
            ],
          },
          {
            path: "menu1-3",
            name: "Menu1A3",
            meta: { title: "Menu1-3" },
            component: "nested/menu1/menu1-3",
          },
        ],
      },
      {
        path: "menu2",
        name: "Menu2",
        meta: { title: "menu2" },
        component: "nested/menu2/index",
      },
    ],
  },
];
