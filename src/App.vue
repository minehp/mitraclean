<template>
  <div id="app">
    <v-app>
      <v-container fluid>
        <v-toolbar color="primary">
          <router-link to="/">
            <img :src="logo" alt="Logo" class="logo">
          </router-link>
          <v-toolbar-title class="fontColor--text">
            <h3>Mitra Clean</h3>
            <div class="caption subTitle">{{caption}}</div>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat router to="/">
              <v-icon medium color="brown lighten-1">home</v-icon>
            </v-btn>
            <v-btn flat router to="/about-us">Tentang Kami</v-btn>
            <v-btn flat router to="/services">Layanan</v-btn>
            <v-btn flat router to="/contact">Kontak</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-content>
          <router-view/>
        </v-content>
        <v-footer color="primary" class="pa-4">
          <v-spacer></v-spacer>
          <div class="text-xs-center">
            <div>Copyright © {{ (new Date()).getFullYear() }} All Right Reserved to MitraClean</div>
            <div class="caption secondary--text">Development by juncyboy@gmail.com</div>
          </div>
          <v-spacer></v-spacer>
        </v-footer>
      </v-container>
    </v-app>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {},
  data: () => {
    return {
      logo: require('@/assets/logo.png'),
      title: 'Mitra Clean',
      caption: 'Jasa cuci sofa dan karpet'
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow-x: hidden;
}

img.logo {
    width: 5em;
    margin-bottom: .7em;
}

.caption.subTitle {
  margin-top: -.7em;
  border-top: solid .2em;
}

html {
  overflow-y: auto;
}
</style>
