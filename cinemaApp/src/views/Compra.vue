<template>
  <v-app id="inspire">
    <v-row align="start" justify="start">
      <v-btn large to="Entradas" color="white" depressed>
        <vue-fontawesome icon="arrow-left" size="3"></vue-fontawesome>
      </v-btn>
    </v-row>

    <v-container fluid fill-height>
      <v-layout justify-center align-center>
        <v-flex sm10>
          <v-card color="black" tile flat>
            <v-card-title class="headline white--text font-weight-light">ZONA DE PAGO</v-card-title>
            <v-card tile flat dark>
              <v-card-text>
                <v-simple-table dark>
                  <thead>
                    <tr>
                      <th class="text-left" style="font-size: 150%">Desglose de Precios</th>
                      <th class="text-left" style="font-size: 150%">Importe (€)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th
                        class="font-weight-light"
                        style="font-size: 130%"
                      >{{this.$store.getters.getEntradas}} Entrada(s) {{this.$store.getters.getPelicula}}</th>
                      <th
                        class="font-weight-light"
                        style="font-size: 130%"
                      >{{this.$store.getters.getEntradas * 6}}€</th>
                    </tr>
                    <tr>
                      <th
                        class="font-weight-light"
                        style="font-size: 130%"
                      >Descuento {{this.$store.getters.getNombreDescuento }}</th>
                      <th
                        class="font-weight-light"
                        style="font-size: 130%"
                      >{{this.$store.getters.getDescuentos * this.$store.getters.getEntradas}}€</th>
                    </tr>
                    <tr>
                      <th class="font-weight-light" style="font-size: 130%">Total a pagar:</th>
                      <th
                        class="font-weight-light"
                        style="font-size: 130%"
                      >{{this.$store.getters.getPrecioTotal}}</th>
                    </tr>
                  </tbody>
                </v-simple-table>
              </v-card-text>
            </v-card>
            <v-tabs
              v-model="model"
              centered
              color="rgb(255, 255, 255)"
              dark
              slider-color="blue-grey lighten-4"
              grow
              height="60"
            >
              <v-tab class="title font-weight-light" ripple>
                <span style="padding-right:20px">Tarjeta</span>
                <vue-fontawesome icon="credit-card"></vue-fontawesome>
              </v-tab>
              <v-tab class="title font-weight-light" ripple>
                <span style="padding-right:20px">PayPal</span>
                <vue-fontawesome icon="paypal"></vue-fontawesome>
              </v-tab>

              <v-tab-item>
                <!--SIGN-->
                <v-card color="rgb(255,255,255)" flat class="elevation">
                  <v-card-text>
                    <v-container>
                      <v-row align="center" justify="space-around">
                        <vue-fontawesome v-for="icon in icons" :key="icon" :icon="icon" size="3"></vue-fontawesome>
                      </v-row>
                    </v-container>
                    <v-form>
                      <v-text-field
                        filled
                        rounded
                        dense
                        color="#78909C"
                        append-icon="mdi-at"
                        name="e-mail"
                        label="E-mail"
                        type="text"
                        hint="Requerido"
                        v-model="emailC"
                        :rules="rules.emailC"
                        clearable
                        required
                      ></v-text-field>
                      <v-text-field
                        filled
                        rounded
                        dense
                        color="#78909C"
                        v-model="TNumber"
                        :rules="rules.TNumber"
                        append-icon="mdi-account-card-details"
                        name="Nombre del titular"
                        label="Nombre del titular"
                        type="text"
                        hint="Requerido"
                        clearable
                        required
                      ></v-text-field>
                      <v-text-field
                        filled
                        rounded
                        dense
                        v-model="cardNumber"
                        :rules="rules.cardNumber"
                        color="#78909C"
                        append-icon="mdi-credit-card"
                        label="Número de tarjeta"
                        type="text"
                        hint="Requerido"
                        clearable
                        required
                      ></v-text-field>
                      <v-row xs6>
                        <v-col>
                          <v-menu
                            ref="menu"
                            v-model="menu"
                            :close-on-content-click="false"
                            :return-value.sync="date"
                            transition="scale-transition"
                            offset-y
                            max-width="290px"
                            min-width="290px"
                          >
                            <template v-slot:activator="{ on }">
                              <v-text-field
                                filled
                                rounded
                                dense
                                v-model="date"
                                label="Fecha validez"
                                prepend-inner-icon="mdi-calendar"
                                readonly
                                v-on="on"
                                color="#78909C"
                              ></v-text-field>
                            </template>

                            <v-date-picker
                              color="black"
                              v-model="date"
                              type="month"
                              no-title
                              scrollable
                            >
                              <v-spacer></v-spacer>
                              <v-btn text color="black" @click="menu = false">Cancel</v-btn>
                              <v-btn text color="black" @click="$refs.menu.save(date)">OK</v-btn>
                            </v-date-picker>
                          </v-menu>
                        </v-col>
                        <v-col cols="1">
                          <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                              <v-btn icon depressed v-on="on">
                                <vue-fontawesome icon="question-circle" color="grey" size="2"></vue-fontawesome>
                              </v-btn>
                            </template>
                            <span>
                              El CVV o CVC es el grupo de tres o cuatro dígitos
                              <br />ubicado en la parte posterior de la tarjeta.
                            </span>
                          </v-tooltip>
                        </v-col>
                        <v-col>
                          <v-text-field
                            filled
                            rounded
                            dense
                            v-model="CVC"
                            :rules="rules.CVC"
                            color="#78909C"
                            prepend-inner-icon="mdi-lock"
                            name="CVC"
                            label="CVC"
                            type="text"
                            hint="Requerido"
                            clearable
                            required
                          ></v-text-field>
                        </v-col>
                      </v-row>

                      <v-checkbox
                        color="green"
                        v-model="termsC"
                        label="Acepto los términos y condiciones."
                      ></v-checkbox>
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-container>
                      <v-row>
                        <v-btn rounded depressed outlined dark color="grey darken-3">Cancelar</v-btn>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialog" width="500">
                          <template v-slot:activator="{ on }">
                            <v-btn
                              rounded
                              depressed
                              :disabled="!CardIsValid"
                              dark
                              color="grey darken-3"
                              v-on="on"
                            >Pagar con tarjeta</v-btn>
                          </template>

                          <v-card>
                            <v-card-title
                              class="headline grey lighten-2"
                              primary-title
                            >El pago se ha producido correctamente</v-card-title>

                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn color="primary" text to="/">Aceptar</v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                      </v-row>
                    </v-container>
                  </v-card-actions>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <!--item-->
                <v-card color="rgb(255,255,255,0.7)" flat class="elevation">
                  <v-card-text>
                    <v-container>
                      <v-row align="center" justify="space-around">
                        <vue-fontawesome icon="cc-paypal" size="3"></vue-fontawesome>
                      </v-row>
                    </v-container>
                    <v-form>
                      <v-text-field
                        filled
                        rounded
                        dense
                        color="#78909C"
                        append-icon="mdi-at"
                        name="e-mail de la cuenta"
                        label="E-mail de la cuenta"
                        type="text"
                        hint="Requerido"
                        v-model="email"
                        :rules="rules.email"
                        clearable
                        required
                      ></v-text-field>
                      <v-text-field
                        filled
                        rounded
                        dense
                        v-model="pass"
                        color="#78909C"
                        append-icon="mdi-lock"
                        name="contraseña"
                        label="Contraseña"
                        type="password"
                        hint="Requerido"
                        :rules="rules.pass"
                        clearable
                        required
                      ></v-text-field>
                    </v-form>
                    <v-checkbox
                      color="green"
                      v-model="terms"
                      label="Acepto los términos y condiciones."
                    ></v-checkbox>
                  </v-card-text>
                  <v-toolbar flat class="white--text" color="rgb(255,255,255,0)"></v-toolbar>
                  <v-card-actions>
                    <v-container>
                      <v-row>
                        <v-btn rounded depressed outlined dark color="grey darken-3">Cancelar</v-btn>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialog" width="500">
                          <template v-slot:activator="{ on }">
                            <v-btn
                              v-on="on"
                              rounded
                              depressed
                              dark
                              color="grey darken-3"
                              :disabled="!PayPalIsValid"
                            >Pagar con PayPal</v-btn>
                          </template>

                          <v-card>
                            <v-card-title
                              class="headline grey lighten-2"
                              primary-title
                            >El pago se ha producido correctamente</v-card-title>

                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn color="primary" text to="/">Aceptar</v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                      </v-row>
                    </v-container>
                  </v-card-actions>
                </v-card>
              </v-tab-item>
            </v-tabs>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
    model: "tab-2",
    pass: "",
    email: "",
    terms: false,
    termsC: false,
    TNumber: "",
    cardNumber: "",
    emailC: "",
    CVC: "",
    alert: false,
    alertContent: "",
    date: new Date().toISOString().substr(0, 7),
    menu: false,
    modal: false,
    hovering: false,
    showToolTip: false,
    defaultCard: "fas fa-credit-card",
    icons: ["cc-visa", "cc-amex", "cc-mastercard", "cc-discover"],
    compra: [{ name: "Entrada FROZEN 2", price: 6 }],
    descuentos: [{ name: "Descuento", price: -1.2 }],
    rules: {
      pass: [val => (val || "").length > 0 || "Requerido"],
      email: [val => (val || "").length > 0 || "Requerido"],
      cardNumber: [val => (val || "").length > 0 || "Requerido"],
      TNumber: [val => (val || "").length > 0 || "Requerido"],
      CVC: [val => (val || "").length > 0 || "Requerido"],
      emailC: [val => (val || "").length > 0 || "Requerido"]
    }
  }),
  computed: {
    PayPalIsValid() {
      return this.pass && this.email && this.terms;
    },
    CardIsValid() {
      return (
        this.cardNumber &&
        this.termsC &&
        this.TNumber &&
        this.CVC &&
        this.emailC
      );
    }
  },

  mounted() {
    document.documentElement.scrollTop = 0;
  }
};
</script>
<style scoped type="text/css">
header {
  background-color: white;
  text-align: center;
}
.footer {
  opacity: 0.3;
  background-color: #907a55;
}
.v-text-field {
  font-size: 130%;
}
</style>
