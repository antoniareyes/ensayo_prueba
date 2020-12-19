<template>
<v-app>
  <v-img
    class="mx-auto"
    max-width="100%"
    outlined
    margin-left= "0%"
    margin-right= "0%"
    margin-down= "5%"
    :src="course.data.img"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">
          <h1>{{course.data.name}}</h1> 
          <h2>{{course.data.description}}</h2>
        </div>
        
      </v-list-item-content>
    </v-list-item>
     
  </v-img>
  <v-card
    class="mx-auto"
    max-width="400"
    v-for="course in courses" :key="course.examples.id"
  >
    <v-img :src="course.data.img" heigth="400px" class="white--text align-end">
      <v-card-title>{{course.examples.data.title}}</v-card-title>
    </v-img>

    <v-card-text class="text--primary">
      <div  color="orange" >{{course.examples.data.description}}</div>
    </v-card-text>

    <v-card-actions>
     <h1>{{course.examples.data.title}}</h1>
     <h3>{{course.examples.data.description}}</h3>
    <h2>{{course.examples.data.mp3}}</h2>        
   
    </v-card-actions>
  </v-card>
  </v-app>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from "vuex";

export default {
  name: "Curso",
  computed: {
    ...mapState(["courses", "course"]),
  },
  methods: {
    ...mapActions(["getCourse"]),
    setCourse(idCourse){
        this.getCourse(idCourse)
    }
  }, 
  
  created() {
    this.getCourse(this.$route.params.id);
    console.log(this.$route.params.id)
  }
}
</script>
