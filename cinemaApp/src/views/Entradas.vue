<template>
  <v-app style="background: black">
    <v-content>
      <v-container wrap>
        <v-row justify-center align-center>
          <v-col>
            <v-toolbar dark height="150px" color="black">
              <v-toolbar-title style="font-size: 50pt; font-family: 'Helvetica'; ">Asientos</v-toolbar-title>
            </v-toolbar>
          </v-col>
        </v-row>
        <v-row justify-center align-center>
          <v-col>
            <table>
              <tr>
                <td>
                  <font v-bind:style="{ fontSize: 15}" color="white">Número de entradas:</font>
                </td>

                <td>
                  <v-combobox
                    :items="filters1"
                    v-model="entradas"
                    dark
                    dense
                    label="Entradas"
                    v-on:keyup.enter="onEnterFilter"
                  ></v-combobox>
                </td>
              </tr>

              <tr>
                <td>
                  <font color="white">Descuentos:</font>
                </td>

                <td>
                  <v-combobox
                    :items="filters"
                    v-model="descuentos"
                    dark
                    dense
                    label="Descuentos"
                    v-on:keyup.enter="onEnterFilter"
                  ></v-combobox>
                </td>
              </tr>
              <tr>
                <td>
                  <font color="white">Precio de la entrada:</font>
                </td>

                <td>
                  <v-text-field v-model="precioEntrada" dark dense type="text" readonly></v-text-field>
                </td>
              </tr>
              <tr>
                <td>
                  <font color="white">Precio total:</font>
                </td>

                <td>
                  <v-text-field v-model="precioTotal" dark dense type="text" readonly></v-text-field>
                </td>
              </tr>
            </table>
          </v-col>
        </v-row>

        <v-row>
          <v-col></v-col>
          <v-col>
            <v-content>
              <v-img
                align-center
                justify-center
                :src="asientosDisponibles"
                height="900px"
                width="1100px"
              >
                <div style="height: 100%;"></div>
              </v-img>
            </v-content>
          </v-col>
          <v-col></v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn to="Pelicula" dark>Volver</v-btn>
          </v-col>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-col>
            <v-btn to="Compra" dark>Continuar</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

   

<script>
// @ is an alias to /src
export default {
  data() {
    return {
      entradas: 1,
      descuentos: "Ninguno",
      precio: 6,
      filters1: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
      filters: ["Ninguno", "Estudiante", "Jubilado", "Familia numerosa"],
      asientosDisponibles:
        "http://gobiznext.com/wp-content/uploads/2016/10/Mejores-lugares.jpg"
    };
  },
  computed: {
    precioTotal: function() {
      var precio = this.entradas * this.precio;
      if (this.descuentos == "Familia numerosa") precio -= 1.4 * this.entradas;
      if (this.descuentos == "Jubilado") precio -= 1.0 * this.entradas;
      if (this.descuentos == "Estudiante") precio -= 1.2 * this.entradas;
      return precio + " €";
    },
    precioEntrada: function() {
      return this.precio + " €";
    }
  },
  methods: {}
};
</script>
<style type="text/css">
td {
  padding: 0 200px 0 0;
  font-size: 150%;
}

.v-text-field {
  font-size: 90%;
}
</style>