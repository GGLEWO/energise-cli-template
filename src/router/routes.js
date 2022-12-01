export const routes = [
  {
    path: "/login",
    hidden: true,
  },

  {
    path: "/404",
    hidden: true,
  },

  {
    path: "/",
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        meta: { title: "Dashboard", icon: "dashboard" },
      },
    ],
  },

  {
    path: "/table",
    children: [
      {
        path: "index",
        name: "table",
        meta: { title: "table", icon: "table" },
      },
    ],
  },
  {
    path: "/tree",
    children: [
      {
        path: "index",
        name: "tree",
        meta: { title: "tree", icon: "tree" },
      },
    ],
  },

  {
    path: "/form",
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
    redirect: "/nested/menu1",
    name: "Nested",
    meta: {
      title: "Nested",
      icon: "nested",
    },
    children: [
      {
        path: "menu1",/ Parent router-view
        name: "Menu1",
        meta: { title: "Menu1" },
        children: [
          {
            path: "menu1-1",
            name: "Menu1-1",
            meta: { title: "Menu1-1" },
          },
          {
            path: "menu1-2",
            name: "Menu1-2",
            meta: { title: "Menu1-2" },
            children: [
              {
                path: "menu1-2-1",
                name: "Menu1-2-1",
                meta: { title: "Menu1-2-1" },
              },
              {
                path: "menu1-2-2",
                name: "Menu1-2-2",
                meta: { title: "Menu1-2-2" },
              },
            ],
          },
          {
            path: "menu1-3",
            name: "Menu1-3",
            meta: { title: "Menu1-3" },
          },
        ],
      },
      {
        path: "menu2",
        name: "Menu2",
        meta: { title: "menu2" },
      },
    ],
  },

  {
    path: "external-link",
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
