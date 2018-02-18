<template>
  <div id="app">
    <v-app>
      <v-container>
        <v-toolbar color="primary" prominent>
          <v-toolbar-title class="fontColor--text">
            <router-link to="/" class="fontColor--text"><h1>{{title}}</h1></router-link>
            <div class="caption subTitle">{{caption}}</div>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat router to="/">
              <v-icon medium color="brown lighten-1">home</v-icon>
            </v-btn>
            <v-btn flat router to="/about-us">Tentang Kami</v-btn>
            <v-btn flat router to="/contact">Kontak</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-content>
          <router-view/>
        </v-content>
        <v-layout primary justify-space-between text-xs-center text-md-left row wrap>
          <v-flex xs12 md4>
            <div class="footerLogo py-3 px-5">
              <img :src="require('@/assets/logo.png')" alt="Logo">
              <div class="caption">
                Spesialis Cuci Sofa dan Karpet
              </div>
            </div>
          </v-flex>
          <v-flex xs12 md4 py-3>
            <h2>Hubungi Kami !</h2>
            <div class="py-1"><b>HP / WA:</b> 081333492848</div>
            <div><b>Alamat:</b> Kalilomlor gg 1 buntu no. 2, Surabaya</div>
          </v-flex>
        </v-layout>
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
      caption: 'Spesialis Cuci Sofa dan Karpet area Surabaya, Sidoarjo, dan Gresik'
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

.caption.subTitle {
  margin-top: -.7em;
}

html {
  overflow-y: auto;
}

a {
  text-decoration: none;
}

.footerLogo img {
  height: 4em;
}
</style>
