import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { Product } from "~/Interfaces/Product";

export const state = () => ({
  basket: [] as Product[],
  amount: 0,
  basketCount: 0
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {}

export const mutations: MutationTree<RootState> = {
  INCREMENT_PRODUCT_COUNT: (state, product: Product) => {
    product.count!++
  },
  DECREMENT_PRODUCT_COUNT: (state, product: Product) => {
    state.amount -= Math.round(product.price!)
    product.count!--
    state.basketCount--
  },
  REMOVE_PRODUCT: (state, product: Product) => {
    state.amount -= Math.round(product.price!)
    const index = state.basket.findIndex(p => p.id === product.id)
    state.basketCount--
    state.basket.splice(index, 1)
  },
  ADD_PRODUCT: (state, product: Product) => {
    // state.amount += +product.price!.toFixed(1)
    state.amount += Math.round(product.price!)
    console.log(Math.round(product.price!))
    const isInBasket = state.basket.some((p) => p.id === product.id)
    state.basketCount++
    if (!isInBasket) {
      state.basket.push(product)
    }
  },
}

export const actions: ActionTree<RootState, RootState> = {
  incrementProductCount({commit}, product: Product) {
    commit('INCREMENT_PRODUCT_COUNT', product)
    commit('ADD_PRODUCT', product)
  },
  decrementProductCount({commit}, product: Product) {
    commit('DECREMENT_PRODUCT_COUNT', product)
  },
  removeProduct({commit}, product: Product){
    commit('REMOVE_PRODUCT', product)
  },
  addProduct({ commit }, product: Product) {
    commit('ADD_PRODUCT', product)
  },
}
