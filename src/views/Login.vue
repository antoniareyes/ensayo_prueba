<template>
  <v-app>
    <v-img src="https://media.istockphoto.com/vectors/children-toy-set-kids-drawing-vector-flat-style-cartoon-illustration-vector-id1227375713">
      <v-card width="400px" class="my-auto mx-auto" color="green lighten-4">
        <v-card-title>
          <h1>Login</h1>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field label="usuario" prepend-icon="mdi-account-circle" v-model="user" name="user"/>
            <v-text-field
              v-model="password"
              name="password"
              :type="showPassword ? 'text' : 'password'"
              label="password"
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click.prevent="showPassword = !showPassword"
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="green lighten-1" @click="login">Login</v-btn>
        </v-card-actions>
      </v-card> 
    </v-img>   
  </v-app>
</template>

<script>
import {mapActions} from 'vuex'
import firebase from 'firebase'
export default {
  data() {
    return{
      user:"",
      password: "",
      showPassword: false
    }
 },
 computed:{
   
 },
 methods:{
   ...mapActions(["updateCurrentUser"]),
   login(){
     firebase.auth()
     .signInWithEmailAndPassword(this.user, this.password)
     .then(() =>{
       this.updateCurrentUser(firebase.auth().currentUser)
       this.$router.push("/home");
     })
     .catch(()=>{
       alert("Error al iniciar sesión, inténtalo de nuevo!")
     });
   }
 }
};
</script>

