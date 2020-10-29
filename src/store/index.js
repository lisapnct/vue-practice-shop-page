import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    maxPrice: 50,
    products: [
      {
        name: "blue tshirt",
        price: 65,
        color: "blue",
        image:
          "https://i.pinimg.com/originals/06/14/28/0614281c43fda3ad87fa9a82371032c4.png",
      },
      {
        name: "red tshirt",
        price: 43,
        color: "red",
        image:
          "https://i.pinimg.com/originals/33/ed/7f/33ed7f9cfde40c9ebc21f5d7ccf42e29.png",
      },
      {
        name: "green tshirt",
        price: 32,
        color: "green",
        image:
          "https://i.pinimg.com/originals/a5/73/d8/a573d87027a882332ae8aff5f19da24a.png",
      },
      {
        name: "black tshirt",
        price: 28,
        color: "black",
        image:
          "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
      },
    ],
  },
  mutations: {
    setMaxPrice(state, value) {
      state.maxPrice = value;
    },
  },
  actions: {},
  modules: {},
});
