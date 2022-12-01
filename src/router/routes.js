export const routes = [
  {
    path: "/login",
    component: () => require("../views/login/index"),
    hidden: true,
  },

  {
    path: "/404",
    component: () => require("../views/404"),
    hidden: true,
  },

  {
    path: "/",
    component: require("../layout/index.vue"),
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => require("../views/dashboard/index"),
        meta: { title: "Dashboard", icon: "dashboard" },
      },
    ],
  },

  {
    path: "/table",
    component: require("../layout/index.vue"),
    children: [
      {
        path: "index",
        name: "table",
        component: () => require("../views/table/index"),
        meta: { title: "table", icon: "table" },
      },
    ],
  },
  {
    path: "/tree",
    component: require("../layout/index.vue"),
    children: [
      {
        path: "index",
        name: "tree",
        component: () => require("../views/tree/index"),
        meta: { title: "tree", icon: "tree" },
      },
    ],
  },

  {
    path: "/form",
    component: require("../layout/index.vue"),
    children: [
      {
        path: "index",
        name: "Form",
        component: () => require("../views/form/index"),
        meta: { title: "Form", icon: "form" },
      },
    ],
  },

  {
    path: "/nested",
    component: require("../layout/index.vue"),
    redirect: "/nested/menu1",
    name: "Nested",
    meta: {
      title: "Nested",
      icon: "nested",
    },
    children: [
      {
        path: "menu1",
        component: () => require("../views/nested/menu1/index"), // Parent router-view
        name: "Menu1",
        meta: { title: "Menu1" },
        children: [
          {
            path: "menu1-1",
            component: () => require("../views/nested/menu1/menu1-1"),
            name: "Menu1-1",
            meta: { title: "Menu1-1" },
          },
          {
            path: "menu1-2",
            component: () => require("../views/nested/menu1/menu1-2"),
            name: "Menu1-2",
            meta: { title: "Menu1-2" },
            children: [
              {
                path: "menu1-2-1",
                component: () =>
                  require("../views/nested/menu1/menu1-2/menu1-2-1"),
                name: "Menu1-2-1",
                meta: { title: "Menu1-2-1" },
              },
              {
                path: "menu1-2-2",
                component: () =>
                  require("../views/nested/menu1/menu1-2/menu1-2-2"),
                name: "Menu1-2-2",
                meta: { title: "Menu1-2-2" },
              },
            ],
          },
          {
            path: "menu1-3",
            component: () => require("../views/nested/menu1/menu1-3"),
            name: "Menu1-3",
            meta: { title: "Menu1-3" },
          },
        ],
      },
      {
        path: "menu2",
        component: () => require("../views/nested/menu2/index"),
        name: "Menu2",
        meta: { title: "menu2" },
      },
    ],
  },

  {
    path: "external-link",
    component: require("../layout/index.vue"),
    children: [
      {
        path: "https://panjiachen.github.io/vue-element-admin-site/#/",
        meta: { title: "External Link", icon: "link" },
      },
    ],
  },

  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true },
];
