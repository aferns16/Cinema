<template>
  <v-app style="background: black">
    <v-card color="indigo lighten-2" height="150px">
      <v-toolbar dark height="150px" color="black">
        <v-toolbar-title id="game">
          <span style="font-size: 50pt; font-family: 'Helvetica'; ">Asientos</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-toolbar-title>
          <v-combobox
            :items="filters1"
            outlined
            dense
            rounded
            label="Entradas"
            v-on:keyup.enter="onEnterFilter"
          ></v-combobox>
        </v-toolbar-title>

        <v-toolbar-title>
          <v-text-field
            dark
            clearable
            rounded
            outlined
            dense
            label="Precio entradas"
            bottom
            v-model="precio"
            v-on:keyup.enter="onEnterFind"
          ></v-text-field>
        </v-toolbar-title>
        <v-toolbar-title>
          <v-text-field
            dark
            clearable
            rounded
            outlined
            dense
            label="Precio total"
            bottom
            v-model="preciototal"
            v-on:keyup.enter="precioTotal"
          ></v-text-field>
        </v-toolbar-title>
        <v-toolbar-title>
          <v-combobox
            :items="filters"
            outlined
            dense
            rounded
            label="Descuentos"
            v-on:keyup.enter="onEnterFilter"
          ></v-combobox>
        </v-toolbar-title>
      </v-toolbar>
    </v-card>

    <v-divider></v-divider>

    <v-divider></v-divider>
    <v-content>
      <v-img
        align-center
        justify-center
        :src="asientosDisponibles[0].src"
        height="700px"
        width="1500px"
      >
        <div style="height: 100%;">{{asiento}}</div>
      </v-img>
    </v-content>
  </v-app>
</template>

   

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      filters1: ["1", "2", "3", "4", "5", "6", "7", "8"],
      filters: ["Estudiante", "Jubilado", "Familia numerosa"],
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
  methods: {
    precioTotal: function() {
      4 * 4.6;
    }
  }
};
</script>

