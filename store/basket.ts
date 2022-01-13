import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { Product } from "~/Interfaces/Product";

export const state = () => ({
  basket: [] as Product[],
  amount: 0
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  basket: state => state.basket,
  amount: state => state.amount
}

export const mutations: MutationTree<RootState> = {
  INCREMENT_PRODUCT_COUNT: (state, product: Product) => {
    product.count!++
  },
  DECREMENT_PRODUCT_COUNT: (state, product: Product) => {
    product.count!--
  },
  REMOVE_PRODUCT: (state, product: Product) => {
    if(product.count! < 1) {
      const index = state.basket.findIndex(p => p.id === product.id)
      state.basket.splice(index, 1)
    }
    localStorage.setItem('basket', JSON.stringify(state.basket))
  },
  ADD_PRODUCT: (state, product: Product) => {
    const isInBasket = state.basket.some((p) => p.id === product.id)
    if (!isInBasket) {
      state.basket.push(product)
    }
    state.amount += product.price!
    localStorage.setItem('basket', JSON.stringify(state.basket))
    localStorage.setItem('amount', JSON.stringify(state.amount))
  },
  GET_FROM_LOCAL: (state) => {
    if(localStorage.getItem('basket')){
      state.basket = JSON.parse(localStorage.getItem('basket') || '')
    } else {
      localStorage.setItem('basket', '')
    }
  },
  COUNT_AMOUNT: (state) => {
    state.basket.forEach((product) => {
      state.amount += product.price!
    })
    if(localStorage.getItem('amount')){
      state.amount = JSON.parse(localStorage.getItem('amount') || '')
    }
  }
}

export const actions: ActionTree<RootState, RootState> = {
  incrementProductCount({commit}, product: Product) {
    commit('INCREMENT_PRODUCT_COUNT', product)
    commit('ADD_PRODUCT', product)
  },
  decrementProductCount({commit}, product: Product) {
    commit('DECREMENT_PRODUCT_COUNT', product)
    commit('REMOVE_PRODUCT', product)
  },
  addProduct({ commit }, product: Product) {
    commit('INCREMENT_PRODUCT_COUNT', product)
    commit('ADD_PRODUCT', product)
  },
  getFromLocal({commit}){
    commit('GET_FROM_LOCAL')
    commit('COUNT_AMOUNT')
  }
}
