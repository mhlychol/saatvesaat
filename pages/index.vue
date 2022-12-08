<template>
  <div>
    <menualtresim/>
    <slider/>

    <yenigelenler />
    <onecikanlar/>
    <onecikanaltresimler/>
  </div>

</template>

<script>
import menualtresim from '~/components/menualtresim.vue'
import yenigelenler from '~/components/yenigelenler.vue'
import slider from '~/components/slider.vue'
import onecikanlar from '~/components/onecikanlar.vue'
import onecikanaltresimler from '~/components/onecikanaltresim.vue'

export default {
  components: {
    menualtresim,
     yenigelenler,
     slider,
     onecikanlar,
     onecikanaltresimler,
    
  },
  head: {
    script: [
      {
        src: 'https://mc.yandex.ru/metrika/watch.js',
      },
      {
        src: 'https://js-agent.newrelic.com/nr-1211.min.js',
      },
      {
        src: 'https://maps.googleapis.com/maps-api-v3/api/js/46/11/intl/tr_ALL/common.js',
      },
      {
        src: 'https://cdn.preciso.net/aud/clientjs/1378.js?',
      },
      {
        src: 'https://cdn.preciso.net/aud/clientjs/ptag.js?1378',
      },
      {
        src: 'cdn.scarabresearch.com/js/1693B688DB4E2EB2/scarab-v2.js',
      },
      {
        src: 'cdn.8digits.com/automation.js',
      },
      {
        src: 'www.googleadservices.com/pagead/conversion_async.js',
      },
      {
        src: 'https://js.go2sdk.com/v2/tune.js',
      },
      {
        src: 'www.glami.com.tr/js/compiled/pt.js',
      },
      {
        src: 'https://connect.facebook.net/en_US/fbevents.js',
      },
      {
        src: 'www.googleadservices.com/pagead/conversion_async.js',
      },
      {
        src: 'https://cdn.saatvesaat.com.tr/media/js/b048b18f7e08e1bb8a38a63d2873435a_20190194.js?v=20190194',
      },
      {
        src: 'cdn.segmentify.com/075b343b-5380-41c5-9bf4-e4e1b3d6ea7d/segmentify.js',
      },
      {
        src: 'https://cdn.saatvesaat.com.tr/skin/frontend/base/default/js/simplecheckout/bootstrap-modal.js',
      },
      {
        src: 'https://cdn.saatvesaat.com.tr/media/js/efcf1908259f5fbda56988c18f01270e_20190194.js?v=20190194',
      },
      {
        src: 'cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.js',
      },
      {
        src: './assets/styles/5118dcf0b8a086d0301cc09c8382994f_20190194.css',
      },
      {
        src: './assets/styles/bootstrap-modal.css',
      },
      {
        src: './assets/styles/cookieconsent.min.css',
      },
      {
        src: './assets/styles/d27032717bad2142040a9bc82fadae25_20190194.css',
      },
      {
        src: './assets/styles/ff7ba76d3ff7ea1c84e4f3e3c5aca4dc_20190194.css',
      },
    ],
  },
}
