import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: null,
    courses: [],
    course: {
      id:  "",

      data:{
      id: "",
      name: "",
      description: "",
      img: "",
      },

      examples: [
        {
          id: "",
          data: {
            mp3: "",
            description: "",
            title: ""
          }
        }
      ]
    }
  },
  mutations: {
    UPDATE_CURRENT_USER(state, user) {
      state.currentUser = user
    },
    GET_COURSE(state, course) {
      state.course = course
    },
    GET_COURSES(state, courses) {
      state.courses = courses
    },
    SET_COURSE(state, course) {
      state.course = course
    }
  },
  actions: {
    getCourses({ commit }) {
      axios.get("https://us-central1-ottoklauss-5927c.cloudfunctions.net/api/courses")
        .then(resp => {
          commit('GET_COURSES', resp.data)
        })
    },
    getCourse({ commit }, id) {
      axios.get(`https://us-central1-ottoklauss-5927c.cloudfunctions.net/api/courses/${id}`)
        .then(resp => {
          commit('GET_COURSE', resp.data)
        })
    },
    editCourse({ commit }, course) {
      commit('SET_COURSE', course)
    },
    updateCourse({ dispatch }, course) {
      axios.put(`https://us-central1-ottoklauss-5927c.cloudfunctions.net/api/courses/${course.id}`, course)
        .then(() => {
          dispatch("getCourses")
        })
    },
    postCourse({ dispatch }, course) {
      axios.post("https://us-central1-ottoklauss-5927c.cloudfunctions.net/api/courses", course)
        .then(() => {
          dispatch("getCourses")
        })
    },
    updateCurrentUser({ commit }, user) {
      commit('UPDATE_CURRENT_USER', user)
    }
  },
  modules: {
  }
})
