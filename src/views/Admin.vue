<template>
  <v-app>
    

    <v-card width="400px" class="my-auto mx-auto" color="green lighten-4">
      <v-card-title v-text="course.id ? 'Editar' : 'Crear'"></v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-text-field
            label="Nombre"
            required
            type="text"
            class="form-control"
            id="courseName"
            v-model="course.data.name"
          ></v-text-field>

          
          <v-text-field
            type="text"
            class="form-control"
            id="courseDescription"
            v-model="course.data.description"
            label="descripción"
            required
          ></v-text-field>

          <v-text-field
            type="text"
            class="form-control"
            id="courseImg"
            v-model="course.data.img"
            label="link imagen"
          ></v-text-field>

          <v-text-field
            type="text"
            class="form-control"
            id="courseId"
            v-model="course.data.id"
            label="Id data"
            required
          ></v-text-field>

          <v-card-actions>
            <v-btn
              color="success"
              class="mr-4"
              @click.prevent="submitCourse"
              v-text="course.id ? 'Editar' : 'Crear'"
            >
            </v-btn>

            <v-btn color="warning" @click="reset">
              Resetear formulario
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>

    <v-card
      class="mx-auto"
      max-width="400"
      v-for="course in courses"
      :key="course.id"
    >
      <v-img
        :src="course.data.img"
        heigth="400px"
        class="white--text align-end"
      >
        <v-card-title>{{ course.data.name }}</v-card-title>
      </v-img>

      <v-card-text class="text--primary">
        <div color="orange">{{ course.data.description }}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn
          outlined
          rounded
          text
          @click.prevent="editCourse(course)"
          color="warning"
        >
          Editar
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
         id: "",
       data:{
         name: "",
         description: "", 
         img: "",
         id: ""
       },
       examples:[
         {
           id: "",
           data:{
             mp3: "",
             description: "",
             title: ""
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
    ...mapActions(["getCourses", "postCourse", "updateCourse","getCourse"]), 
    submitCourse(){
      if(this.course.id != "" && this.course.data.id != "" && 
      this.course.data.name != "" && this.course.data.description != ""){
      if(this.course.id){
        if(confirm('Estás seguro de que quieres editar este curso?')){
        this.updateCourse(this.course)
        }
      }else{
        
        if(confirm('Estás seguro de que quieres agregar este curso?')){
        this.postCourse(this.course);
        }
      }
      this.reset()
      }
    },
    editCourse(course){
      this.course.data.name= course.data.name
       this.course.data.description= course.data.description
       this.course.data.img= course.data.img
       this.course.data.id= course.data.id
      this.course.id= course.id
    },
    reset(){
         this.course.id= null,
         this.course.data.name= null,
         this.course.data.description= null, 
         this.course.data.img= null,
         this.course.data.id= null
         
    }

  },
  created() {
    this.getCourses();
  }
}
</script>


