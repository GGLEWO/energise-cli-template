/*
 * @Author: guanyaoming guanyaoming@linklogis.com
 * @Date: 2022-11-30 14:13:40
 * @LastEditors: guanyaoming guanyaoming@linklogis.com
 * @LastEditTime: 2022-12-02 15:34:37
 * @FilePath: \energise-cli-template\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from "vue";
import Router from "vue-router";
const { optionsRoutes } = require("./routes");

Vue.use(Router);

/* Layout */
import Layout from "@/layout";
import Tree from "@/views/tree";
import Table from "@/views/table";
import Form from "@/views/form";
import Menu1 from "@/views/nested/menu1/index";
import Menu2 from "@/views/nested/menu2/index";
import Menu1A1 from "@/views/nested/menu1/menu1-1";
import Menu1A2 from "@/views/nested/menu1/menu1-2";
import Menu1A2A1 from "@/views/nested/menu1/menu1-2/menu1-2-1";
import Menu1A2A2 from "@/views/nested/menu1/menu1-2/menu1-2-2";
import Menu1A3 from "@/views/nested/menu1/menu1-3";

const componentHash = {
  Tree,
  Table,
  Form,
  Menu1,
  Menu2,
  Menu1A1,
  Menu1A2,
  Menu1A2A1,
  Menu1A2A2,
  Menu1A3,
};

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */

function handleAddComponent(e) {
  e.component = e.name ? componentHash[e.name] : Layout;
  if (e.children) {
    e.children.map((val) => {
      return handleAddComponent(val);
    });
  }
  return e;
}

const optionsRoutesRes = optionsRoutes.map((e) => {
  return handleAddComponent(e);
});

const baseRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true,
  },

  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/dashboard/index"),
        meta: { title: "Dashboard", icon: "dashboard" },
      },
    ],
  },

  {
    path: "external-link",
    component: Layout,
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

export const constantRoutes = [...optionsRoutesRes, ...baseRoutes];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
