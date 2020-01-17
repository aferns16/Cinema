<template>
  <v-app style="background: black">
    <v-container bg grid-list-md text-xs-center>
      <v-row>
        <v-col></v-col>
        <v-row align="end" justify="end">
          <v-col>
            <v-img
              :alt="pelicula.alt"
              aspect-ratio="1.7"
              height="550px"
              width="400px"
              :src="pelicula.img[0]"
            ></v-img>
          </v-col>
          <v-col>
            <p style="color: #FFFF">{{pelicula.titulo.toUpperCase()}}</p>
            <p style="color: #FFFF">En el cine desde el {{pelicula.estreno}}</p>
            <!--TRAILER pelicula-->
            <youtube fitParent :video-id="pelicula.idVideo" :alt="pelicula.alt"></youtube>
            <!--/ENDOF Trailer-->
          </v-col>
        </v-row>
        <v-col></v-col>
      </v-row>
    </v-container>
    <v-container>
      <p>
        <span style="color: #FFFF">{{pelicula.titulo.toUpperCase()}}</span>
      </p>
      <p>
        <span
          style="color: #FFFF"
        >Director: {{pelicula.director}} | País: {{pelicula.pais}} | Duración: {{pelicula.duracion}} | Fecha de estreno: {{pelicula.estreno}} | Género: {{pelicula.genero}}</span>
      </p>
      <!--Selector de sesión para comprar entrada-->
      <v-carousel :show-arrows="showArrows" :hide-delimiters="hideDelimiters" :cycle="cycle">
        <v-carousel-item v-for="(sesion, i) in sesiones" :key="sesion">
          <v-sheet color="black" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center">
              <div class="display-3">
                {{ sesiones[i]}}
                <v-img :alt='altTicket' aspect-ratio="1.7" height="50px" width="50px" :src="imgTicket" @click="compra"></v-img>
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      <p>
        <span style="color: #FFFF">Elije sesión y pulsa en el ticket para comprar tu entrada</span>
      </p>
    </v-container>
    <!--/ENDOFSelector-->
    <!--TresCol Información Película-->
    <v-container grid-list-md text-xs-center fluid pa-12>
      <v-layout fill-height justify-center>
        <v-card tile xs3 d-flex width="500px">
          <v-card-title style="font-size: 160%">SINOPSIS:</v-card-title>
          <v-card-text color="black">
            <div class="sinop">{{pelicula.sinopsisPelicula}}</div>
          </v-card-text>
        </v-card>
        <v-col></v-col>
        <v-card tile xs3 d-flex width="500px">
          <v-card-title style="font-size: 160%">REPARTO:</v-card-title>
          <v-card-text>
            <div class="sinop">{{pelicula.reparto}}</div>
          </v-card-text>
        </v-card>
        <v-col></v-col>
        <v-card tile xs3 d-flex width="500px">
          <v-carousel :show-arrows="showArrows" :hide-delimiters="hideDelimiters" :cycle="cycle">
            <v-carousel-item
              v-for="imagen in pelicula.img"
              :key="imagen"
              :src="imagen"
              aspect-ratio="1.7"
              :alt="pelicula.alt"
            ></v-carousel-item>
          </v-carousel>
        </v-card>
      </v-layout>
    </v-container>
    <!--/ENDOF info-->
  </v-app>
</template>

   

