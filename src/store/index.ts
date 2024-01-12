import type { InjectionKey } from "vue";
import { Store, createStore } from "vuex";

const categories = ["title", "description", "status", "createdAt"] as const;
type categoryType = (typeof categories)[number];

export interface State {
  category: categoryType;
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export default createStore<State>({
  state: {
    category: "title",
  },
  getters: {},
  mutations: {
    setCategory(state, category: categoryType) {
      state.category = category;
    },
  },
  actions: {},
  modules: {},
});
