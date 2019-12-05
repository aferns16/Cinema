<template>
  <v-app style="background: black">
    <v-card color="indigo lighten-2" height="90px">
      <v-toolbar dark height="90px" color="black">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title id="game">
          <span style="font-size: 20pt; font-family: 'Helvetica'; ">ENTRADAS</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-text-field
              Fecha de la película:
              input type="date" id="myDate" value="2019-12-21"
                    
        ></v-text-field>
         <v-card-title>  
                <v-btn>20:30</v-btn>
                <v-spacer></v-spacer>
              </v-card-title>
      </v-toolbar>
    </v-card>

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
      <v-container grid-list-md text-xs-center fluid>
        <v-layout wrap fill-width fill-height>
          <v-flex v-for="pelicula in this.asientosDisponibles" :key="pelicula.id" xs3 d-flex>
            <v-card dark>
              <v-hover v-slot:default="{ hover }">
                <v-img :src="pelicula.src" height="400px" width="300px" aspect-ratio="1.7">
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                      style="height: 100%;"
                    >{{asiento}}</div>
                  </v-expand-transition>
                </v-img>
              </v-hover>
             
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
   

    <v-navigation-drawer absolute temporary v-model="drawer" class="grey darken-4" dark>
      <v-list-item>
        <v-list-item-avatar>
          <v-icon large>mdi-menu</v-icon>
        </v-list-item-avatar>

        <v-list-item-title>Menú</v-list-item-title>

        <v-btn icon @click.stop="drawer = !drawer">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense class="pa-0" flat>
        <v-list-item-group>
          <v-list-item v-for="item in items" :key="item.title" :to="item.link">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

   

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      drawer: false,
      busqueda: "",
      filters1: ["1", "2", "3", "4", "5", "6", "7", "8"],
      filters: ["Estudiante", "Jubilado", "Familia numerosa"],
      items: [
        { title: "Inicio", icon: "mdi-home", link: "/" },
        { title: "Ayuda", icon: "mdi-help", link: "/" },
        { title: "Entradas", icon: "mdi-ticket-confirmation", link: "/entradas" }
      ],
       asientosDisponibles: [
        {
          id: 1,
          src:
            "http://gobiznext.com/wp-content/uploads/2016/10/Mejores-lugares.jpg",
          asiento: "Asientos disponibles"
        },
       ],
    };
  },
  methods: {
    onEnterFind: function() {
      alert("Enter was pressed");
    },
    onEnterFilter: function() {
      alert("Enter was pressed");
    },
    precioTotal: function() {
          4*4.60;
        
    }
  }
};
</script>
<style>
.v-card--reveal {
  align-items: center;
  text-align: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.8;
  position: absolute;
  width: 100%;
}
</style>
