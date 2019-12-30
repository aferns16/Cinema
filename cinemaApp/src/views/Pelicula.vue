<template>
  <v-app style="background: black">
    <v-card color="indigo lighten-2" height="90px">
      <v-toolbar dark height="90px" color="black">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title id="game">
          <span style="font-size: 20pt; font-family: 'Helvetica'; ">CINE</span>
        </v-toolbar-title>
      </v-toolbar>
    </v-card>
    
    <v-container>
      <v-row>
        <v-col>
          
        </v-col>      
        <v-col>
          <v-text style="color: #FFFF">FROZEN</v-text>
          <p style="color: #FFFF">{{emision.content}}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          
        </v-col>   
        <!--TRAILER pelicula-->       
        <v-col>     
          <p align="right">
          <v-img
            :src="require('../assets/trailerFrozen.jpg')"
            position="right"
            width="50%"
            height="50%"
            class="grey lighten-2"
            alt="Trailer película Frozen"
          ></v-img>
          </p>
          <!--/ENDOF Trailer-->
        </v-col>
      </v-row>
    </v-container>
    <!--Selector de sesión para comprar entrada-->
    <v-container>
      <p><v-text style="color: #FFFF">FROZEN</v-text></p>
      <p><v-text style="color: #FFFF">Director | País | Año | Duración | Fecha de estreno | Género</v-text></p>
       <v-carousel
        v-model="model"
        :show-arrows="showArrows"
        :hide-delimiters="hideDelimiters"
        :cycle="cycle"
      >
        <v-carousel-item
          v-for="(sesion, i) in sesiones"
          :key="sesion"
        >
          <v-sheet
            :color="black"
            height="100%"
            tile
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <div class="display-3">Sesión {{ i + 1 }}</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      <p><v-text style="color: #FFFF">Elije sesión y pulsa en el ticket para comprar tu entrada</v-text></p>
    </v-container>
    <!--/ENDOFSelector-->
    <!--TresCol Información Película-->
    <v-container>
      <v-row>
        <v-col 
          cols="12"
          sm="4">
          <v-card
            class="pa-2"
            
            tile
            
          >
          SINOPSIS:
          <p>{{film.sinopsis}}</p>
          </v-card>
        </v-col>
        <v-col 
          cols="12"
          sm="4">
          <v-card
            class="pa-2"
            
            tile
            
          >
          REPARTO:
          <p></p>
          </v-card>
        </v-col>
        <v-col 
          cols="12"
          sm="4">
          <v-card
            class="pa-2"
            
            tile
            
          >
          IMG:
          
            <v-carousel
              v-model="model"
              :show-arrows="showArrows"
              :hide-delimiters="hideDelimiters"
              :cycle="cycle"
            >
              <v-carousel-item
                v-for="(imagen, i) in imagenes"
                :key="imagen"
              >
                <v-sheet
                  :color="white"
                  height="40%"
                  tile
                >
                  <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
                  >
                    <div class="display-3">Img {{ i + 1 }}</div>
                  </v-row>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!--/ENDOF info-->
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
      emision: {
        content: "En el cine desde el 1 de Enero"
      },
      film:{
        sinopsis: "Una profecía condena al reino de Arandelle a vivir en un invierno eterno. La joven Anna, el temerario montañero Kristoff y el reno Sven deben emprender un viaje épico y lleno de aventuras en busca de Elsa, la hermana de Anna y Reina de las Nieves. Ella es la única que puede poner fin al gélido hechizo.",
        reparto: "",
        img: "",
      },
      sesiones: [
        'primera',
        'segunda',
        'tercera',
        'noche',
      ],
      imagenes:[
        'prime',
        'seg',
        'ter',
      ],
      model: 0,
      showArrows: true,
      hideDelimiters: false,
      cycle: false,
      items: [
        { title: "Inicio", icon: "mdi-home", link: "/" },
        { title: "Ayuda", icon: "mdi-help", link: "/" },
        { title: "Entradas", icon: "mdi-ticket-confirmation", link: "/entradas" },
        { title: "Pelicula", icon: "mdi-film", link: "/pelicula" }
      ]
    };
  },
  methods: {
    onEnterFind: function() {
      alert("Enter was pressed");
    },
    onEnterFilter: function() {
      alert("Enter was pressed");
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
};
.txt {
  color: #FFF;
}
.infoP {
  color: #000;
  background-color: #FFF;
}
</style>

