/*
 * @Author: guanyaoming guanyaoming@linklogis.com
 * @Date: 2022-11-30 17:57:26
 * @LastEditors: guanyaoming guanyaoming@linklogis.com
 * @LastEditTime: 2022-12-02 15:30:10
 * @FilePath: \energise-cli-template\src\router\routes.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
exports.optionsRoutes = [
  {
    path: "/table",
    children: [
      {
        path: "index",
        name: "Table",
        meta: { title: "table", icon: "table" },
        parent: "table",
      },
    ],
  },
  {
    path: "/tree",
    children: [
      {
        path: "index",
        name: "Tree",
        meta: { title: "tree", icon: "tree" },
        parent: "tree",
      },
    ],
  },

  {
    path: "/form",
    children: [
      {
        path: "index",
        name: "Form",
        meta: { title: "form", icon: "form" },
        parent: "form",
      },
    ],
  },

  {
    path: "/nested",
    redirect: "/nested/menu1",
    meta: {
      title: "Nested",
      icon: "nested",
    },
    children: [
      {
        path: "menu1",
        name: "Menu1",
        meta: { title: "Menu1" },
        parent: "nested",
        children: [
          {
            path: "menu1-1",
            name: "Menu1A1",
            meta: { title: "Menu1-1" },
            parent: "menu1",
          },
          {
            path: "menu1-2",
            name: "Menu1A2",
            meta: { title: "Menu1-2" },
            parent: "menu1",
            children: [
              {
                path: "menu1-2-1",
                name: "Menu1A2A1",
                meta: { title: "Menu1-2-1" },
                parent: "menu1/menu1-2",
              },
              {
                path: "menu1-2-2",
                name: "Menu1A2A2",
                meta: { title: "Menu1-2-2" },
                parent: "menu1/menu1-2",
              },
            ],
          },
          {
            path: "menu1-3",
            name: "Menu1A3",
            meta: { title: "Menu1-3" },
            parent: "menu1",
          },
        ],
      },
      {
        path: "menu2",
        name: "Menu2",
        meta: { title: "menu2" },
        parent: "nested",
      },
    ],
  },
];
