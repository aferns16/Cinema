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
    <v-content height="920">
      <v-carousel
        height="920"
        hide-delimiter-background
        show-arrows-on-hover
        align="center"
        justify="center"
        background="black"
      >
        <v-carousel-item v-for="(video, i) in this.videos" :key="i" position="center">
          <youtube fitParent :video-id="video.videoId" :player-vars="video.playerVars"></youtube>
        </v-carousel-item>
      </v-carousel>
    </v-content>
    <v-card color="indigo lighten-2" height="150px">
      <v-toolbar dark height="150px" color="black">
        <v-toolbar-title id="game">
          <span style="font-size: 50pt; font-family: 'Helvetica'; ">Estrenos</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-title>
          <span style="font-size: 30pt; font-family: 'Helvetica'; ">Hoy</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-toolbar-title>
          <v-text-field
            dark
            clearable
            rounded
            outlined
            dense
            label="Buscar"
            bottom
            v-model="busqueda"
            v-on:keyup.enter="onEnterFind"
          ></v-text-field>
        </v-toolbar-title>
        <v-toolbar-title>
          <v-combobox
            :items="filters"
            outlined
            dense
            rounded
            label="Filtrar"
            v-on:keyup.enter="onEnterFilter"
          ></v-combobox>
        </v-toolbar-title>
      </v-toolbar>
    </v-card>

    <v-divider></v-divider>
    <v-content>
      <v-container grid-list-md text-xs-center fluid>
        <v-layout wrap fill-width fill-height>
          <v-flex v-for="pelicula in this.cartelera" :key="pelicula.id" xs3 d-flex>
            <v-card dark>
              <v-hover v-slot:default="{ hover }">
                <v-img :src="pelicula.src" height="400px" width="300px" aspect-ratio="1.7">
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                      style="height: 100%;"
                    >{{pelicula.title}}</div>
                  </v-expand-transition>
                </v-img>
              </v-hover>
              <v-card-title>
                <v-btn>18:30</v-btn>
                <v-spacer></v-spacer>
                <v-btn>20:30</v-btn>
                <v-spacer></v-spacer>
                <v-btn>22:30</v-btn>
              </v-card-title>
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
      filters: ["Edad", "Género", "Duración"],
      items: [
        { title: "Inicio", icon: "mdi-home", link: "/" },
        { title: "Ayuda", icon: "mdi-help", link: "/" }
      ],
      videos: [
        {
          videoId: "I-oJ5QjrX9M",
          playerVars: {
            autoplay: 1
          }
        },
        {
          videoId: "EIyZqNbZQI8",
          playerVars: {
            autoplay: 1
          }
        }
      ],
      cartelera: [
        {
          id: 1,
          src:
            "http://t0.gstatic.com/images?q=tbn:ANd9GcQwgyIDw4ct01q0nypl45AwVR099Wv0F5erPDKH-oYu7pdmEsZC",
          title: "Frozen 2"
        },
        {
          id: 2,
          src:
            "http://t3.gstatic.com/images?q=tbn:ANd9GcQrGZ9MLLOUkK5Fa-5-zxfyqNdE15-p52rm3ahwac1PSNdfqnxm",
          title: "Joker"
        },
        {
          id: 3,
          src:
            "http://t1.gstatic.com/images?q=tbn:ANd9GcSSNLT6kxt0xGjjrAf2J4_Et7jW8ZFPDOuNZKr_9Tjsna36iruz",
          title: "Last Christmas"
        },
        {
          id: 4,
          src:
            "http://t0.gstatic.com/images?q=tbn:ANd9GcSQ7YhkPor0ZN40AdSeTr-XGb9eSq_jqObwPqC_90wDXscoRF4Z",
          title: "Maléfica: Maestra del Mal"
        }
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
}
</style>
