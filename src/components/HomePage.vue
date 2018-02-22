<template>
  <v-layout row wrap justify-space-around mt-5>
    <v-flex xs12 my-2>
      <div class="logo">
        <img :src="require('@/assets/logo.png')" alt="Logo">
        <div class="logo_title">
          Jasa Cuci Sofa dan Karpet
        </div>
      </div>
      <v-carousel hide-controls>
        <v-carousel-item v-for="(slide,i) in slides" :src="slide.src" :key="i">
        </v-carousel-item>
      </v-carousel>
    </v-flex>
    <v-flex xs12 text-xs-center mt-4 v-html="content_1.title"></v-flex>
    <v-flex xs12 text-xs-center>
      <router-link to="/contact">
        <v-card-media src="./static/call-us.png" height="120" contain></v-card-media>
      </router-link>
    </v-flex>
    <v-flex xs12 mb-4>
      <v-layout justify-center>
        <v-flex xs12 md8 text-xs-center body-1 v-html="content_1.body" class="content_1_body">
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs12 text-xs-center mb-4>
      <h1><u>Keunggulan Mitra Clean</u></h1>
    </v-flex>
    <v-flex xs12 md4  v-for="(card, i) in cards" :key="i" >
      <v-card class="ma-2">
        <v-card-media :src="card.src" height="200" contain></v-card-media>
        <v-card-title>
          <h4 class="fontColor--text">{{card.title}}</h4>
          <div class="fontColor--text caption">{{card.caption}}</div>
        </v-card-title>
      </v-card>
    </v-flex>
    <v-flex xs12 text-xs-center>
      <router-link to="/contact">
        <v-card-media src="./static/call-us.png" height="120" contain></v-card-media>
      </router-link>
    </v-flex>
    <v-flex xs12 text-xs-center mb-3>
      <h1><u>Biaya Jasa Kami Tawarkan Untuk Anda !</u></h1>
    </v-flex>
    <v-flex xs12 md10 text-xs-center>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 pa-2>
          <div class="indigo darken-2 white--text pa-3">
            <h3>Cuci Spring Bed</h3>
            <div class="caption">harga mulai</div>
          </div>
          <div class="indigo lighten-4 py-4">
            <h1>Rp. 140.000,-</h1>
          </div>
        </v-flex>
        <v-flex xs12 sm6 md4 pa-2>
          <div class="lime darken-2 white--text pa-3">
            <h3>Cuci Sofa</h3>
            <div class="caption">harga mulai</div>
          </div>
          <div class="lime lighten-4 py-4">
            <h1>Rp. 35.000,-</h1>
          </div>
        </v-flex>
        <v-flex xs12 md4 pa-2>
          <div class="red darken-3 white--text pa-3">
            <h3>Cuci Karpet</h3>
            <div class="caption">harga mulai</div>
          </div>
          <div class="red lighten-4 py-4">
            <h1>Rp. 15.000,-</h1>
          </div>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs12 text-xs-center my-5>
      <h1><i><u>Kepuasan Anda Prioritas Kami !</u></i></h1>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => {
    return {
      slides: [
        { src: "./static/home_1.jpg" },
        { src: "./static/home_2.jpg" },
        { src: "./static/home_3.jpg" },
        { src: "./static/home_4.jpeg" },
        { src: "./static/home_5.jpg" }
      ],
      cards: [
        {
          src: "./static/home_6.jpeg",
          title: "Pelopor Jasa Bersih Sofa Online",
          caption:
            "Mitra Clean merupakan pelopor jasa cuci sofa berbasis online pertama di surabaya, layanan cepat dan ramah kami utamakan, karena pelanggan kami adalah raja."
        },
        {
          src: "./static/home_8.jpeg",
          title: "Kerja Profesional dan Hasil sempurna",
          caption:
            "Bekerja dengan team yang profesional dan perfectionist membuat hasil yang kami berikan ke pelanggan tak diragukan lagi. Pelanggan puas kami puas."
        },
        {
          src: "./static/home_7.jpeg",
          title: "Biaya Terjangkau dan Pelayanan Memuaskan",
          caption:
            "Kami berusaha memberi pelayanan maksimal tanpa membebani financial pelanggan, kami mengutamakan kepuasan pelanggan dan hasil kerja yang profesional."
        }
      ],
      content_1: {
        title:
          "<h3>Sofa atau karpet anda berdebu dan kotor ?<br>Kami siap melayani anda membersihkan sofa atau karpet anda.</h3>",
        body:
          "<p><b>Mitra Clean</b> merupakan penyedia layanan jasa cuci sofa dan karpet profesional dan berkualitas dengan dukungan tenaga yang terampil,profesional,ramah,dan sopan dalam memberikan pelayanan <b>Cuci Sofa, Cuci Springbed,Cuci Karpet,dan Cuci Kursi Kantor</b>.<b>Mitra Clean</b> melayani jasa untuk rumah dan perkantoran yang mencakup wilayah Surabaya, Sidoarjo, Gresik, dan sekitarnya.<b>Mitra Clean</b> berpengalaman menangani masalah kotor, bau, debu dan noda membandel pada sofa dan karpet anda. <b>Mitra Clean</b> Menggunakan bahan dan alat-alat berkualitas dan higinenis sehingga tidak merusak Sofa, tidak meninggalkan bau tidak sedap dan juga mampu membunuh kuman-kuman dan bakteri yang menempel pada sofa atau karpet anda. <b>Mitra Clean</b> melayani anda sepenuh hati sehingga anda tidak perlu repot membawa Sofa Anda kekantor kami, team kami akan segera mengunjungi rumah atau kantor anda, dan segera membersihkan sofa atau karpet anda dari kotoran, kuman dan bakteri-bakteri yang biasanya berkembang biak dalam sofa dan karpet yang kotor."
      }
    };
  }
};
</script>

<style scoped>
.logo {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.7);
  padding-top: 2em;
  padding-bottom: 2em;
  z-index: 1;
  margin-top: 7em;
  text-align: center;
  width: 100%;
  left: 0;
}

.logo img {
  height: 8em;
}

.logo .logo_title {
  text-align: center;
  font-size: 1.5em;
  font-style: italic;
  text-decoration: underline;
}

.content_1_body {
  line-height: 2;
}

@media (max-width: 960px) {
  .logo {
    margin-top: 9em;
  }
  .logo img {
    height: 5em;
  }

  .logo .logo_title {
    font-size: 1.2em;
  }
}
</style>
