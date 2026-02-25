let fr = {
  title: "Valérie Lapeyre",
  subtitle1: "UX Researcher",
  subtitle2: "En alternance chez Leetchi",
  sectiontitle1: "Présentation",
  sectiontitle2: "Réalisations",
};

let en = {
  title: "Valérie Lapeyre",
  subtitle1: "UX Researcher",
  subtitle2: "Apprentice at Leetchi",
  sectiontitle1: "Presentation",
  sectiontitle2: "Realisations",
};

let langue = fr;

Object.keys(langue).forEach((cle) => {
  document.querySelector("#" + cle).innerHTML = langue[cle];
});
