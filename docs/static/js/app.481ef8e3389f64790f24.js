webpackJsonp([1],{"7Otq":function(a,t,n){a.exports=n.p+"static/img/logo.74dc166.png"},DiLi:function(a,t){},NHnr:function(a,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=n("/5sW"),r={name:"App",components:{},data:function(){return{logo:n("7Otq"),title:"Mitra Clean",caption:"Jasa Cuci Sofa dan Karpet area Surabaya, Sidoarjo, dan Gresik",items:[{icon:"home",title:"Home",url:"/",color:"indigo--text darken-1"},{icon:"supervisor_account",title:"Tentang Kami",url:"/about-us",color:"teal--text darken-4"},{icon:"contacts",title:"Kontak",url:"/contact",color:"orange--text darken-4"}],drawer:!1}}},s={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"app"}},[e("v-app",[e("v-container",[e("v-navigation-drawer",{attrs:{fixed:""},model:{value:a.drawer,callback:function(t){a.drawer=t},expression:"drawer"}},[e("v-list",{staticClass:"pa-0"},[e("v-toolbar",{attrs:{color:"primary",prominent:""}},[e("v-toolbar-title",{staticClass:"fontColor--text"},[a._v("\n              Menu\n            ")])],1),a._v(" "),a._l(a.items,function(t,n){return e("v-list-tile",{key:n,attrs:{value:"true",router:"",to:t.url}},[e("v-list-tile-action",[e("v-icon",{class:t.color,domProps:{innerHTML:a._s(t.icon)}})],1),a._v(" "),e("v-list-tile-content",[e("v-list-tile-title",{staticClass:"fontColor--text",domProps:{textContent:a._s(t.title)}})],1)],1)})],2)],1),a._v(" "),e("v-toolbar",{attrs:{color:"primary",prominent:"",fixed:""}},[e("v-toolbar-title",{staticClass:"fontColor--text"},[e("router-link",{staticClass:"fontColor--text",attrs:{to:"/"}},[e("h1",[a._v(a._s(a.title))])]),a._v(" "),e("div",{staticClass:"caption subTitle"},[a._v(a._s(a.caption))])],1),a._v(" "),e("v-spacer"),a._v(" "),e("v-toolbar-side-icon",{staticClass:"hidden-md-and-up",on:{click:function(t){t.stopPropagation(),a.drawer=!a.drawer}}}),a._v(" "),e("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[e("v-btn",{attrs:{flat:"",router:"",to:"/"}},[e("v-icon",{attrs:{medium:"",color:"brown lighten-1"}},[a._v("home")])],1),a._v(" "),e("v-btn",{attrs:{flat:"",router:"",to:"/about-us"}},[a._v("Tentang Kami")]),a._v(" "),e("v-btn",{attrs:{flat:"",router:"",to:"/contact"}},[a._v("Kontak")])],1)],1),a._v(" "),e("v-content",[e("router-view")],1)],1),a._v(" "),e("v-layout",{attrs:{primary:"","justify-space-between":"","text-xs-center":"","text-md-left":"",row:"",wrap:"","pb-3":""}},[e("v-flex",{attrs:{xs12:"",md4:""}},[e("div",{staticClass:"footerLogo py-3 px-5"},[e("img",{attrs:{src:n("7Otq"),alt:"Logo"}}),a._v(" "),e("div",{staticClass:"caption"},[a._v("\n            Spesialis Cuci Sofa dan Karpet\n          ")])])]),a._v(" "),e("v-flex",{attrs:{xs12:"",md4:"","py-3":""}},[e("h2",[a._v("Hubungi Kami !")]),a._v(" "),e("div",{staticClass:"py-1"},[e("b",[a._v("HP / WA:")]),a._v(" 081333492848")]),a._v(" "),e("div",[e("b",[a._v("Alamat:")]),a._v(" Kalilom lor gg 1 buntu no. 2, Surabaya")])])],1),a._v(" "),e("v-footer",{staticClass:"pa-4",attrs:{color:"primary"}},[e("v-spacer"),a._v(" "),e("div",{staticClass:"text-xs-center"},[e("div",[a._v("Copyright © "+a._s((new Date).getFullYear())+" All Right Reserved")]),a._v(" "),e("div",{staticClass:"caption secondary--text"},[a._v("Development by juncyboy@gmail.com")])]),a._v(" "),e("v-spacer")],1)],1)],1)},staticRenderFns:[]};var i=n("VU/8")(r,s,!1,function(a){n("nvdE")},null,null).exports,o=n("/ocq"),l={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-layout",{attrs:{row:"",wrap:"","justify-space-around":"","mt-5":""}},[e("v-flex",{attrs:{xs12:"","my-2":""}},[e("div",{staticClass:"logo"},[e("img",{attrs:{src:n("7Otq"),alt:"Logo"}}),a._v(" "),e("div",{staticClass:"logo_title"},[a._v("\n        Jasa Cuci Sofa dan Karpet\n      ")])]),a._v(" "),e("v-carousel",{attrs:{"hide-controls":""}},a._l(a.slides,function(a,t){return e("v-carousel-item",{key:t,attrs:{src:a.src}})}))],1),a._v(" "),e("v-flex",{attrs:{xs12:"","text-xs-center":"","mt-4":""},domProps:{innerHTML:a._s(a.content_1.title)}}),a._v(" "),e("v-flex",{attrs:{xs12:"","text-xs-center":""}},[e("router-link",{attrs:{to:"/contact"}},[e("v-card-media",{attrs:{src:"@/static/call-us.png",height:"120",contain:""}})],1)],1),a._v(" "),e("v-flex",{attrs:{xs12:"","mb-4":""}},[e("v-layout",{attrs:{"justify-center":""}},[e("v-flex",{staticClass:"content_1_body",attrs:{xs12:"",md8:"","text-xs-center":"","body-1":""},domProps:{innerHTML:a._s(a.content_1.body)}})],1)],1),a._v(" "),e("v-flex",{attrs:{xs12:"","text-xs-center":"","mb-4":""}},[e("h1",[e("u",[a._v("Keunggulan Mitra Clean")])])]),a._v(" "),a._l(a.cards,function(t,n){return e("v-flex",{key:n,attrs:{xs12:"",md4:""}},[e("v-card",{staticClass:"ma-2"},[e("v-card-media",{attrs:{src:t.src,height:"200",contain:""}}),a._v(" "),e("v-card-title",[e("h4",{staticClass:"fontColor--text"},[a._v(a._s(t.title))]),a._v(" "),e("div",{staticClass:"fontColor--text caption"},[a._v(a._s(t.caption))])])],1)],1)}),a._v(" "),e("v-flex",{attrs:{xs12:"","text-xs-center":""}},[e("router-link",{attrs:{to:"/contact"}},[e("v-card-media",{attrs:{src:"@/static/call-us.png",height:"120",contain:""}})],1)],1),a._v(" "),e("v-flex",{attrs:{xs12:"","text-xs-center":"","mb-3":""}},[e("h1",[e("u",[a._v("Biaya Jasa Kami Tawarkan Untuk Anda !")])])]),a._v(" "),e("v-flex",{attrs:{xs12:"",md10:"","text-xs-center":""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:"",sm6:"",md4:"","pa-2":""}},[e("div",{staticClass:"indigo darken-2 white--text pa-3"},[e("h3",[a._v("Cuci Spring Bed")]),a._v(" "),e("div",{staticClass:"caption"},[a._v("harga mulai")])]),a._v(" "),e("div",{staticClass:"indigo lighten-4 py-4"},[e("h1",[a._v("Rp. 140.000,-")])])]),a._v(" "),e("v-flex",{attrs:{xs12:"",sm6:"",md4:"","pa-2":""}},[e("div",{staticClass:"lime darken-2 white--text pa-3"},[e("h3",[a._v("Cuci Sofa")]),a._v(" "),e("div",{staticClass:"caption"},[a._v("harga mulai")])]),a._v(" "),e("div",{staticClass:"lime lighten-4 py-4"},[e("h1",[a._v("Rp. 35.000,-")])])]),a._v(" "),e("v-flex",{attrs:{xs12:"",md4:"","pa-2":""}},[e("div",{staticClass:"red darken-3 white--text pa-3"},[e("h3",[a._v("Cuci Karpet")]),a._v(" "),e("div",{staticClass:"caption"},[a._v("harga mulai")])]),a._v(" "),e("div",{staticClass:"red lighten-4 py-4"},[e("h1",[a._v("Rp. 15.000,-")])])])],1)],1),a._v(" "),e("v-flex",{attrs:{xs12:"","text-xs-center":"","my-5":""}},[e("h1",[e("i",[e("u",[a._v("Kepuasan Anda Prioritas Kami !")])])])])],2)},staticRenderFns:[]};var c=n("VU/8")({data:function(){return{slides:[{src:"@/static/home_1.jpg"},{src:"@/static/home_2.jpg"},{src:"@/static/home_3.jpg"},{src:"@/static/home_4.jpeg"},{src:"@/static/home_5.jpg"}],cards:[{src:"@/static/home_6.jpeg",title:"Pelopor Jasa Bersih Sofa Online",caption:"Mitra Clean merupakan pelopor jasa cuci sofa berbasis online pertama di surabaya, layanan cepat dan ramah kami utamakan, karena pelanggan kami adalah raja."},{src:"@/static/home_8.jpeg",title:"Kerja Profesional dan Hasil sempurna",caption:"Bekerja dengan team yang profesional dan perfectionist membuat hasil yang kami berikan ke pelanggan tak diragukan lagi. Pelanggan puas kami puas."},{src:"@/static/home_7.jpeg",title:"Biaya Terjangkau dan Pelayanan Memuaskan",caption:"Kami berusaha memberi pelayanan maksimal tanpa membebani financial pelanggan, kami mengutamakan kepuasan pelanggan dan hasil kerja yang profesional."}],content_1:{title:"<h3>Sofa atau karpet anda berdebu dan kotor ?<br>Kami siap melayani anda membersihkan sofa atau karpet anda.</h3>",body:"<p><b>Mitra Clean</b> merupakan penyedia layanan jasa cuci sofa dan karpet profesional dan berkualitas dengan dukungan tenaga yang terampil,profesional,ramah,dan sopan dalam memberikan pelayanan <b>Cuci Sofa, Cuci Springbed,Cuci Karpet,dan Cuci Kursi Kantor</b>.<b>Mitra Clean</b> melayani jasa untuk rumah dan perkantoran yang mencakup wilayah Surabaya, Sidoarjo, Gresik, dan sekitarnya.<b>Mitra Clean</b> berpengalaman menangani masalah kotor, bau, debu dan noda membandel pada sofa dan karpet anda. <b>Mitra Clean</b> Menggunakan bahan dan alat-alat berkualitas dan higinenis sehingga tidak merusak Sofa, tidak meninggalkan bau tidak sedap dan juga mampu membunuh kuman-kuman dan bakteri yang menempel pada sofa atau karpet anda. <b>Mitra Clean</b> melayani anda sepenuh hati sehingga anda tidak perlu repot membawa Sofa Anda kekantor kami, team kami akan segera mengunjungi rumah atau kantor anda, dan segera membersihkan sofa atau karpet anda dari kotoran, kuman dan bakteri-bakteri yang biasanya berkembang biak dalam sofa dan karpet yang kotor."}}}},l,!1,function(a){n("DiLi")},"data-v-cbf9caea",null).exports,d={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-layout",{attrs:{row:"",wrap:"","justify-center":"","mt-5":""}},[e("v-flex",{attrs:{xs12:""}},[e("h2",{staticClass:"px-3 pt-3 titleColor--text"},[a._v("About Us")])]),a._v(" "),e("v-flex",{staticStyle:{"line-height":"2"},attrs:{xs12:"","text-xs-justify":"","pa-3":"","fontColor--text":"",subheading:""},domProps:{innerHTML:a._s(a.history)}}),a._v(" "),e("v-flex",{attrs:{xs12:"",md10:"","my-3":""}},[e("v-layout",{attrs:{row:"",wrap:"","pb-2":""}},[e("v-flex",{attrs:{xs12:"",md5:"","pa-3":""}},[e("img",{attrs:{src:n(!function(){var a=new Error('Cannot find module "./static/aboutus_1.jpg"');throw a.code="MODULE_NOT_FOUND",a}()),alt:"visi",width:"100%"}})]),a._v(" "),e("v-flex",{attrs:{cs12:"",md7:""}},[e("h3",{staticClass:"mt-3 mb-3"},[e("u",[a._v("Visi")])]),a._v(" "),e("ul",a._l(a.visi,function(t,n){return e("li",{key:n,staticClass:"mt-2"},[e("v-layout",[e("v-flex",{attrs:{xs1:""}},[e("v-icon",{staticClass:"orange--text"},[a._v(a._s(t.icon))])],1),a._v(" "),e("v-flex",{attrs:{xs11:"","fontColor--text":"","text-xs-justify":""},domProps:{innerHTML:a._s(t.content)}})],1)],1)}))])],1),a._v(" "),e("hr")],1),a._v(" "),e("v-flex",{attrs:{xs12:"",md10:"","my-3":""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:"",md5:"","pa-3":"","order-md2":""}},[e("img",{attrs:{src:n(!function(){var a=new Error('Cannot find module "./static/aboutus_2.jpeg"');throw a.code="MODULE_NOT_FOUND",a}()),alt:"misi",width:"100%"}})]),a._v(" "),e("v-flex",{attrs:{cs12:"",md7:"","order-md1":""}},[e("h3",{staticClass:"mt-3 mb-3"},[e("u",[a._v("Misi")])]),a._v(" "),e("ul",a._l(a.misi,function(t,n){return e("li",{key:n,staticClass:"mt-2"},[e("v-layout",[e("v-flex",{attrs:{xs1:""}},[e("v-icon",{staticClass:"light-green--text darken-1"},[a._v(a._s(t.icon))])],1),a._v(" "),e("v-flex",{attrs:{xs11:"","fontColor--text":"","text-xs-justify":""},domProps:{innerHTML:a._s(t.content)}})],1)],1)}))])],1)],1)],1)},staticRenderFns:[]};var u=n("VU/8")({data:function(){return{history:'<p class="mb-2"><b>Mitra Clean</b> dibentuk di Surabaya, tepatnya di jalan Kalilom lor gang 1 buntu nomor 2. Mitra Clean di bentuk oleh orang-orang profesional di bidang kebersihan sofa dan karpet yang telah lama bekerja sama dengan usaha kebersihan sofa dan karpet di rumah dan perkantoran selama bertahun-tahun. Dengan mandiri dan profesional Mitra Clean mengutamakan Kebersihan dan Kesehatan pelanggan serta pelayanan yang memuaskan dan dapat di andalkan. Mitra Clean membangun kebiasaan positif untuk menjadikan bisnis yang sehat dan bisa bertahan untuk jangka panjang, karena priotas kami adalah kebersihan dan kesehatan.</p><hr>',visi:[{icon:"stars",content:"<b>kebersihan dan Kesehatan</b> pelanggan adalah priotas usaha Mitra Clean, dengan sofa dan karpet yang bersih  sehingga pelanggan terhindar dari debu dan kotoran yang dapat mengganggu kesehatan."},{icon:"alarm",content:"<b>Waktu adalah uang</b>, Mitra Clean menghemat waktu pelanggan melakukan tugas membersihkan sofa dan karpet pelanggan sehingga pelanggan bisa menggunakan waktunya untuk sesuatu yang produktif."},{icon:"mood",content:"<b>Salam dan senyum</b> dengan sopan dan profesional, Mitra Clean membangun kebiasaan yang membuat pelanggan nyaman dengan pelayanan staff Mitra Clean."}],misi:[{icon:"wb_sunny",content:"<b>Menghilangkan dan membersihkan</b> kotoran dan debu di sofa dan karpet pelanggan adalah tujuan utama Mitra Clean, Tujuan tersebut adalah prioritas yang tak terbantahkan yang membuat Mitra Clean bertahan hingga kini."},{icon:"photo_filter",content:"<b>Anda Puas Kami Puas</b>, dengan keramahan dan kesopanan staff Mitra Clean akan melayani anda, misi ini membuktikan Mitra Clean memberikan pelanggan pelayanan VIP tanpa memandang perbedaan apapun"},{icon:"airplanemode_active",content:"<b>Selalu bisa di andalkan</b> kapanpun dan dimanapun pelanggan membutuhkan Mitra Clean, staff Mitra Clean bekerja dengan loyalitas tinggi hingga pelanggan mendapatkan hasil yang pelanggan inginkan"},{icon:"attach_money",content:"<b>Murah tapi tidak murahan</b>, Standar harga yang Mitra Clean buat memang murah tapi pelayanan dan hasil kerja staff Mitra Clean tidak murahan. Mitra Clean memiliki pelanggan tetap yang percaya akan kualitas yang Mitra Clean berikan."},{icon:"autorenew",content:"<b>Hubungan jangka panjang</b> Mitra Clean bangun dengan pelanggan. Dengan profesionalisme kerja, harga murah dan kualitas yang tidak mengecewakan, kita pastikan pelanggan akan ingat selalu pelayanan yang staff Mitra Clean berikan"}]}}},d,!1,function(a){n("XOg+")},"data-v-51e14544",null).exports,m={render:function(){var a=this.$createElement;return(this._self._c||a)("v-layout",[this._v("\n    service page\n")])},staticRenderFns:[]},v=n("VU/8")(null,m,!1,null,null,null).exports,p={render:function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("v-layout",{attrs:{row:"",wrap:"","mt-5":""}},[n("v-flex",{attrs:{xs12:""}},[n("h2",{staticClass:"my-3 px-3 titleColor--text"},[a._v("Contact")])]),a._v(" "),n("v-flex",{attrs:{xs12:""}},[n("v-card-media",{attrs:{src:"@/static/contact.jpeg",height:"400"}},[n("v-layout",{attrs:{"justify-end":"",contact:"","align-center":""}},[n("v-flex",{attrs:{xs12:"","text-xs-center":"","secondary--text":""}},[n("h4",[a._v("Hubungi staff kami di:")]),a._v(" "),n("div",[n("v-icon",{staticClass:"light-green--text accent-3"},[a._v("phone")]),a._v(" 081333492848")],1),a._v(" "),n("h4",{staticClass:"mt-3"},[a._v("Atau datang langsung ke:")]),a._v(" "),n("div",[n("v-icon",{staticClass:"orange--text lighten-1"},[a._v("store_mall_directory")]),a._v("\n              Kalilom lor gang 1 buntu nomor 2, "),n("br"),a._v(" Surabaya, Jawa Timur\n            ")],1)])],1)],1)],1),a._v(" "),n("v-flex",{attrs:{xs12:"","pa-2":""}},[n("h2",{staticClass:"text-xs-center my-3 fontColor--text"},[n("u",[a._v("MAP")])]),a._v(" "),n("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1979.0288034997088!2d112.76859465782546!3d-7.2342699986944305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTQnMDMuNCJTIDExMsKwNDYnMTAuOSJF!5e0!3m2!1sen!2sid!4v1518887103003",width:"100%",height:"200",frameborder:"0",allowfullscreen:""}})])],1)},staticRenderFns:[]};var g=n("VU/8")(null,p,!1,function(a){n("b0ml")},"data-v-44332575",null).exports;e.a.use(o.a);var b=new o.a({routes:[{path:"/",name:"HomePage",component:c},{path:"/about-us",name:"About Us",component:u},{path:"/services",name:"Services",component:v},{path:"/contact",name:"Contact",component:g}],mode:"history"}),k=n("3EgV"),_=n.n(k);n.e(0).then(n.bind(null,"7zck")),e.a.config.productionTip=!1,e.a.use(_.a,{theme:{primary:"#E6EE9C",secondary:"#F0F4C3",fontColor:"#4E342E",titleColor:"#00796B"}}),new e.a({el:"#app",router:b,render:function(a){return a(i)}})},"XOg+":function(a,t){},b0ml:function(a,t){},nvdE:function(a,t){}},["NHnr"]);
//# sourceMappingURL=app.481ef8e3389f64790f24.js.map