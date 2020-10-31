<template>
  <img alt="QR code" :style="imgstyle" :src="tmp"/>
</template>

<script>
import QRCode from 'qrcode'

export default {
  name: "QuickQrCodeWrapper",
  props: {
    "text": String,
    'imgstyle': String
  },
  data() {
    return {
      tmp: ''
    }
  },
  watch: {
    text() {
      QRCode.toDataURL(this.$props.text).then(url => this.tmp = url);
    }
  }
}
</script>

<style scoped>

</style>