<template>
<v-app>
  <v-img
    class="mx-auto"
    max-width="100%"
    outlined
    margin-left= "0%"
    margin-right= "0%"
    margin-down= "5%"
    src="https://www.bbva.com/wp-content/uploads/2017/11/A-2211-MusicaParaElCerebro-BBVA-1024x416.jpg"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">
          <h1>Live Coding</h1> 
        </div>
        
      </v-list-item-content>
    </v-list-item>
     
  </v-img>
  <v-card
    class="mx-auto"
    max-width="400"
    v-for="course in courses" :key="course.id"
  >
    <v-img :src="course.data.img" heigth="400px" class="white--text align-end">
      <v-card-title>{{course.data.name}}</v-card-title>
    </v-img>

    <v-card-text class="text--primary">
      <div  color="orange" >{{course.data.description}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
        
      >
      <router-link v-bind:to="'/curso/'+ course.id">Ver</router-link>
        
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-app>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from "vuex";

export default {
  data(){
    return{
      course:{
         id: null,
       data:{
         name: null,
         description: null, 
         img: null,
         id: null
       },
       examples:[
         {
           id: null,
           data:{
             mp3: null,
             description: null,
             title: null
           }
         }
       ]
      }
    }
  },
  name: "Home",
  computed: {
    ...mapState(["courses"]),
  },
  methods: {
    ...mapActions(["getCourses","getCourse"]),
     goCourse(idCourse){
       this.$router.push(`/curso/${idCourse}`)
    
     }
    
  },
  created() {
    this.getCourses();
  }
}
</script>
