 <template>
  <v-app>
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
            dense
            label="Buscar"
            bottom
            v-model="busqueda"
            v-on:keyup.enter="onEnterFind"
          ></v-text-field>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-title>
          <v-combobox :items="filters" dense label="Filtrar" v-on:keyup.enter="onEnterFilter"></v-combobox>
        </v-toolbar-title>
      </v-toolbar>
    </v-card>

    <v-divider></v-divider>
    <v-content>
      <v-container grid-list-md text-xs-center fluid>
        <v-layout wrap fill-width fill-height>
          <v-flex v-for="pelicula in filteredList" :key="pelicula.id" xs3 d-flex>
            <v-card dark to="Pelicula">
              <v-hover v-slot:default="{ hover }">
                <v-img
                  :src="pelicula.src"
                  height="500px"
                  width="400px"
                  aspect-ratio="1.7"
                  :alt="pelicula.alt"
                >
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                      style="height: 100%;"
                    >{{pelicula.title}}</div>
                  </v-expand-transition>
                </v-img>
              </v-hover>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      busqueda: "",
      filters: ["Edad", "Género", "Duración"],
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
            autoplay: 0
          }
        },
        {
          videoId: "eSdIUJNHdDQ",
          playerVars: {
            autoplay: 0
          }
        },
        {
          videoId: "BKuDz3pxi7I",
          playerVars: {
            autoplay: 0
          }
        }
      ],
      cartelera: [
        {
          id: 1,
          src:
            "http://t0.gstatic.com/images?q=tbn:ANd9GcQwgyIDw4ct01q0nypl45AwVR099Wv0F5erPDKH-oYu7pdmEsZC",
          title: "Frozen 2",
          alt: "Póster de la película Frozen 2, con Elsa y Anna en él"
        },
        {
          id: 2,
          src:
            "http://t3.gstatic.com/images?q=tbn:ANd9GcQrGZ9MLLOUkK5Fa-5-zxfyqNdE15-p52rm3ahwac1PSNdfqnxm",
          title: "Joker",
          alt: "Póster de la película Joker, aparece media cara del actor"
        },
        {
          id: 3,
          src:
            "http://t1.gstatic.com/images?q=tbn:ANd9GcSSNLT6kxt0xGjjrAf2J4_Et7jW8ZFPDOuNZKr_9Tjsna36iruz",
          title: "Last Christmas",
          alt:
            "Póster de la película Last Christmas, donde aparecen un hombre y una mujer"
        },
        {
          id: 4,
          src:
            "http://t0.gstatic.com/images?q=tbn:ANd9GcSQ7YhkPor0ZN40AdSeTr-XGb9eSq_jqObwPqC_90wDXscoRF4Z",
          title: "Maléfica: Maestra del Mal",
          alt:
            "Póster de la película Maléfica: Maestra del Mal, con ella como protagonista"
        },
        {
          id: 5,
          src:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/star-wars-episode-vii-the-force-awakens-1541413640.png?crop=1xw:1xh;center,top&resize=480:*",
          title: "Star Wars: Episodio IX",
          alt:
            "Póster de la película Star Wars: Episodio IX con todos los personajes en él"
        },
        {
          id: 6,
          src:
            "https://poster.ninja/wp-content/uploads/2019/09/Dwayne-Johnson-Jack-Black-Kevin-Hart-Karen-Gillan-Jumanji-The-Next-Level-2019-Movie-Poster.jpg",
          title: "Jumanji: Next Level",
          alt:
            "Póster de la película Jumanji: Next Level con los 4 protagonistas"
        },
        {
          id: 7,
          src:
            "http://es.web.img3.acsta.net/pictures/19/09/06/09/26/4050119.jpg",
          title: "Jojo Rabbit",
          alt: "Póster de la película Jojo Rabbit con los personajes"
        },
        {
          id: 8,
          src:
            "https://www.metro951.com/wp-content/uploads/2019/10/Mujercitas1-583x700.jpg",
          title: "Mujercitas",
          alt: "Póster de la película Mujercitas con las 4 protagonistas"
        }
      ]
    };
  },
  methods: {
    onEnterFind: function() {},
    onEnterFilter: function() {}
  },
  computed: {
    filteredList() {
      return this.cartelera.filter(post => {
        if (this.busqueda == null) return post.title.toLowerCase();
        else
          return post.title.toLowerCase().includes(this.busqueda.toLowerCase());
      });
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
