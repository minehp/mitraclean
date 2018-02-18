<template>
  <v-layout row wrap justify-space-around>
    <v-flex xs12 my-2>
      <div class="logo">
        <img :src="require('@/assets/logo.png')" alt="Logo">
        <div class="logo_title">
          Spesialis Cuci Sofa dan Karpet
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
        <img src="/static/call-us.png" alt="callUs" width="400em">
      </router-link>
    </v-flex>
    <v-flex xs12 mb-4>
      <v-layout justify-center>
        <v-flex xs8 text-xs-justify body-1 v-html="content_1.body" class="content_1_body">
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
        <img src="/static/call-us.png" alt="callUs" width="400em">
      </router-link>
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
        slides : [
          { src: '/static/home_1.jpg' },
          { src: '/static/home_2.jpg' },
          { src: '/static/home_3.jpg' },
          { src: '/static/home_4.jpeg' },
          { src: '/static/home_5.jpg' },
        ],
        cards: [
          {
            src: '/static/home_6.jpeg',
            title: 'Pelopor Jasa Bersih Sofa Online',
            caption: 'Mitra Clean merupakan pelopor jasa cuci sofa berbasis online pertama di surabaya, layanan cepat dan ramah kami utamakan, karena pelanggan kami adalah raja yang akan kami layani.'
          },
          {
            src: '/static/home_8.jpeg',
            title: 'Kerja Profesional dan Hasil sempurna',
            caption: 'Bekerja dengan team yang profesional dan perfectionist membuat hasil yang kami berikan ke pelanggan tak diragukan lagi. Pelanggan puas kami puas.'
          },
          {
            src: '/static/home_7.jpeg',
            title: 'Biaya Terjangkau dan Pelayanan Memuaskan',
            caption: 'Kami berusaha memberi pelayanan maksimal tanpa membebani financial pelanggan, kami mengutamakan kepuasan pelanggan dan hasil kerja yang profesional.'
          }
        ],
        content_1 : {
          title: '<h2>Jika anda memiliki sofa atau karpet dan sudah usang atau kotor,<br>Kami siap melayani membersihkan sofa atau karpet anda</h2>',
          body: '<p><b>Mitra Clean</b> merupakan penyedia layanan jasa cuci sofa dan karpet profesional dan berkualitas dengan dukungan tenaga yang terampil,profesional,ramah,dan sopan dalam memberikan pelayanan <b>Cuci Sofa, Cuci Springbed,Cuci Karpet,dan Cuci Kursi Kantor</b>.<b>Mitra Clean</b> melayani jasa untuk rumah dan perkantoran yang mencakup wilayah Surabaya, Sidoarjo, Gresik, dan sekitarnya.<b>Mitra Clean</b> berpengalaman menangani masalah kotor, bau, debu dan noda membandel pada sofa dan karpet anda. <b>Mitra Clean</b> Menggunakan bahan dan alat-alat berkualitas dan higinenis sehingga tidak merusak Sofa, tidak meninggalkan bau tidak sedap dan juga mampu membunuh kuman-kuman dan bakteri yang menempel pada sofa atau karpet anda. <b>Mitra Clean</b> melayani anda sepenuh hati sehingga anda tidak perlu repot membawa Sofa Anda kekantor kami, team kami akan segera mengunjungi rumah atau kantor anda, dan segera membersihkan sofa atau karpet anda dari kotoran, kuman dan bakteri-bakteri yang biasanya berkembang biak dalam sofa dan karpet yang kotor.'
        }
      }
    },
  }
</script>

<style scoped>
  .logo {
    position: absolute;
    background-color: rgba(255,255,255,.7);
    padding-top: 2em;
    padding-bottom: 2em;
    z-index: 999;
    margin-top: 7em;
    text-align: center;
    width: 100%;
    left: 0;
  }

  @media and (min-width: 1904px) {

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
</style>
