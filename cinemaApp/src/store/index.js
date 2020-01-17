import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  getters: {
    getPelicula: state => state.pelicula,
    getEntradas: state => state.entradas,
    getPrecioTotal: state => state.precioTotal,
    getDescuentos: state => state.descuentos,
    getHora: state => state.hora,
    getNombreDescuento: state => state.nombreDescuento
  },
  state: {
    pelicula: "",
    entradas: 0,
    precioTotal: 0,
    descuentos: 0,
    nombreDescuento: "",
    hora: ""
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
    },
    update_nombreDescuento(state, nombre) {
      state.nombreDescuento = nombre;
    },
    update_hora(state, hora) {
      state.hora = hora;
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
    },
    setNombreDescuento({ commit }, nombre) {
      commit("update_nombreDescuento", nombre);
    },
    setSesion({ commit }, hora) {
      commit("update_hora", hora);
    }
  },
  modules: {}
});
