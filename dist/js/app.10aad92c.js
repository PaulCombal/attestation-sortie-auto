(function(e){function t(t){for(var a,r,o=t[0],c=t[1],l=t[2],u=0,p=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},s={app:0},i=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/attestation-sortie-auto/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"46d3":function(e,t,n){"use strict";n("c043")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),n("div",{staticClass:"center"},[e._v(" En application du décret n°2020-1310 du 29 octobre 2020 prescrivant les mesures générales nécessaires pour faire face à l'épidémie de Covid19 dans le cadre de l'état d'urgence sanitaire ")]),n("div",[e._v(" Je soussigné(e), ")]),n("div",[e._v("Mme/M. : "+e._s(e.GET.firstname)+" "+e._s(e.GET.lastname))]),n("div",{staticClass:"d-flex"},[n("div",{staticStyle:{flex:"1"}},[e._v(" Né(e) le : "+e._s(new Date(e.GET.birthdate).toLocaleDateString())+" ")]),n("div",{staticStyle:{flex:"1"}},[e._v(" à : "+e._s(e.GET.birthplace)+" ")])]),n("div",[e._v(" Demeurant : "+e._s(e.GET.address)+" "+e._s(e.GET.postcode)+" "+e._s(e.GET.city)+" ")]),e._m(1),n("table",[n("tr",[n("td",[e.isReasonEnabled(1)?n("img",{attrs:{src:"checked.png",alt:"checked box"}}):n("img",{attrs:{src:"unchecked.png",alt:"unchecked box"}})]),e._m(2)]),n("tr",[n("td",[e.isReasonEnabled(2)?n("img",{attrs:{src:"checked.png",alt:"checked box"}}):n("img",{attrs:{src:"unchecked.png",alt:"unchecked box"}})]),e._m(3)]),n("tr",[n("td",[e.isReasonEnabled(3)?n("img",{attrs:{src:"checked.png",alt:"checked box"}}):n("img",{attrs:{src:"unchecked.png",alt:"unchecked box"}})]),n("td",[e._v(" Consultations, examens et soins ne pouvant être assurés à distance et l’achat de médicaments. ")])]),n("tr",[n("td",[e.isReasonEnabled(4)?n("img",{attrs:{src:"checked.png",alt:"checked box"}}):n("img",{attrs:{src:"unchecked.png",alt:"unchecked box"}})]),n("td",[e._v(" Déplacements pour motif familial impérieux, pour l'assistance aux personnes vulnérables et précaires ou la garde d'enfants. ")])]),n("tr",[n("td",[e.isReasonEnabled(5)?n("img",{attrs:{src:"checked.png",alt:"checked box"}}):n("img",{attrs:{src:"unchecked.png",alt:"unchecked box"}})]),n("td",[e._v(" Déplacement des personnes en situation de handicap et leur accompagnant. ")])]),n("tr",[n("td",[e.isReasonEnabled(6)?n("img",{attrs:{src:"checked.png",alt:"checked box"}}):n("img",{attrs:{src:"unchecked.png",alt:"unchecked box"}})]),n("td",[e._v(" Déplacements brefs, dans la limite d'une heure quotidienne et dans un rayon maximal d'un kilomètre autour du domicile, liés soit à l'activité physique individuelle des personnes, à l'exclusion de toute pratique sportive collective et de toute proximité avec d'autres personnes, soit à la promenade avec les seules personnes regroupées dans un même domicile, soit aux besoins des animaux de compagnie. ")])]),n("tr",[n("td",[e.isReasonEnabled(7)?n("img",{attrs:{src:"checked.png",alt:"checked box"}}):n("img",{attrs:{src:"unchecked.png",alt:"unchecked box"}})]),n("td",[e._v(" Convocation judiciaire ou administrative et pour se rendre dans un service public ")])]),n("tr",[n("td",[e.isReasonEnabled(8)?n("img",{attrs:{src:"checked.png",alt:"checked box"}}):n("img",{attrs:{src:"unchecked.png",alt:"unchecked box"}})]),n("td",[e._v(" Participation à des missions d'intérêt général sur demande de l'autorité administrative ")])]),n("tr",[n("td",[e.isReasonEnabled(9)?n("img",{attrs:{src:"checked.png",alt:"checked box"}}):n("img",{attrs:{src:"unchecked.png",alt:"unchecked box"}})]),n("td",[e._v(" Déplacement pour chercher les enfants à l’école et à l’occasion de leurs activités périscolaires ")])])]),n("div",{staticClass:"d-flex"},[n("div",{staticStyle:{flex:"4"}},[n("div",[e._v(" Fait à : "+e._s(e.GET.city)+" ")]),n("div",{staticClass:"d-flex"},[n("div",{staticStyle:{flex:"1"}},[e._v(" Le : "+e._s(e.getDateMinutesBeforeMounted(12).toLocaleDateString())+" ")]),n("div",{staticStyle:{flex:"1"}},[e._v(" à : "),n("span",{staticStyle:{width:".7em",display:"inline-block"}}),e._v(" "+e._s(e.getMinutesBeforeMounted(12))+" ")])]),n("div",[e._v(" (Date et heure de début de sortie à mentionner obligatoirement) ")]),n("div",{staticStyle:{flex:"1"}},[e._v(" Signature: "),n("img",{staticStyle:{"max-height":"5em"},attrs:{src:e.GET.signature,alt:"signature"}}),e._v(" Date de sortie: Le "+e._s(e.getDateMinutesBeforeMounted().toLocaleString().slice(0,-3))+" ")])]),n("div",[n("QuickQrCodeWrapper",{attrs:{imgstyle:"height: 10em",text:e.getQRCodeText}})],1)]),e._m(4),n("div",[n("QuickQrCodeWrapper",{attrs:{text:e.getQRCodeText}})],1)])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"center"},[n("h2",{staticStyle:{"font-family":"auto"}},[e._v("ATTESTATION DE DÉPLACEMENT DÉROGATOIRE")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" certifie que mon déplacement est lié au motif suivant (cocher la case) autorisé par le décret n°2020-1310 du 29 octobre 2020 prescrivant les mesures générales nécessaires pour faire face à l'épidémie de Covid19 dans le cadre de l'état d'urgence sanitaire "),n("sup",[e._v("1")]),e._v(" : ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("td",[e._v(" Déplacements entre le domicile et le lieu d’exercice de l’activité professionnelle ou un établissement d’enseignement ou de formation, déplacements professionnels ne pouvant être différés"),n("sup",[e._v("2")]),e._v(", déplacements pour un concours ou un examen. ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("td",[e._v(" Déplacements pour effectuer des achats de fournitures nécessaires à l'activité professionnelle, des achats de première nécessité"),n("sup",[e._v("3")]),e._v(" dans des établissements dont les activités demeurent autorisées, le retrait de commande et les livraisons à domicile. ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"font-size":"small"}},[n("div",[n("span",{staticStyle:{display:"inline-block",width:"3em"}},[e._v("1")]),e._v(" Les personnes souhaitant bénéficier de l'une de ces exceptions doivent se munir s'il y a lieu, lors de leurs déplacements hors de leur domicile, d'un document leur permettant de justifier que le déplacement considéré entre dans le champ de l'une de ces exceptions ")]),n("div",[n("span",{staticStyle:{display:"inline-block",width:"3em"}},[e._v("2")]),e._v(" A utiliser par les travailleurs non-salariés, lorsqu'ils ne peuvent disposer d'un justificatif de déplacement établi par leur employeur. ")]),n("div",[n("span",{staticStyle:{display:"inline-block",width:"3em"}},[e._v("3")]),e._v(" Y compris les acquisitions à titre gratuit (distribution de denrées alimentaires...) et les déplacements liés à la perception de prestations sociales et au retrait d'espèces. ")])])}],r=(n("99af"),n("4de4"),n("4160"),n("a15b"),n("13d5"),n("fb6a"),n("b64b"),n("ac1f"),n("841c"),n("1276"),n("159b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("img",{style:e.imgstyle,attrs:{alt:"QR code",src:e.tmp}})}),o=[],c=n("d055"),l=n.n(c),d={name:"QuickQrCodeWrapper",props:{text:String,imgstyle:String},data:function(){return{tmp:""}},watch:{text:function(){var e=this;l.a.toDataURL(this.$props.text).then((function(t){return e.tmp=t}))}}},u=d,p=n("2877"),m=Object(p["a"])(u,r,o,!1,null,"6a3e99ba",null),v=m.exports,f={name:"AttestationPage",components:{QuickQrCodeWrapper:v},mounted:function(){var e=this;this.mountedDate=new Date,this.GET=window.location.search.slice(1).split("&").reduce((function(e,t){return t=t.split("="),e[t[0]]=decodeURIComponent(t[1]),e}),{}),Object.keys(this.GET).filter((function(e){return"signature"!==e})).forEach((function(t){e.GET[t]=e.GET[t].split("+").join(" ")}))},methods:{isReasonEnabled:function(e){return"on"===this.GET["reason"+e]},getMinutesBeforeMounted:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return this.getDateMinutesBeforeMounted(e).toLocaleTimeString().slice(0,-3)},getDateMinutesBeforeMounted:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return new Date(this.mountedDate-1e3*e*60)}},computed:{getQRCodeText:function(){return"Cree le: ".concat(this.getDateMinutesBeforeMounted(12).toLocaleDateString()," a ").concat(this.getDateMinutesBeforeMounted(12).getHours(),"h").concat(this.getDateMinutesBeforeMounted(12).getMinutes(),";\n Nom: ").concat(this.GET.lastname,";\n Prenom: ").concat(this.GET.firstname,";\n Naissance: ").concat(new Date(this.GET.birthdate).toLocaleDateString()," a ").concat(this.GET.birthplace,";\n Adresse: ").concat(this.GET.address," ").concat(this.GET.postcode," ").concat(this.GET.city,";\n Sortie: ").concat(this.getDateMinutesBeforeMounted().toLocaleDateString()," a ").concat(this.getDateMinutesBeforeMounted().getHours(),":").concat(this.getDateMinutesBeforeMounted().getMinutes(),";\n Motifs: ").concat(this.getMotives)},getMotives:function(){for(var e=["travail","achats","sante","famille","handicap","sport_animaux","convocation","missions","enfants"],t=[],n=0;n<e.length;n++)"on"===this.GET["reason"+(n+1)]&&t.push(e[n]);return t.join(", ")}},data:function(){return{GET:{},mountedDate:null}}},h=f,_=(n("46d3"),Object(p["a"])(h,s,i,!1,null,"f7087710",null)),g=_.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{attrs:{action:"/attestation",method:"GET"}},[n("div",{staticClass:"titre-2"},[e._v(" Remplissez en ligne votre déclaration numérique : ")]),n("div",[e._v(" Tous les champs sont obligatoires. ")]),e._m(0),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5),e._m(6),n("div",[n("label",[e._v("Fichier de signature")]),n("input",{attrs:{type:"file"},on:{change:e.updateSignature}}),n("input",{attrs:{type:"hidden",name:"signature"},domProps:{value:e.base64sig}})]),n("div",{staticClass:"titre-3"},[e._v(" Choisissez un motif de déplacement ")]),e._m(7),e._m(8),e._m(9)])},x=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",[e._v("Prénom")]),n("input",{attrs:{name:"firstname"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",[e._v("Nom")]),n("input",{attrs:{name:"lastname"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",[e._v("Date de naissance")]),n("input",{attrs:{type:"date",name:"birthdate"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",[e._v("Lieu de naissance")]),n("input",{attrs:{name:"birthplace"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",[e._v("Adresse")]),n("input",{attrs:{name:"address"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",[e._v("Ville")]),n("input",{attrs:{name:"city"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",[e._v("Code postal")]),n("input",{attrs:{name:"postcode"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" certifie que mon déplacement est lié au motif suivant (cocher la case) autorisé par le décret n°2020-1310 du 29 octobre 2020 prescrivant les mesures générales nécessaires pour faire face à l'épidémie de Covid19 dans le cadre de l'état d'urgence sanitaire "),n("a",{attrs:{href:"https://media.interieur.gouv.fr/deplacement-covid-19/#footnote1"}},[e._v("[1]")]),e._v(" : ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"d-flex"},[n("input",{attrs:{id:"reason1",type:"checkbox",name:"reason1"}}),n("label",{attrs:{for:"reason1"}},[e._v(" Déplacements entre le domicile et le lieu d’exercice de l’activité professionnelle ou un établissement d’enseignement ou de formation, déplacements professionnels ne pouvant être différés "),n("a",{attrs:{href:"https://media.interieur.gouv.fr/deplacement-covid-19/#footnote2"}},[e._v("[2]")]),e._v(", déplacements pour un concours ou un examen. ")])]),n("div",{staticClass:"d-flex"},[n("input",{attrs:{id:"reason2",type:"checkbox",name:"reason2"}}),n("label",{attrs:{for:"reason1"}},[e._v(" Déplacements pour effectuer des achats de fournitures nécessaires à l'activité professionnelle, des achats de première nécessité "),n("a",{attrs:{href:"https://media.interieur.gouv.fr/deplacement-covid-19/#footnote3"}},[e._v("[3]")]),e._v(" dans des établissements dont les activités demeurent autorisées, le retrait de commande et les livraisons à domicile ; ")])]),n("div",{staticClass:"d-flex"},[n("input",{attrs:{id:"reason3",type:"checkbox",name:"reason3"}}),n("label",{attrs:{for:"reason3"}},[e._v(" Consultations, examens et soins ne pouvant être assurés à distance et l’achat de médicaments ; ")])]),n("div",{staticClass:"d-flex"},[n("input",{attrs:{id:"reason4",type:"checkbox",name:"reason4"}}),n("label",{attrs:{for:"reason4"}},[e._v(" Déplacements pour motif familial impérieux, pour l'assistance aux personnes vulnérables et précaires ou la garde d'enfants ; ")])]),n("div",{staticClass:"d-flex"},[n("input",{attrs:{id:"reason5",type:"checkbox",name:"reason5"}}),n("label",{attrs:{for:"reason5"}},[e._v(" Déplacement des personnes en situation de handicap et leur accompagnant ; ")])]),n("div",{staticClass:"d-flex"},[n("input",{attrs:{id:"reason6",type:"checkbox",name:"reason6"}}),n("label",{attrs:{for:"reason6"}},[e._v(" Déplacements brefs, dans la limite d'une heure quotidienne et dans un rayon maximal d'un kilomètre autour du domicile, liés soit à l'activité physique individuelle des personnes, à l'exclusion de toute pratique sportive collective et de toute proximité avec d'autres personnes, soit à la promenade avec les seules personnes regroupées dans un même domicile, soit aux besoins des animaux de compagnie ; ")])]),n("div",{staticClass:"d-flex"},[n("input",{attrs:{id:"reason7",type:"checkbox",name:"reason7"}}),n("label",{attrs:{for:"reason7"}},[e._v(" Convocation judiciaire ou administrative et pour se rendre dans un service public ; ")])]),n("div",{staticClass:"d-flex"},[n("input",{attrs:{id:"reason8",type:"checkbox",name:"reason8"}}),n("label",{attrs:{for:"reason8"}},[e._v(" Participation à des missions d'intérêt général sur demande de l'autorité administrative ; ")])]),n("div",{staticClass:"d-flex"},[n("input",{attrs:{id:"reason9",type:"checkbox",name:"reason9"}}),n("label",{attrs:{for:"reason9"}},[e._v(" Déplacement pour chercher les enfants à l’école et à l’occasion de leurs activités périscolaires ; ")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"text-align":"center","margin-top":"3rem"}},[n("button",{staticClass:"btn-attestation",attrs:{type:"submit"}},[e._v(" Générer mon attestation ")])])}],y=(n("d3b7"),{name:"FormPage",data:function(){return{base64sig:"",model:{firstname:"",lastname:"",birthdate:"",birthplace:"",address:"",city:"",postcode:"",reasons:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1}}}},methods:{updateSignature:function(e){var t=this,n=e.target.files[0],a=function(e){return new Promise((function(t,n){var a=new FileReader;a.readAsDataURL(e),a.onload=function(){return t(a.result)},a.onerror=function(e){return n(e)}}))};a(n).then((function(e){return t.base64sig=e}))}}}),k=y,E=(n("b933"),Object(p["a"])(k,b,x,!1,null,"806aa28e",null)),D=E.exports;a["a"].config.productionTip=!1;var C={"/":D,"/attestation":g};new a["a"]({data:{currentRoute:window.location.pathname},computed:{ViewComponent:function(){return C[this.currentRoute]||D}},render:function(e){return e(this.ViewComponent)}}).$mount("#app")},"5d44":function(e,t,n){},b933:function(e,t,n){"use strict";n("5d44")},c043:function(e,t,n){}});
//# sourceMappingURL=app.10aad92c.js.map