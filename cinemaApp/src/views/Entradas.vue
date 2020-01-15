<template>
  <v-app style="background: black">
    <v-content>
      <v-container>
        <v-row>
          <v-col>
            <v-toolbar dark height="150px" color="black">
              <v-toolbar-title style="font-size: 50pt; font-family: 'Helvetica'; ">Asientos</v-toolbar-title>
            </v-toolbar>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <table cellspacing="0">
              <tr>
                <td>
                  <font color="white">Número de entradas:</font>
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
          <v-content>
            <v-img
              align-center
              justify-center
              :src="asientosDisponibles[0].src"
              height="600px"
              width="800px"
            >
              <div style="height: 100%;"></div>
            </v-img>
          </v-content>
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
      asientosDisponibles: [
        {
          id: 1,
          src:
            "http://gobiznext.com/wp-content/uploads/2016/10/Mejores-lugares.jpg",
          asiento: "Asientos disponibles"
        }
      ]
    };
  },
  computed: {
    precioTotal: function() {
      var precio = this.entradas * this.precio;
      if (this.descuentos == "Familia numerosa") precio -= 1.4;
      if (this.descuentos == "Jubilado") precio -= 1.0;
      if (this.descuentos == "Estudiante") precio -= 1.2;
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
}
</style>