<template>
  <div id="app">
    <div class="center">
      <h2>ATTESTATION DE DÉPLACEMENT DÉROGATOIRE</h2>
    </div>

    <div class="center italic">
      En application du décret n°2020-1310 du 29 octobre 2020 prescrivant les mesures générales
      nécessaires pour faire face à l'épidémie de COVID-19 dans le cadre de l'état d'urgence sanitaire
    </div>

    <div>
      Je soussigné(e),
    </div>

    <div>Mme/M. : <span class="arial">{{ GET.firstname }} {{ GET.lastname }}</span></div>

    <div class="d-flex">
      <div style="flex: 1">
        Né(e) le : <span class="arial">{{ new Date(GET.birthdate).toLocaleDateString() }}</span>
      </div>

      <div style="flex: 1">
        à : <span class="arial">{{ GET.birthplace }}</span>
      </div>
    </div>

    <div>
      Demeurant : <span class="arial">{{ GET.address }} {{ GET.postcode }} {{ GET.city }}</span>
    </div>

    <div style="margin-bottom: 0">
      certifie que mon déplacement est lié au motif suivant (cocher la case) autorisé par le décret
      n°2020-1310 du 29 octobre 2020 prescrivant les mesures générales nécessaires pour faire face à
      l'épidémie de COVID-19 dans le cadre de l'état d'urgence sanitaire :
    </div>

    <div class="sub">
      Note : Les personnes souhaitant bénéficier de l’une de ces exceptions doivent se munir s’il y a lieu, lors de leurs déplacements hors
      de leur domicile, d’un document leur permettant de justifier que le déplacement considéré entre dans le champ de l’une de ces
      exception
    </div>

    <table>
      <tr v-for="(reason, index) in reasons" :key="index">
        <td>
          <img v-if="isReasonEnabled(index + 1)" src="checked.png" alt="checked box">
          <img v-else src="unchecked.png" alt="unchecked box">
        </td>
        <td>
          {{ reason.text }}
          <div v-if="reason.sub" class="sub">{{ reason.sub }}</div>
        </td>
      </tr>
    </table>

    <div class="d-flex at-page-bottom" style="width: 100%">
      <div style="flex: 4; align-self: center">
        <div>
          Fait à : <span class="arial">{{ GET.city }}</span>
        </div>

        <div class="d-flex">
          <div style="flex: 1">
            Le : <span class="arial">{{ getDateMinutesBeforeMounted(12).toLocaleDateString() }}</span>
          </div>
          <div style="flex: 1">
            à : <span class="arial">{{ getMinutesBeforeMounted(12) }}</span>
          </div>
        </div>

        <div>
          (Date et heure de début de sortie à mentionner obligatoirement)
        </div>

        <div style="flex: 1">
          <span v-if="GET.signature">Signature: <img style="max-height: 5em" :src="GET.signature" alt="signature"/></span>
          <span v-if="false">Date de sortie: Le {{ getDateMinutesBeforeMounted().toLocaleString().slice(0, -3) }}</span>
        </div>
      </div>

      <div>
        <QuickQrCodeWrapper imgstyle="height: 10em" :text="getQRCodeText"></QuickQrCodeWrapper>
      </div>
    </div>

    <div>
      <QuickQrCodeWrapper style="width: 60%" :text="getQRCodeText"></QuickQrCodeWrapper>
    </div>
  </div>
</template>

<script>
import QuickQrCodeWrapper from "@/components/QuickQrCodeWrapper";

export default {
  name: "AttestationPage",
  components: {QuickQrCodeWrapper},
  mounted() {
    // Get GET params
    this.mountedDate = new Date();
    this.GET = window.location.search.slice(1)
        .split('&')
        .reduce(function _reduce(/*Object*/ a, /*String*/ b) {
          b = b.split('=');
          a[b[0]] = decodeURIComponent(b[1]);
          return a;
        }, {});

    // Yeah i'm a lazy ass
    Object.keys(this.GET).filter(key => key !== 'signature').forEach(key => {
      this.GET[key] = this.GET[key].split('+').join(' ');
    });

    window.print();
  },
  methods: {
    isReasonEnabled(int) {
      return this.GET['reason' + int] === 'on';
    },
    getMinutesBeforeMounted(int = 10) {
      return this.getDateMinutesBeforeMounted(int).toLocaleTimeString().slice(0, -3)
    },
    getDateMinutesBeforeMounted(int = 10) {
      return new Date(this.mountedDate - int * 1000 * 60);
    }
  },
  computed: {
    getQRCodeText() {
      return `Cree le: ${this.getDateMinutesBeforeMounted(12).toLocaleDateString()} a ${this.getDateMinutesBeforeMounted(12).getHours()}h${this.getDateMinutesBeforeMounted(12).getMinutes()};
Nom: ${this.GET.lastname};
Prenom: ${this.GET.firstname};
Naissance: ${new Date(this.GET.birthdate).toLocaleDateString()} a ${this.GET.birthplace};
Adresse: ${this.GET.address} ${this.GET.postcode} ${this.GET.city};
Sortie: ${this.getDateMinutesBeforeMounted().toLocaleDateString()} a ${this.getDateMinutesBeforeMounted().getHours()}:${this.getDateMinutesBeforeMounted().getMinutes()};
Motifs: ${this.getMotives}`;
    },
    getMotives() {
      const motives = [
        'travail',
        'achats_culturel_cultuel',
        'sante',
        'famille',
        'handicap',
        'sport_animaux',
        'convocation',
        'missions',
        'enfants'
      ];
      const selected = [];

      for (let i = 0; i < motives.length; i++) {
        if (this.GET['reason' + (i + 1)] === 'on') {
          selected.push(motives[i])
        }
      }

      return selected.join(', ');
    }
  },
  data() {
    return {
      GET: {},
      mountedDate: null,
      reasons: require('../assets/reasons.json')
    }
  }
}
</script>

<style scoped>
#app {
  font-family: "Trebuchet Regular", Avenir, Helvetica, Arial, sans-serif;
  font-size: 0.9em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  margin: 30px auto;
}

.center {
  text-align: center;
}

.sub {
  font-size: small;
}

.d-flex {
  display: flex;
}

table tr {
  margin-bottom: 1em;
}

.italic {
  font-style: italic;
}

table td:first-child {
  text-align: center;
  vertical-align: top;
}

table td:last-child {
  padding-bottom: 10px;
}

table td img {
  width: 0.9em;
  height: 0.9em;
  float: left;
}

table {
  text-align: justify;
}

#app > div, .spacedtoo > div {
  margin: 1em auto;
}

@font-face {
  font-family: "Trebuchet Regular";
  src: url("/trebuc.ttf") format("truetype")
}

.at-page-bottom {
  position: fixed;
  bottom: 0;
}

.arial {
  font-family: arial;
}
</style>