<script>
// @ is an alias to /src
export default {
  data() {
    return {
      pelicula: "",
      peliculas: [
        {
          titulo: "Frozen 2",
          estreno: "22 de Noviembre de 2019",
          duracion: "1h 43min",
          genero: "Animación/Aventura/Familia",
          sinopsisPelicula:
            "Elsa tiene un poder extraordinario: es capaz de crear hielo y nieve. Sin embargo, a pesar de lo feliz que la hacen los habitantes de Arendelle, siente que no encaja allá. Después de oír una voz misteriosa, Elsa, acompañada por Anna, Kristoff, Olaf y Sven, viaja a los bosques embrujados y los mares oscuros que se extienden más allá de los límites de su reino para descubrir quién es en realidad y por qué posee un poder tan asombroso.",
          idVideo: "I-oJ5QjrX9M",
          director: "Chris Buck, Jennifer Lee",
          pais: "EEUU",
          reparto: "Idina Menzel, Kristen Bell, Josh Gad, Jonathan Groff",
          alt: "Película Frozen 2. Estreno el 29 de Noviembre de 2013.",
          img: [
            "http://t0.gstatic.com/images?q=tbn:ANd9GcQwgyIDw4ct01q0nypl45AwVR099Wv0F5erPDKH-oYu7pdmEsZC",
            "https://lumiere-a.akamaihd.net/v1/images/frozen_2_las_teaser_42bc5f09.jpeg?region=0,0,770,1100",
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/frozen2main1-1571826300.jpg"
          ]
        },
        {
          titulo: "Joker",
          estreno: "4 de Octubre de 2019",
          duracion: "2h 02min",
          genero: "Drama",
          sinopsisPelicula:
            "Joker mostrará por primera vez los orígenes del icónico archienemigo por excelencia de Bruce Wayne/Batman. La historia sigue de cerca la vida de Arthur Fleck (Joaquin Phoenix), un hombre con problemas psiquiátricos que vivirá una serie de acontecimientos que le harán convertirse en uno de los grandes villanos de DC Comics. El Príncipe Payaso del Crimen se cruzará en el camino de Thomas Wayne (Brett Cullen) y se acercará a su hijo, el futuro Caballero Oscuro en su versión joven (Dante Pereira-Olson).",
          idVideo: "-_DJEzZk2pc",
          director: "Todd Phillips",
          pais: "EEUU, Canadá",
          reparto:
            "Joaquin Phoenix, Robert De Niro, Zazie Beetz, Brett Cullen, Shea Whigham, Douglas Hodge, Glenn Fleshler, y Frances Conroy.",
          alt: "Película Joker. Estreno el 4 de Octubre de 2019.",
          img: [
            "https://images-na.ssl-images-amazon.com/images/I/710MAaieKaL._SY606_.jpg",
            "https://i.pinimg.com/originals/d2/73/93/d273938677bc1ae44e423d35e02a81ba.png",
            "https://noescinetodoloquereluce.com/wp-content/uploads/2019/09/joker-a-1.jpg"
          ]
        },
        {
          titulo: "Last Christmas",
          estreno: "29 de Noviembre de 2019",
          duracion: "1h 43min",
          genero: "Comedia/Romántico",
          sinopsisPelicula:
            "Kate (Emilia Clarke) deambula amargada por las calles de Londres, acompañada por el continuo tintineo de los cascabeles de sus zapatos, porque trabaja como elfo en una tienda navideña que abre todo el año. Cuando Tom (Henry Golding) aparece en su vida, Kate empieza a ver las cosas de otra manera más optimista, aunque parezca demasiado idílico para ser verdad. Pero al llegar la Navidad, todo parece ponerse en contra de la pareja. Eso sí, se darán cuenta de que lo importante será escuchar a su corazón.",
          idVideo: "z9CEIcmWmtA",
          director: "Paul Feig",
          pais: "Gran Bretaña, EEUU",
          reparto:
            "Emilia Clarke, Henry Golding, Emma Thompson, Michelle Yeoh.",
          alt: "Película Last Christmas. Estreno el 29 de Noviembre de 2019",
          img: [
            "https://i0.wp.com/pixeldigitalcinema.com/wp-content/uploads/2019/11/last-christmas.jpg?ssl=1",
            "http://es.web.img3.acsta.net/pictures/19/08/14/12/49/3601841.jpg",
            "https://cinembrollos.files.wordpress.com/2019/11/last_christmas_ver3_xlg.jpg?w=820&h=1215"
          ]
        },
        {
          titulo: "Maléfica: Maestra del Mal",
          estreno: "18 de Octubre de 2019",
          duracion: "1h 59min",
          genero: "Fantasía/Aventura",
          sinopsisPelicula:
            "Varios años después, continúa la relación entre la villana Maléfica y la princesa Aurora. El complejo vínculo entre la malvada hada de grandes cuernos y la joven que será la futura reina evoluciona, mientras ambas hacen nuevas alianzas y se enfrentan a diferentes adversarios, sin olvidarse de proteger a las criaturas mágicas que residen en su reino.",
          idVideo: "trQ2Ft_A478",
          director: "Joachim Ronning",
          pais: "EEUU",
          reparto:
            "Angelina Jolie, Elle Fanning, Michelle Pfeiffer, Chiwetel Ejiofor, Ed Skrein, Juno Temple, Sam Riley, Harris Dickinson, Robert Lindsay, e Imelda Staunton",
          alt:
            "Película Maléfica Maestra del Mal. Estreno el 18 de Octubre de 2019",
          img: [
            "http://t0.gstatic.com/images?q=tbn:ANd9GcSQ7YhkPor0ZN40AdSeTr-XGb9eSq_jqObwPqC_90wDXscoRF4Z",
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/malefica-poster-1551884950.jpg",
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/malefica-2-poster-1565073615.jpg?resize=480:*"
          ]
        },
        {
          titulo: "Star Wars: Episodio IX El Ascenso de Skywalker",
          estreno: "19 de Diciembre de 2019",
          duracion: "2h 22 min",
          genero: "Ciencia ficción/Aventura",
          sinopsisPelicula:
            "Último capítulo de la tercera trilogía de la franquicia Star Wars. En esta novena entrega de la saga galáctica la historia llega a su fin con un viaje épico hacia una galaxia muy, muy lejana. La Resistencia está bajo mínimos, pero en su lucha sin descanso ha contactado con aliados de toda la galaxia para crear una red lo suficientemente potente para destruir a la Primera Orden. Este será el enfrentamiento final entre Rey (Daisy Ridley) y Kylo Ren (Adam Driver): la batalla final por la libertad está a punto de llegar.",
          idVideo: "Izme__ZsURY",
          director: "J.J. Abrams",
          pais: "EEUU",
          reparto:
            "Carrie Fisher (fallecida en 2016), Mark Hamill, Adam Driver, Daisy Ridley, John Boyega, Oscar Isaac, Anthony Daniels, Naomie Ackie, Domhnall Gleeson, Richard E. Grant, Lupita Nyong'o, Keri Russell, Joonas Suotamo, Kelly Marie Tran, Ian McDiarmid y Billy Dee Williams.",
          alt:
            "Película Star Wars Episodio 9: El Ascenso de Skywalker. Estreno el 19 de Diciembre de 2019",
          img: [
            "https://sm.ign.com/ign_es/screenshot/default/rise-of-skywalker-international-poster_3vd5.jpg",
            "https://i.pinimg.com/736x/15/72/2c/15722cff787c4b0b689fc7e31e435a09.jpg",
            "https://i.promecal.es/IMG/2019/B4725A21-FDDC-43AB-537233BD3BF67F95.JPG"
          ]
        },
        {
          titulo: "Jumanji: The Next Level",
          estreno: "13 de Diciembre de 2019",
          duracion: "2h 04min",
          genero: "Aventura/Comedia",
          sinopsisPelicula:
            "Secuela de Jumanji: Bienvenidos a la jungla (2017). En esta ocasión, continúan las aventuras en el fantástico mundo del juego Jumanji, donde los jugadores no pueden abandonar el juego hasta que acabe la partida. Vuelve la misma pandilla que conocemos pero el juego ha cambiado: sus personajes se han intercambiado entre sí, son los mismos héroes pero con distinta apariencia. Con el objetivo de rescatar a uno de los suyos, los jugadores vivirán emocionantes y divertidas aventuras en lugares desconocidos e inexplorados.",
          idVideo: "rBxcF-r9Ibs",
          director: "Jake Kasdan",
          pais: "EEUU",
          reparto:
            "Dwayne Johnson, Kevin Hart, Jack Black, Karen Gillan, Nick Jonas, Ser'Darius Blain, Madison Iseman, Morgan Turner y Alex Wolff, Awkwafina, Danny Glover y Danny DeVito.",
          alt:
            "Película Jumanji: El Siguiente Nivel. Estreno el 13 de Diciembre de 2019",
          img: [
            "https://s3-eu-west-1.amazonaws.com/abandomedia/db/poster/db_posters_49050.jpg",
            "http://es.web.img2.acsta.net/pictures/19/10/31/17/03/4702865.jpg",
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jumanji-siguiente-nivel-poster-1572882049.jpg"
          ]
        },
        {
          titulo: "Jojo Rabbit",
          estreno: "17 de Enero de 2020",
          duracion: "1h 48 min",
          genero: "Guerra/Comedia",
          sinopsisPelicula:
            "Jojo Betzler (Roman Griffin Davis) es un solitario chico alemán que pertenece a las juventudes hitlerianas. Su mundo se pondrá patas arriba cuando descubre que su madre, Rosie (Scarlett Johansson), una mujer soltera, está escondiendo a Elsa (Thomasin McKenzie), una joven judía, en su propia casa. Ayudado por su amigo imaginario, Adolf Hitler (Taika Waititi), Jojo deberá afrontar su ciego nacionalismo con las contradicciones de una guerra absurda. Película basada en la novela de Christine Leunens.",
          idVideo: "tL4McUzXfFI",
          director: "Taika Waititi",
          pais: "EEUU",
          reparto:
            " Roman Griffin Davis, Thomasin McKenzie, Taika Waititi, Scarlett Johansson",
          alt: "Película Jojo Rabbit. Estreno el 17 de Enero de 2020",
          img: [
            "https://noescinetodoloquereluce.com/wp-content/uploads/2019/09/jojo.jpg",
            "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/main_element/public/media/image/2020/01/jojo-rabbit-1842513.jpg?itok=4uNX7kta",
            "https://saposyprincesas.elmundo.es/wp-content/uploads/2019/12/jojo_rabbit_06.jpg"
          ]
        },
        {
          titulo: "Mujercitas",
          estreno: "25 de Diciembre de 2019",
          duracion: "2h 15 min",
          genero: "Romántico/Drama",
          sinopsisPelicula:
            "Massachusetts, mediados del siglo XIX, después de la Guerra Civil. Decididas a vivir la vida según sus propias normas, las hermanas March, Meg (Emma Watson), Beth (Eliza Scanlen), Jo (Saoirse Ronan) y Amy (Florence Pugh), deberán enfrentarse al reto de llegar a la edad adulta. Guiadas por su madre la Señora March (Laura Dern), trabarán amistad con el vecino de al lado, un joven llamado Laurie (Timothée Chalamet), además de con Friedrich Bhaer (Louis Garrel), un profesor que animará a Jo a convertirse en escritora.",
          idVideo: "6SN9-6uST80",
          director: "Greta Gerwig",
          pais: "EEUU",
          reparto:
            " Saoirse Ronan, Eliza Scanlen, Emma Watson, Florence Pugh, Timothée Chalamet, Laura Dern, Louis Garrel.",
          alt: "Película Mujercitas. Estreno el 25 de Diciembre de 2019",
          img: [
            "https://poster.ninja/wp-content/uploads/2019/10/Little-Women-Poster-1.jpg",
            "https://cdn.cinematerial.com/p/500x/dwekkgl8/little-women-french-movie-poster.jpg?v=1574261955",
            "https://m.media-amazon.com/images/I/813E6tkrhXL._SS500_.jpg"
          ]
        }
      ],
      /*film:{
        sinopsis: "Una profecía condena al reino de Arandelle a vivir en un invierno eterno. La joven Anna, el temerario montañero Kristoff y el reno Sven deben emprender un viaje épico y lleno de aventuras en busca de Elsa, la hermana de Anna y Reina de las Nieves. Ella es la única que puede poner fin al gélido hechizo.",
        reparto: "",
        img: "",
      },*/
      sesiones: [
        "Primera Sesión: 16:30",
        "Segunda Sesión: 18:30",
        "Tercera Sesión: 20:30",
        "Sesión de Noche: 22:30",
      ],
      imgTicket: "https://raw.githubusercontent.com/aferns16/Cinema/master/cinemaApp/src/assets/ticket.jpg?token=AF4O43NXYJRFSXMOTWCWULS6FLHLA",
      altTicket: "Ticket: Comprar entrada para esta sesión",
      imagenes: ["prime", "seg", "ter"],
      showArrows: true,
      hideDelimiters: false,
      cycle: false
    };
  },
  methods: {
    compra: function() {
      alert("Comprar esta sesion");
      this.$router.push("Entradas");
    },
    onEnterFind: function() {
      alert("Enter was pressed");
    },
    onEnterFilter: function() {
      alert("Enter was pressed");
    }
  },
  mounted() {
    document.documentElement.scrollTop = 0;
    var peli = this.$store.getters.getPelicula;
    if (peli == "Frozen 2") {
      this.pelicula = this.peliculas[0];
    } else if (peli == "Joker") {
      this.pelicula = this.peliculas[1];
    } else if (peli == "Last Christmas") {
      this.pelicula = this.peliculas[2];
    } else if (peli == "Maléfica: Maestra del Mal") {
      this.pelicula = this.peliculas[3];
    } else if (peli == "Star Wars: Episodio IX") {
      this.pelicula = this.peliculas[4];
    } else if (peli == "Jumanji: Next Level") {
      this.pelicula = this.peliculas[5];
    } else if (peli == "Jojo Rabbit") {
      this.pelicula = this.peliculas[6];
    } else if (peli == "Mujercitas") {
      this.pelicula = this.peliculas[7];
    }
  }
};
</script>
<style>
.txt {
  color: #fff;
}
.infoP {
  color: #000;
  background-color: #fff;
}
.sinop {
  color: black;
  font-size: 160%;
  text-align: justify;
  line-height: 30px;
}
p {
  font-size: 130%;
}
</style>
