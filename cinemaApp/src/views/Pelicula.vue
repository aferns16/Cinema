<template>
  <v-app style="background: black">
        
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
          <youtube fitParent video-id="I-oJ5QjrX9M" alt="Trailer película Fronzen 2"></youtube>
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
      peliculas:[
        {
        titulo: "Frozen: El Reino del Hielo",
        estreno: "29 de Noviembre de 2013",
        duracion: "1h 42min.",
        genero: "Animación/Aventura/Familia",
        sinopsisPelicula: 
        "Una profecía condena al reino de Arandelle a vivir en un invierno eterno. La joven Anna, el temerario montañero Kristoff y el reno Sven deben emprender un viaje épico y lleno de aventuras en busca de Elsa, la hermana de Anna y Reina de las Nieves. Ella es la única que puede poner fin al gélido hechizo.",
        idVideo:"I-oJ5QjrX9M",
        director: "Chris Buck, Jennifer Lee",
        pais: "EEUU",
        reparto:"Voces: Walt Disney, Marcellite Garner, Billy Bletcher"
        },
        {
        titulo: "Joker",
        estreno: "4 de Octubre de 2019",
        duracion: "2h 02min.",
        genero: "Drama",
        sinopsisPelicula: 
        "Joker mostrará por primera vez los orígenes del icónico archienemigo por excelencia de Bruce Wayne/Batman. La historia sigue de cerca la vida de Arthur Fleck (Joaquin Phoenix), un hombre con problemas psiquiátricos que vivirá una serie de acontecimientos que le harán convertirse en uno de los grandes villanos de DC Comics. El Príncipe Payaso del Crimen se cruzará en el camino de Thomas Wayne (Brett Cullen) y se acercará a su hijo, el futuro Caballero Oscuro en su versión joven (Dante Pereira-Olson).",
        idVideo:"-_DJEzZk2pc",
        director: "Todd Phillips",
        pais: "EEUU, Canadá",
        reparto:"Joaquin Phoenix, Robert De Niro, Zazie Beetz, Brett Cullen, Shea Whigham, Douglas Hodge, Glenn Fleshler, y Frances Conroy."
        },
        {
        titulo: "Last Christmas",  
        estreno: "29 de Noviembre de 2019",
        duracion: "1h 43min.",
        genero: "Comedia/Romántico",
        sinopsisPelicula: 
        "Kate (Emilia Clarke) deambula amargada por las calles de Londres, acompañada por el continuo tintineo de los cascabeles de sus zapatos, porque trabaja como elfo en una tienda navideña que abre todo el año. Cuando Tom (Henry Golding) aparece en su vida, Kate empieza a ver las cosas de otra manera más optimista, aunque parezca demasiado idílico para ser verdad. Pero al llegar la Navidad, todo parece ponerse en contra de la pareja. Eso sí, se darán cuenta de que lo importante será escuchar a su corazón.",
        idVideo:"z9CEIcmWmtA",
        director:"Paul Feig",
        pais: "Gran Bretaña, EEUU",
        reparto:"Emilia Clarke, Henry Golding, Emma Thompson, Michelle Yeoh."
        },
        {
        titulo: "Maléfica: Maestra del Mal",  
        estreno: "18 de Octubre de 2019",
        duracion: "1h 59min.",
        genero: "Fantasía/Aventura",
        sinopsisPelicula: 
        "Varios años después, continúa la relación entre la villana Maléfica y la princesa Aurora. El complejo vínculo entre la malvada hada de grandes cuernos y la joven que será la futura reina evoluciona, mientras ambas hacen nuevas alianzas y se enfrentan a diferentes adversarios, sin olvidarse de proteger a las criaturas mágicas que residen en su reino.",
        idVideo:"trQ2Ft_A478",
        director: "Joachim Ronning",
        pais: "EEUU",
        reparto:"Angelina Jolie, Elle Fanning, Michelle Pfeiffer, Chiwetel Ejiofor, Ed Skrein, Juno Temple, Sam Riley, Harris Dickinson, Robert Lindsay, e Imelda Staunton"
        },
        {
        titulo: "Star Wars: Episodio IX El Ascenso de Skywalker",  
        estreno: "19 de Diciembre de 2019",
        duracion: "2h 22 min.",
        genero: "Ciencia ficción/Aventura",
        sinopsisPelicula: 
        "Último capítulo de la tercera trilogía de la franquicia Star Wars. En esta novena entrega de la saga galáctica la historia llega a su fin con un viaje épico y alucinante hacia una galaxia muy, muy lejana. La Resistencia está bajo mínimos, pero en su lucha sin descanso ha contactado con aliados a lo largo y ancho de la galaxia para crear una red lo suficientemente potente para destruir a la Primera Orden. Este será el enfrentamiento final entre Rey (Daisy Ridley) y Kylo Ren (Adam Driver). Nacerán nuevas leyendas y la batalla final por la libertad está a punto de llegar.",
        idVideo:"Izme__ZsURY",
        director: "J.J. Abrams",
        pais: "EEUU",
        reparto:"Carrie Fisher (fallecida en 2016), Mark Hamill, Adam Driver, Daisy Ridley, John Boyega, Oscar Isaac, Anthony Daniels, Naomie Ackie, Domhnall Gleeson, Richard E. Grant, Lupita Nyong'o, Keri Russell, Joonas Suotamo, Kelly Marie Tran, Ian McDiarmid y Billy Dee Williams."
        },
        {
        titulo: "Jumanji: The Next Level",  
        estreno:"13 de Diciembre de 2019",
        duracion:"2h 04min.",
        genero:"Aventura/Comedia",
        sinopsisPelicula: 
        "Secuela de Jumanji: Bienvenidos a la jungla (2017), inspirada en la película original de Joe Johnston Jumanji (1995), que protagonizó Robin Williams. En esta ocasión, continúan las aventuras en el fantástico mundo del juego Jumanji, donde nada es lo que parece y donde los jugadores no pueden abandonar el juego hasta que acabe la partida. En esta ocasión, vuelve la misma pandilla que conocemos pero el juego ha cambiado: sus personajes se han intercambiado entre sí, son los mismos héroes pero con distinta apariencia. Con el objetivo de rescatar a uno de los suyos, los jugadores vivirán emocionantes y divertidas aventuras en lugares desconocidos e inexplorados, desde desiertos áridos hasta montañas nevadas, para escapar del juego más peligroso del mundo.",
        idVideo:"rBxcF-r9Ibs",
        director:"Jake Kasdan",
        pais:"EEUU",
        reparto:"Dwayne Johnson, Kevin Hart, Jack Black, Karen Gillan, Nick Jonas, Ser'Darius Blain, Madison Iseman, Morgan Turner y Alex Wolff, Awkwafina, Danny Glover y Danny DeVito."
        },
        {
        titulo: "Jojo Rabbit",  
        estreno: "17 de Enero de 2020",
        duracion: "1h 48 min.",
        genero:"Guerra/Comedia",
        sinopsisPelicula: 
        "Jojo Betzler (Roman Griffin Davis) es un solitario chico alemán que pertenece a las juventudes hitlerianas. Su mundo se pondrá patas arriba cuando descubre que su madre, Rosie (Scarlett Johansson), una mujer soltera, está escondiendo a Elsa (Thomasin McKenzie), una joven judía, en su propia casa. Ayudado por su amigo imaginario, Adolf Hitler (Taika Waititi), Jojo deberá afrontar su ciego nacionalismo con las contradicciones de una guerra absurda. Película basada en la novela de Christine Leunens.",
        idVideo:"tL4McUzXfFI",
        director: "Taika Waititi",
        pais:"EEUU",
        reparto:" Roman Griffin Davis, Thomasin McKenzie, Taika Waititi."
        },
        {
        titulo: "Mujercitas",  
        estreno: "25 de Diciembre de 2019",
        duracion: "2h 15 min.",
        genero: "Romántico/Drama",
        sinopsisPelicula: 
        "Massachusetts, mediados del siglo XIX, después de la Guerra Civil en Estados Unidos. Decididas a vivir la vida según sus propias normas, las hermanas March, Meg (Emma Watson), Beth (Eliza Scanlen), Jo (Saoirse Ronan) y Amy (Florence Pugh), deberán enfrentarse al reto de llegar a la edad adulta. Las cuatro hermanas, guiadas por su madre la Señora March (Laura Dern) y avaladas por la fortuna de su Tía March (Meryl Streep), trabarán amistad con el vecino de al lado, un joven llamado Laurie (Timothée Chalamet), además de con Friedrich Bhaer (Louis Garrel), un profesor de origen alemán que animará a Jo a convertirse en escritora.",
        idVideo:"6SN9-6uST80",
        director: "Greta Gerwig",
        pais: "EEUU",
        reparto:" Saoirse Ronan, Emma Watson, Florence Pugh."
        },
      ],
      /*film:{
        sinopsis: "Una profecía condena al reino de Arandelle a vivir en un invierno eterno. La joven Anna, el temerario montañero Kristoff y el reno Sven deben emprender un viaje épico y lleno de aventuras en busca de Elsa, la hermana de Anna y Reina de las Nieves. Ella es la única que puede poner fin al gélido hechizo.",
        reparto: "",
        img: "",
      },*/
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

