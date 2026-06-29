function changeLang(langue) {
  localStorage.setItem("lang", langue);

  // les fichiers .json ont été générés avec IA (notamment traductions en anglais des contenus français), ainsi que leurs clés (id) dans les fichiers .html correspondants
  const page = document.body.dataset.page || "index";
  fetch("lang/" + langue + "/" + page + ".json").then(function (response) {
    response.json().then(function (data) {
      Object.keys(data).forEach((cle) => {
        const el = document.querySelector("#" + cle);
        if (el) el.innerHTML = data[cle];
      });
      document.documentElement.lang = langue;
    });
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.remove("active");
    btn.setAttribute("aria-pressed", "false"); // ligne rajoutée avec IA
  });

  document.querySelector("#btn-" + langue).classList.add("active");
  document.querySelector("#btn-" + langue).setAttribute("aria-pressed", "true"); // ligne rajoutée avec IA
}

const savedLang = localStorage.getItem("lang");
if (savedLang && savedLang !== "fr") {
  changeLang(savedLang);
}
