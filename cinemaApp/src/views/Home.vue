<template>
  <v-app style="background: black">
    <v-card color="indigo lighten-2" height="90px">
      <v-toolbar dark height="90px" color="black">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title id="game">
          <v-btn
            color="black"
            depressed
            style="font-size: 20pt; font-family: 'Helvetica';"
            @click="toHome"
          >CINE</v-btn>
        </v-toolbar-title>
      </v-toolbar>
    </v-card>

    <v-navigation-drawer absolute temporary v-model="drawer" class="grey darken-4" dark>
      <v-list-item>
        <v-list-item-avatar>
          <v-icon large>mdi-menu</v-icon>
        </v-list-item-avatar>

        <v-list-item-title style="font-size: 15pt">Menú</v-list-item-title>

        <v-btn icon @click.stop="drawer = !drawer">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense class="pa-0" flat>
        <v-list-item-group>
          <v-list-item v-for="item in items" :key="item.title" :to="item.link">
            <v-list-item-action>
              <v-icon size="30">{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title style="font-size: 13pt">{{ item.title }}</v-list-item-title>
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

      items: [{ title: "Inicio", icon: "mdi-home", link: "/" }]
    };
  },
  methods: {
    toHome: function() {
      this.$router.push("/");
    }
  }
};
</script>

