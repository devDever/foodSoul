import { GetterTree, ActionTree, MutationTree } from 'vuex'
import {Product} from "~/Interfaces/Product";

export const state = () => ({
  products: [] as Product[]
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {}

export const mutations: MutationTree<RootState> = {
  SET_PRODUCTS: (state, payload) => {
    state.products = payload
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({commit}) {
    const response = await this.$axios.get('products')
    const data = response.data
    data.forEach((product: Product) => {
      product.count = 1
    })
    commit('SET_PRODUCTS', data)
  }
}
