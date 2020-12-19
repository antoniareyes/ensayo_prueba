<template>
  <v-app>
    <v-app-bar
      app
      color="green lighten-2"
      ligth
    >
      <div class="d-flex align-center">
        <v-icon src="">LiveCoding</v-icon>

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src=""
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
      <v-btn v-if="currentUser" @click.prevent="goHome" text>
        <span class="mr-2">Home</span>
        
      </v-btn>

      <v-btn v-if="currentUser" @click.prevent="logout" text>
        <span class="mr-2">Cerrar Sesión</span>
        <v-icon>mdi-lock-open</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view> </router-view>
    </v-main>
  </v-app>
</template>

<script>
import firebase from 'firebase'
import {mapState, mapActions} from 'vuex'
export default {
  name: 'App',
  methods:{
    ...mapActions(["updateCurrentUser"]),
    logout(){
      firebase.auth().signOut().then(() => {
        this.updateCurrentUser(null)
        this.$router.push('/login')
      })
    },
    goHome(){
      this.$router.push('/home')
    }
  },
  computed:{
    ...mapState(["currentUser"])
  },
  created(){
    this.updateCurrentUser(firebase.auth().currentUser)
  }

};
</script>