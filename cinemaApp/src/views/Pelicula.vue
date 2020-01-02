<template>
  <v-app style="background: black">
    <v-container>
      <v-row>
        <v-col></v-col>
        <v-col style="color: #FFFF">
          FROZEN 2
          <p style="color: #FFFF">{{emision.content}}</p>
        </v-col>
      </v-row>
      <v-row>
        <!--TRAILER pelicula-->

        <youtube fitParent video-id="I-oJ5QjrX9M" alt="Trailer película Fronzen 2"></youtube>
        <!--/ENDOF Trailer-->
      </v-row>
    </v-container>
    <!--Selector de sesión para comprar entrada-->
    <v-container>
      <p style="color: #FFFF">FROZEN 2</p>
      <p style="color: #FFFF">Director | País | Año | Duración | Fecha de estreno | Género</p>
      <v-carousel
        v-model="model"
        :show-arrows="showArrows"
        :hide-delimiters="hideDelimiters"
        :cycle="cycle"
      >
        <v-carousel-item v-for="(sesion, i) in sesiones" :key="sesion">
          <v-sheet color="black" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center">
              <div class="display-3">Sesión {{ i + 1 }}</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      <p style="color: #FFFF">Elije sesión y pulsa en el ticket para comprar tu entrada</p>
    </v-container>
    <!--/ENDOFSelector-->
    <!--TresCol Información Película-->
    <v-container>
      <v-row>
        <v-col cols="12" sm="4">
          <v-card class="pa-2" tile>
            SINOPSIS:
            <p>{{film.sinopsis}}</p>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card class="pa-2" tile>
            REPARTO:
            <p></p>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card class="pa-2" tile>
            IMG:
            <v-carousel
              v-model="model"
              :show-arrows="showArrows"
              :hide-delimiters="hideDelimiters"
              :cycle="cycle"
            >
              <v-carousel-item v-for="(imagen, i) in imagenes" :key="imagen">
                <v-sheet color="white" height="40%" tile>
                  <v-row class="fill-height" align="center" justify="center">
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
  </v-app>
</template>

   

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      emision: {
        content: "En el cine desde el 1 de Enero"
      },
      film: {
        sinopsis:
          "Una profecía condena al reino de Arandelle a vivir en un invierno eterno. La joven Anna, el temerario montañero Kristoff y el reno Sven deben emprender un viaje épico y lleno de aventuras en busca de Elsa, la hermana de Anna y Reina de las Nieves. Ella es la única que puede poner fin al gélido hechizo.",
        reparto: "",
        img: ""
      },
      sesiones: ["primera", "segunda", "tercera"],
      imagenes: ["prime", "seg", "ter"],
      model: 0,
      showArrows: true,
      hideDelimiters: false,
      cycle: false
    };
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
.txt {
  color: #fff;
}
.infoP {
  color: #000;
  background-color: #fff;
}
</style>

