import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { Modal } from "~/Interfaces/Modal";

export const state = () => ({
  modal: {
    text: '',
    color: '',
    show: false
  } as Modal
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  modal: state => state.modal,
}

export const mutations: MutationTree<RootState> = {
  SHOW_MODAL: (state, data: Modal) => {
    state.modal = data
  },
  HIDE_MODAL: state => (state.modal.show = false)
}

export const actions: ActionTree<RootState, RootState> = {
  showModal({commit}, data: Modal) {
    commit('SHOW_MODAL', data)
  },
  hideModal({commit}){
    commit('HIDE_MODAL')
  }
}
