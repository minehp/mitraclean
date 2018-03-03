<template>
  <v-layout row wrap mt-5>
    <v-flex xs12>
      <h2 class="my-3 px-3 titleColor--text">Contact</h2>
    </v-flex>
    <v-flex xs12>
      <v-card-media src="./static/contact.jpeg" height="400">
        <v-layout justify-end contact align-center>
          <v-flex xs12 text-xs-center secondary--text>
              <h4>Hubungi staff kami di:</h4>
              <div><v-icon class="light-green--text accent-3">phone</v-icon> 081333492848</div>
              <h4 class="mt-3">Atau datang langsung ke:</h4>
              <div>
                <v-icon class="orange--text lighten-1">store_mall_directory</v-icon>
                Kalilom lor gang 1 buntu nomor 2, <br> Surabaya, Jawa Timur
              </div>
          </v-flex>
        </v-layout>
      </v-card-media>
    </v-flex>
    <v-flex xs12 pa-2>
      <h2 class="text-xs-center my-3 fontColor--text"><u>MAP</u></h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1979.0288034997088!2d112.76859465782546!3d-7.2342699986944305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTQnMDMuNCJTIDExMsKwNDYnMTAuOSJF!5e0!3m2!1sen!2sid!4v1518887103003" width="100%" height="200" frameborder="0" style="border:0" allowfullscreen></iframe>
    </v-flex>
  </v-layout>
</template>

<style scoped>
  .contact {
    background-color: rgba(0,0,0,.6);
  }
</style>

<script>
export default {
  head: {
    title: function () {
      return {
        inner: 'MitraClean - Kontak - Cuci sofa surabaya'
      }
    },
    meta: function () {
      return [
        { name: 'keywords', content: 'kontak mitraclean, kontak cuci sofa, kontak cuci sofa surabaya' },
        { name: 'description', content: 'hubungi mitraclean yang merupakan jasa cuci sofa di surabaya' },
        { name: 'title', content: 'kontak mitra clean' },
        { name: 'copyright', content: 'mitraclean.com is registered trademark bealkha.com' },
        { name: 'lang', content: 'id' },
        { name: 'author', content: 'Yuda Ferry Mahendra <juncyboy@gmail.com>' }
      ]
    }
  }
}
</script>
