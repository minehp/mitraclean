<template>
  <div id="app">
    <v-app>
      <v-container>
        <v-navigation-drawer v-model="drawer" fixed>
          <v-list class="pa-0">
            <v-toolbar color="primary" prominent>
              <v-toolbar-title class="fontColor--text">
                Menu
              </v-toolbar-title>
            </v-toolbar>    
            <v-list-tile value="true" v-for="(item, i) in items" :key="i" router :to="item.url">
              <v-list-tile-action>
                <v-icon v-html="item.icon" :class="item.color"></v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title class="fontColor--text" v-text="item.title"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
        <v-toolbar color="primary" prominent fixed>
          <v-toolbar-title class="fontColor--text">
            <router-link to="/" class="fontColor--text"><h1>{{title}}</h1></router-link>
            <div class="caption subTitle">{{caption}}</div>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat router to="/mitraclean/">
              <v-icon medium color="brown lighten-1">home</v-icon>
            </v-btn>
            <v-btn flat router to="/mitraclean/about-us">Tentang Kami</v-btn>
            <v-btn flat router to="/mitraclean/contact">Kontak</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-content>
          <router-view/>
        </v-content>
      </v-container>
      <v-layout primary justify-space-between text-xs-center text-md-left row wrap pb-3>
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
          <div><b>Alamat:</b> Kalilom lor gg 1 buntu no. 2, Surabaya</div>
        </v-flex>
      </v-layout>
      <v-footer color="primary" class="pa-4">
        <v-spacer></v-spacer>
        <div class="text-xs-center">
          <div>Copyright © {{ (new Date()).getFullYear() }} All Right Reserved</div>
          <div class="caption secondary--text">Development by juncyboy@gmail.com</div>
        </div>
        <v-spacer></v-spacer>
      </v-footer>
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
      caption: 'Jasa Cuci Sofa dan Karpet area Surabaya, Sidoarjo, dan Gresik',
      items: [
        {
          icon: 'home',
          title: 'Home',
          url: '/',
          color: 'indigo--text darken-1'
        },
        {
          icon: 'supervisor_account',
          title: 'Tentang Kami',
          url: '/about-us',
          color: 'teal--text darken-4'
        },
        {
          icon: 'contacts',
          title: 'Kontak',
          url: '/contact',
          color: 'orange--text darken-4'
        },
      ],
      drawer: false
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
