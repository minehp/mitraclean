<template>
  <v-layout row wrap justify-space-around="">
    <v-flex xs12 my-2>
      <v-carousel hide-controls>
        <v-carousel-item v-for="(slide,i) in slides" :src="slide.src" :key="i"></v-carousel-item>
      </v-carousel>
    </v-flex>
    <v-flex xs12 class="text-xs-center">
      <router-link to="/contact">
        <img src="/static/call-us.png" alt="callUs" width="400em">
      </router-link>
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
  </v-layout>
</template>

<script>
  export default {
    data: () => {
      return {
        slides : [
          { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Japanese_Air_Force_One_sofa-seat.jpg/1024px-Japanese_Air_Force_One_sofa-seat.jpg' },
          { src: '/static/home_1.jpeg' },
          { src: '/static/home_2.jpeg' },
          { src: '/static/home_3.jpeg' },
          { src: '/static/home_4.jpeg' },
          { src: '/static/home_5.jpeg' },
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
        ]
      }
    },
  }
</script>
