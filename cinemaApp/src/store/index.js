import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  getters: {
    getPelicula: state => state.pelicula,
    getEntradas: state => state.entradas,
    getPrecioTotal: state => state.precioTotal,
    getDescuentos: state => state.descuentos
  },
  state: {
    pelicula: "",
    entradas: 0,
    precioTotal: 0,
    descuentos: 0
  },
  mutations: {
    update_pelicula(state, pelicula) {
      state.pelicula = pelicula;
    },
    update_entradas(state, entradas) {
      state.entradas = entradas;
    },
    update_precio(state, precio) {
      state.precioTotal = precio;
    },
    update_descuentos(state, descuentos) {
      state.descuentos = descuentos;
    }
  },
  actions: {
    setPelicula({ commit }, pelicula) {
      commit("update_pelicula", pelicula);
    },
    setEntradas({ commit }, entradas) {
      commit("update_entradas", entradas);
    },
    setPrecio({ commit }, precio) {
      commit("update_precio", precio);
    },
    setDescuentos({ commit }, descuentos) {
      commit("update_descuentos", descuentos);
    }
  },
  modules: {}
});
