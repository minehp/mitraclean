<template>
  <v-layout>
    <v-flex>
      <v-toolbar color="lime lighten-1">
        <img :src="image" alt="Logo">
        <v-toolbar-title color="brown lighten-1">Mitra Clean</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat>
            <v-icon medium color="brown lighten-1">home</v-icon>
          </v-btn>
          <v-btn flat>About us</v-btn>
          <v-btn flat>Service</v-btn>
          <v-btn flat>Contact</v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-flex>
  </v-layout>
</template>

<script>
import image from "./assets/logo.png"
export default {
  data: () => {
    image: image
    
  }
}
</script>
