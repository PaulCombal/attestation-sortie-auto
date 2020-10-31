import Vue from 'vue'
import AttestationPage from "@/components/AttestationPage";
import FormPage from "@/components/FormPage";

Vue.config.productionTip = false

const routes = {
  '/': FormPage,
  '/attestation': AttestationPage,
  '/attestation-sortie-auto/attestation': AttestationPage
}

new Vue({
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || FormPage
    }
  },
  render (h) { return h(this.ViewComponent) }
}).$mount('#app')
