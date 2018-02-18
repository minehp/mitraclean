<template>
  <v-layout row wrap justify-center>
      <v-flex xs12>
        <h2 class="px-3 pt-3 titleColor--text">About Us</h2>
      </v-flex>
      <v-flex xs12 text-xs-justify pa-3 style="line-height:2" fontColor--text subheading v-html="history"></v-flex>
      <v-flex xs12 md10 my-3>
        <v-layout row wrap pb-2>
          <v-flex xs12 md5 pa-3>
            <img src="/static/aboutus_1.jpg" alt="visi" width="100%">
          </v-flex>
          <v-flex cs12 md7>
            <h3 class="mt-3 mb-3"><u>Visi</u></h3>
            <ul>
              <li  v-for="(value, i) in visi" :key="i" class="mt-2">
                <v-layout>
                  <v-flex xs1>
                    <v-icon class="orange--text">{{value.icon}}</v-icon>
                  </v-flex>
                  <v-flex xs11 fontColor--text v-html="value.content" text-xs-justify></v-flex>
                </v-layout>
              </li>
            </ul>
          </v-flex>
        </v-layout>
        <hr>
      </v-flex>
      <v-flex xs12 md10 my-3>
        <v-layout row wrap>
          <v-flex xs12 md5 pa-3 order-md2>
            <img src="/static/aboutus_2.jpeg" alt="misi" width="100%">
          </v-flex>
          <v-flex cs12 md7 order-md1>
            <h3 class="mt-3 mb-3"><u>Misi</u></h3>
            <ul>
              <li  v-for="(value, i) in misi" :key="i" class="mt-2">
                <v-layout>
                  <v-flex xs1>
                    <v-icon class="light-green--text darken-1">{{value.icon}}</v-icon>
                  </v-flex>
                  <v-flex xs11 fontColor--text v-html="value.content" text-xs-justify></v-flex>
                </v-layout>
              </li>
            </ul>
          </v-flex>
        </v-layout>
      </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data: () => {
      return {
        history: '<p class="mb-2"><b>Mitra Clean</b> dibentuk di Surabaya, tepatnya di jalan Kalilom lor gang 1 buntu nomor 2. Mitra Clean di bentuk oleh orang-orang profesional di bidang kebersihan sofa dan karpet yang telah lama bekerja sama dengan usaha kebersihan sofa dan karpet di rumah dan perkantoran selama bertahun-tahun. Dengan mandiri dan profesional Mitra Clean mengutamakan Kebersihan dan Kesehatan pelanggan serta pelayanan yang memuaskan dan dapat di andalkan. Mitra Clean membangun kebiasaan positif untuk menjadikan bisnis yang sehat dan bisa bertahan untuk jangka panjang, karena priotas kami adalah kebersihan dan kesehatan.</p><hr>',
        visi: [
          {
            icon: 'stars',
            content: '<b>kebersihan dan Kesehatan</b> pelanggan adalah priotas usaha Mitra Clean, dengan sofa dan karpet yang bersih  sehingga pelanggan terhindar dari debu dan kotoran yang dapat mengganggu kesehatan.'
          },
          {
            icon: 'alarm',
            content: '<b>Waktu adalah uang</b>, Mitra Clean menghemat waktu pelanggan melakukan tugas membersihkan sofa dan karpet pelanggan sehingga pelanggan bisa menggunakan waktunya untuk sesuatu yang produktif.'
          },
          {
            icon: 'mood',
            content: '<b>Salam dan senyum</b> dengan sopan dan profesional, Mitra Clean membangun kebiasaan yang membuat pelanggan nyaman dengan pelayanan staff Mitra Clean.'
          }
        ],
        misi: [
          {
            icon: 'wb_sunny',
            content: '<b>Menghilangkan dan membersihkan</b> kotoran dan debu di sofa dan karpet pelanggan adalah tujuan utama Mitra Clean, Tujuan tersebut adalah prioritas yang tak terbantahkan yang membuat Mitra Clean bertahan hingga kini.'
          },
          {
            icon: 'photo_filter',
            content: '<b>Anda Puas Kami Puas</b>, dengan keramahan dan kesopanan staff Mitra Clean akan melayani anda, misi ini membuktikan Mitra Clean memberikan pelanggan pelayanan VIP tanpa memandang perbedaan apapun'
          },
          {
            icon: 'airplanemode_active',
            content: '<b>Selalu bisa di andalkan</b> kapanpun dan dimanapun pelanggan membutuhkan Mitra Clean, staff Mitra Clean bekerja dengan loyalitas tinggi hingga pelanggan mendapatkan hasil yang pelanggan inginkan'
          },
          {
            icon: 'attach_money',
            content: '<b>Murah tapi tidak murahan</b>, Standar harga yang Mitra Clean buat memang murah tapi pelayanan dan hasil kerja staff Mitra Clean tidak murahan. Mitra Clean memiliki pelanggan tetap yang percaya akan kualitas yang Mitra Clean berikan.'
          },
          {
            icon: 'autorenew',
            content: '<b>Hubungan pangka panjang</b> Mitra Clean bangun dengan pelanggan. Dengan profesionalisme kerja, harga murah dan kualitas yang tidak mengecewakan, kita pastikan pelanggan akan ingat selalu pelayanan yang staff Mitra Clean berikan'
          }
        ]
      };
    }
  }
</script>

<style scoped>
  ul{
    list-style: none;
  }

  img {
    /* border-radius: 2em; */
    box-shadow: 0em 0em 1em grey;
    border: solid white 2em;
  }
</style>
