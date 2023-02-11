import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import componentsRouter from './modules/components'
import chartsRouter from './modules/charts'
import tableRouter from './modules/table'
import nestedRouter from './modules/nested'

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'Anasayfa', icon: 'dashboard', affix: true }
      }
    ]
  }, 
  // {
  //   path: '/documentation',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/documentation/index'),
  //       name: 'Documentation',
  //       meta: { title: 'Documentation', icon: 'documentation', affix: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/guide',
  //   component: Layout,
  //   redirect: '/guide/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/guide/index'),
  //       name: 'Guide',
  //       meta: { title: 'Guide', icon: 'guide', noCache: true }
  //     }
  //   ]
  // },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: 'Profile',
          roles: ['ROLE_PM'],
          icon: 'user', noCache: true }
      }
    ]
  }
]
/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
 
   {
    path: '/Sayfalar',
    component: Layout,
    redirect: '/',
    alwaysShow: true, // will always show the root menu
    name: 'Sayfalar',
    meta: {
      title: 'Sayfa Ekle',
      icon: 'list'
    },
    children: [
      {
        path: 'sayfa-ekle',
        component: () => import('@/components/Annocent/annocent'),
        name: 'Annocent',
        meta: { title: 'SAYFA VE BİLGİLER EKLE', icon: 'list', affix: true }
      },
      {
        path: 'sayfa-listesi',
        component: () => import('@/components/List/artlist'),
        name: 'Artlist',
        meta: { title: 'SAYFA VE BİLGİLER LİSTESİ', icon: 'list', affix: true }
      },
    ]
  },
  {
    path: '/Duyurular',
    component: Layout,
    redirect: '/',
    alwaysShow: true, // will always show the root menu
    name: 'Duyurular',
    meta: {
      title: 'Duyuru Ekle',
      icon: 'list'
    },
    children: [
      {
        path: 'duyuru-ekle',
        component: () => import('@/components/Duyuru/DuyuruEkle'),
        name: 'DuyuruEkle',
        meta: { title: 'DUYURU EKLE', icon: 'list', affix: true }
      },
      {
        path: 'duyuru-listesi',
        component: () => import('@/components/List/DuyuruList'),
        name: 'DuyuruListesi',
        meta: { title: 'DUYURU LİSTESİ', icon: 'list', affix: true }
      },
    ]
  },
  {
    path: '/FotoEkle',
    component: Layout,
    redirect: '/',
    // alwaysShow: true, // will always show the root menu
    // name: 'Annocent',
    // meta: {
    //   title: 'Duyuru Ekle',
    //   icon: 'list'
    // },
    children: [
      {
        path: 'foto-ekle',
        component: () => import('@/components/Images/images'),
        name: 'FotoEkle',
        meta: { title: 'Fotoğraf Ekle', icon: 'list', affix: true }
      },
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher 
}

export default router
