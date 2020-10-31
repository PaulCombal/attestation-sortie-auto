<template>
  <div id="app">
    <div class="center">
      <h2 style="font-family: auto">ATTESTATION DE DÉPLACEMENT DÉROGATOIRE</h2>
    </div>

    <div class="center">
      En application du décret n°2020-1310 du 29 octobre 2020 prescrivant les mesures générales
      nécessaires pour faire face à l'épidémie de Covid19 dans le cadre de l'état d'urgence sanitaire
    </div>

    <div>
      Je soussigné(e),
    </div>

    <div>Mme/M. : {{ GET.firstname }} {{ GET.lastname }}</div>

    <div class="d-flex">
      <div style="flex: 1">
        Né(e) le : {{ new Date(GET.birthdate).toLocaleDateString() }}
      </div>

      <div style="flex: 1">
        à : {{ GET.birthplace }}
      </div>
    </div>

    <div>
      Demeurant : {{ GET.address }} {{ GET.postcode }} {{ GET.city }}
    </div>

    <div>
      certifie que mon déplacement est lié au motif suivant (cocher la case) autorisé par le décret
      n°2020-1310 du 29 octobre 2020 prescrivant les mesures générales nécessaires pour faire face à
      l'épidémie de Covid19 dans le cadre de l'état d'urgence sanitaire <sup>1</sup> :
    </div>

    <table>
      <tr>
        <td>
          <img v-if="isReasonEnabled(1)" src="checked.png" alt="checked box">
          <img v-else src="unchecked.png" alt="unchecked box">
        </td>
        <td>
          Déplacements entre le domicile et le lieu d’exercice de l’activité professionnelle ou un
          établissement d’enseignement ou de formation, déplacements professionnels ne pouvant
          être différés<sup>2</sup>, déplacements pour un concours ou un examen.
        </td>
      </tr>
      <tr>
        <td>
          <img v-if="isReasonEnabled(2)" src="checked.png" alt="checked box">
          <img v-else src="unchecked.png" alt="unchecked box">
        </td>
        <td>
          Déplacements pour effectuer des achats de fournitures nécessaires à l'activité
          professionnelle, des achats de première nécessité<sup>3</sup> dans des établissements dont les
          activités demeurent autorisées, le retrait de commande et les livraisons à domicile.
        </td>
      </tr>
      <tr>
        <td>
          <img v-if="isReasonEnabled(3)" src="checked.png" alt="checked box">
          <img v-else src="unchecked.png" alt="unchecked box">
        </td>
        <td>
          Consultations, examens et soins ne pouvant être assurés à distance et l’achat de médicaments.
        </td>
      </tr>
      <tr>
        <td>
          <img v-if="isReasonEnabled(4)" src="checked.png" alt="checked box">
          <img v-else src="unchecked.png" alt="unchecked box">
        </td>
        <td>
          Déplacements pour motif familial impérieux, pour l'assistance aux personnes vulnérables
          et précaires ou la garde d'enfants.
        </td>
      </tr>
      <tr>
        <td>
          <img v-if="isReasonEnabled(5)" src="checked.png" alt="checked box">
          <img v-else src="unchecked.png" alt="unchecked box">
        </td>
        <td>
          Déplacement des personnes en situation de handicap et leur accompagnant.
        </td>
      </tr>
      <tr>
        <td>
          <img v-if="isReasonEnabled(6)" src="checked.png" alt="checked box">
          <img v-else src="unchecked.png" alt="unchecked box">
        </td>
        <td>
          Déplacements brefs, dans la limite d'une heure quotidienne et dans un rayon maximal
          d'un kilomètre autour du domicile, liés soit à l'activité physique individuelle des
          personnes, à l'exclusion de toute pratique sportive collective et de toute proximité avec
          d'autres personnes, soit à la promenade avec les seules personnes regroupées dans un
          même domicile, soit aux besoins des animaux de compagnie.
        </td>
      </tr>
      <tr>
        <td>
          <img v-if="isReasonEnabled(7)" src="checked.png" alt="checked box">
          <img v-else src="unchecked.png" alt="unchecked box">
        </td>
        <td>
          Convocation judiciaire ou administrative et pour se rendre dans un service public
        </td>
      </tr>
      <tr>
        <td>
          <img v-if="isReasonEnabled(8)" src="checked.png" alt="checked box">
          <img v-else src="unchecked.png" alt="unchecked box">
        </td>
        <td>
          Participation à des missions d'intérêt général sur demande de l'autorité administrative
        </td>
      </tr>
      <tr>
        <td>
          <img v-if="isReasonEnabled(9)" src="checked.png" alt="checked box">
          <img v-else src="unchecked.png" alt="unchecked box">
        </td>
        <td>
          Déplacement pour chercher les enfants à l’école et à l’occasion de leurs activités
          périscolaires
        </td>
      </tr>
    </table>

    <div class="d-flex">
      <div style="flex: 4">
        <div>
          Fait à : {{ GET.city }}
        </div>

        <div class="d-flex">
          <div style="flex: 1">
            Le : {{ getDateMinutesBeforeMounted(12).toLocaleDateString() }}
          </div>
          <div style="flex: 1">
            à : <span style="width: .7em; display: inline-block">&nbsp;</span> {{ getMinutesBeforeMounted(12) }}
          </div>
        </div>

        <div>
          (Date et heure de début de sortie à mentionner obligatoirement)
        </div>

        <div style="flex: 1">
          Signature: <img style="max-height: 5em" :src="GET.signature" alt="signature"/>
          Date de sortie: Le {{ getDateMinutesBeforeMounted().toLocaleString().slice(0, -3) }}
        </div>
      </div>

      <div>
        <QuickQrCodeWrapper imgstyle="height: 10em" :text="getQRCodeText"></QuickQrCodeWrapper>
      </div>
    </div>

    <div style="font-size: small">
      <div>
        <span style="display: inline-block; width: 3em">1</span> Les personnes souhaitant bénéficier de l'une de ces
        exceptions doivent se munir s'il y a lieu, lors de leurs
        déplacements hors de leur domicile, d'un document leur permettant de justifier que le déplacement considéré
        entre dans le champ de l'une de ces exceptions
      </div>

      <div>
        <span style="display: inline-block; width: 3em">2</span> A utiliser par les travailleurs non-salariés,
        lorsqu'ils ne peuvent disposer d'un justificatif de déplacement établi par leur
        employeur.
      </div>

      <div>
        <span style="display: inline-block; width: 3em">3</span> Y compris les acquisitions à titre gratuit
        (distribution de denrées alimentaires...) et les déplacements liés à la perception de prestations sociales et au
        retrait d'espèces.
      </div>
    </div>

    <div>
      <QuickQrCodeWrapper :text="getQRCodeText"></QuickQrCodeWrapper>
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
    })
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
        'achats',
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
      mountedDate: null
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  margin: 30px auto;
}

.center {
  text-align: center;
}

.d-flex {
  display: flex;
}

table tr {
  margin-bottom: 1em;
}

table td:first-child {
  width: 60px;
  text-align: center;
  vertical-align: top;
}

table td:last-child {
  padding-bottom: 10px;
}

table td img {
  width: 50%;
  float: left;
}

table {
  text-align: justify;
}

#app > div, .spacedtoo > div {
  margin: 1em auto;
}
</style>