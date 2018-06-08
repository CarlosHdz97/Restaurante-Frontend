import Vue from 'vue'
import Router from 'vue-router'

import Init from '@/components/Init'

import DisplayProduct from '@/components/DisplayProduct'
import DisplayProductSoldOut from '@/components/DisplayProductSoldOut'
import DisplayProductSoonSellOut from '@/components/DisplayProductSoonSellOut'
import CreateProduct from '@/components/CreateProduct'
import UpdateProduct from '@/components/UpdateProduct'

import MenuAlmacenista from '@/components/MenuAlmacenista'
import DisplayProvedor from '@/components/DisplayProvedor'
import CreateProvedor from '@/components/CreateProvedor'
import UpdateProvedor from '@/components/UpdateProvedor'

import CreateOrder from '@/components/CreateOrder'
import DisplayOrder from '@/components/DisplayOrder'
import DisplayOrderSinEntregar from '@/components/DisplayOrderSinEntregar'



Vue.use(Router)
export default new Router({
  routes: [
    {
      name: 'Init',
      path: '/',
      component: Init
    },
    {
      name: 'MenuAlmacenista',
      path: '/almacenista',
      component: MenuAlmacenista
    },
    {
      name: 'DisplayProduct',
      path: '/product',
      component: DisplayProduct
    },
    {
      name: 'CreateProduct',
      path: '/product/create',
      component: CreateProduct
    },
    {
      name: 'UpdateProduct',
      path: 'product/update/:id',
      component: UpdateProduct
    },
    {
      name: 'DisplayProductSoldOut',
      path: 'product/soldOut',
      component: DisplayProductSoldOut
    },
    {
      name: 'DisplayProductSoonSellOut',
      path: 'product/soonSellOut',
      component: DisplayProductSoonSellOut
    },
    {
      name: 'DisplayProvedor',
      path: '/provedor',
      component: DisplayProvedor
    },
    {
      name: 'CreateProvedor',
      path: '/provedor/create',
      component: CreateProvedor
    },
    {
      name: 'UpdateProvedor',
      path: 'provedor/update/:id',
      component: UpdateProvedor
    },
    {
      name: 'CreateOrder',
      path: '/order/create',
      component: CreateOrder
    },
    {
      name: 'DisplayOrder',
      path: '/order',
      component: DisplayOrder
    },
    {
      name: 'DisplayOrderSinEntregar',
      path: '/order/soon',
      component: DisplayOrderSinEntregar
    }
  ]
})
