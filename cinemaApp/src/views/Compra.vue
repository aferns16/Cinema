<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex xs6>
            <v-card color="black" tile flat>
              <v-card-title class="headline white--text font-weight-light">ZONA DE PAGO</v-card-title>
              <v-card tile flat dark>
                <v-card-title class="font-weight-light">Desglose de precios</v-card-title>
                <v-card-text>
                  <v-simple-table dark>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">Entradas</th>
                          <th class="text-left">Importe (€)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in compra" :key="item.name">
                          <td>{{ item.name }}</td>
                          <td>{{ item.price }}</td>
                        </tr>
                        <tr v-for="item in descuentos" :key="item.name">
                          <td>{{ item.name }}</td>
                          <td>{{ item.price }}</td>
                        </tr>
                        <tr>
                          <td>Total a pagar:</td>
                          <td>4.80 €</td>
                        </tr>
                      </tbody>
                    </template>
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
                          append-icon="mdi-account-card-details"
                          name="nombre del titular"
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

                        <v-checkbox color="green" label="Acepto los términos y condiciones."></v-checkbox>
                      </v-form>
                    </v-card-text>
                    <v-card-actions>
                      <v-container>
                        <v-row>
                          <v-btn rounded depressed outlined dark color="grey darken-3">Cancelar</v-btn>
                          <v-spacer></v-spacer>
                          <v-btn rounded depressed dark color="grey darken-3">Pagar con tarjeta</v-btn>
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
                          clearable
                          required
                        ></v-text-field>
                        <v-text-field
                          filled
                          rounded
                          dense
                          color="#78909C"
                          append-icon="mdi-lock"
                          name="contraseña"
                          label="Contraseña"
                          type="password"
                          hint="Requerido"
                          clearable
                          required
                        ></v-text-field>
                      </v-form>
                      <v-checkbox color="green" label="Acepto los términos y condiciones."></v-checkbox>
                    </v-card-text>
                    <v-toolbar flat class="white--text" color="rgb(255,255,255,0)"></v-toolbar>
                    <v-card-actions>
                      <v-container>
                        <v-row>
                          <v-btn rounded depressed outlined dark color="grey darken-3">Cancelar</v-btn>
                          <v-spacer></v-spacer>
                          <v-btn rounded depressed dark color="grey darken-3">Pagar con PayPal</v-btn>
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
    </v-content>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    model: "tab-2",
    cardNumber: "",
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
    descuentos: [{ name: "Descuento estudiantes", price: -1.2 }]
  })
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
</style>
