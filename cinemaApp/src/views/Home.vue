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

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

   

<script>
export default {
  data() {
    return {
      drawer: false,

      items: [
        { title: "Inicio", icon: "mdi-home", link: "/" },
        { title: "Pelicula", icon: "mdi-help", link: "/pelicula" },
        { title: "Entrada", icon: "mdi-help", link: "/entradas" },
        { title: "Compra", icon: "mdi-help", link: "/compra" }
      ]
    };
  }
};
</script>

