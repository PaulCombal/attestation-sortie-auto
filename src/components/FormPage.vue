<template>
  <form :action="getActionPage()" method="GET">
    <div class="titre-2">
      Remplissez en ligne votre déclaration numérique :
    </div>

    <div>
      Tous les champs sont obligatoires.
    </div>

    <div>
      <label>Prénom</label>
      <input name="firstname"/>
    </div>

    <div>
      <label>Nom</label>
      <input name="lastname"/>
    </div>

    <div>
      <label>Date de naissance</label>
      <input type="date" name="birthdate"/>
    </div>

    <div>
      <label>Lieu de naissance</label>
      <input name="birthplace"/>
    </div>

    <div>
      <label>Adresse</label>
      <input name="address"/>
    </div>

    <div>
      <label>Ville</label>
      <input name="city"/>
    </div>

    <div>
      <label>Code postal</label>
      <input name="postcode"/>
    </div>

    <div>
      <label>Fichier de signature (optionnel)</label>
      <input type="file" @change="updateSignature" accept="image/*"/>
      <input type="hidden" name="signature" :value="base64sig">
    </div>

    <div class="titre-3">
      Choisissez un motif de déplacement
    </div>

    <div>
      certifie que mon déplacement est lié au motif suivant (cocher la case) autorisé par le décret n°2020-1310 du 29
      octobre 2020 prescrivant les mesures générales nécessaires pour faire face à l'épidémie de Covid19 dans le cadre
      de l'état d'urgence sanitaire <a href="https://media.interieur.gouv.fr/deplacement-covid-19/#footnote1">[1]</a> :
    </div>

    <div>
      <div class="d-flex">
        <input id="reason1" type="checkbox" name="reason1"/>
        <label for="reason1">
          Déplacements entre le domicile et le lieu d’exercice de l’activité professionnelle ou un établissement
          d’enseignement ou de formation, déplacements professionnels ne pouvant être différés <a
            href="https://media.interieur.gouv.fr/deplacement-covid-19/#footnote2">[2]</a>, déplacements pour un
          concours ou un examen.
        </label>
      </div>

      <div class="d-flex">
        <input id="reason2" type="checkbox" name="reason2"/>
        <label for="reason2">
          Déplacements pour effectuer des achats de fournitures nécessaires à l'activité professionnelle, des achats de
          première nécessité <a href="https://media.interieur.gouv.fr/deplacement-covid-19/#footnote3">[3]</a> dans des
          établissements dont les activités demeurent autorisées, le retrait de commande
          et les livraisons à domicile ;

        </label>
      </div>

      <div class="d-flex">
        <input id="reason3" type="checkbox" name="reason3"/>
        <label for="reason3">
          Consultations, examens et soins ne pouvant être assurés à distance et l’achat de médicaments ;
        </label>
      </div>

      <div class="d-flex">
        <input id="reason4" type="checkbox" name="reason4"/>
        <label for="reason4">
          Déplacements pour motif familial impérieux, pour l'assistance aux personnes vulnérables et précaires ou la
          garde d'enfants ;

        </label>
      </div>

      <div class="d-flex">
        <input id="reason5" type="checkbox" name="reason5"/>
        <label for="reason5">
          Déplacement des personnes en situation de handicap et leur accompagnant ;
        </label>
      </div>

      <div class="d-flex">
        <input id="reason6" type="checkbox" name="reason6"/>
        <label for="reason6">
          Déplacements brefs, dans la limite d'une heure quotidienne et dans un rayon maximal d'un kilomètre autour du
          domicile, liés soit à l'activité physique individuelle des personnes, à l'exclusion de toute pratique sportive
          collective et de toute proximité avec d'autres personnes, soit à la promenade avec les seules personnes
          regroupées dans un même domicile, soit aux besoins des animaux de compagnie ;
        </label>
      </div>

      <div class="d-flex">
        <input id="reason7" type="checkbox" name="reason7"/>
        <label for="reason7">
          Convocation judiciaire ou administrative et pour se rendre dans un service public ;
        </label>
      </div>

      <div class="d-flex">
        <input id="reason8" type="checkbox" name="reason8"/>
        <label for="reason8">
          Participation à des missions d'intérêt général sur demande de l'autorité administrative ;
        </label>
      </div>

      <div class="d-flex">
        <input id="reason9" type="checkbox" name="reason9"/>
        <label for="reason9">
          Déplacement pour chercher les enfants à l’école et à l’occasion de leurs activités périscolaires ;
        </label>
      </div>
    </div>

    <div style="text-align: center; margin-top: 3rem">
      <button type="submit" class="btn-attestation">
        Générer mon attestation
      </button>
    </div>

    <div style="font-size: small; font-style: italic">
      Le propriétaire de cette page n'est pas responsable de votre utilisation de ce site.
      Il ne s'agit pas d'un site officiel du gouvernement français.
    </div>
  </form>
</template>

<script>
export default {
  name: "FormPage",
  data() {
    return {
      base64sig: '',
      model: {
        firstname: '',
        lastname: '',
        birthdate: '',
        birthplace: '',
        address: '',
        city: '',
        postcode: '',
        reasons: {
          1: false,
          2: false,
          3: false,
          4: false,
          5: false,
          6: false,
          7: false,
          8: false,
          9: false
        }
      }
    }
  },
  methods: {
    getActionPage() {
      const publicPath = process.env.NODE_ENV === 'production'
          ? '/attestation-sortie-auto/'
          : '/';

      return publicPath + 'attestation';
    },
    updateSignature(evt) {
      const file = evt.target.files[0];

      const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });

      toBase64(file).then(res => {
        if (res.length > 7710) {
          alert("Cette image est trop lourde. La taille recommandée maximale est de 200x90px. Vous pouvez continuer sans signature.");
          evt.target.type = "text";
          evt.target.type = "file";
        }
        this.base64sig = res;
      });
    }
  }
}
</script>

<style scoped>
form {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  max-width: 400px;
  margin: auto;
  line-height: 1.5;
}

form > div {
  margin-bottom: 1rem;
}

/* les inputs textes du haut */
form > div > label {
  margin-bottom: .5rem;
  width: 100%;
  display: inline-block;
}

/* les descs des cases a cocher */
form > div > div > label {
  color: #212529;
}

form > div > input {
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 2px;
  padding: .375rem .75rem;
  height: calc(1.2em + .75rem + 2px);
}

.titre-2 {
  text-align: left;
  font-size: 1.5rem;
  font-weight: 700;
  color: #000191;
}

.titre-3 {
  margin-bottom: .5rem;
  font-size: 1.5rem;
  padding-left: .5em;
}

.btn-attestation {
  padding: .9em;
  font-size: 1.2em;
  font-weight: 700;
  color: #fff;
  background-color: #000191;
  border-radius: .5em;
  border-color: #007bff;
}

.d-flex {
  display: flex;
}
</style>