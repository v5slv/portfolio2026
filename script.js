function changeLang(langue) {
  fetch(langue + ".json").then(function (response) {
    response.json().then(function (data) {
      Object.keys(data).forEach((cle) => {
        document.querySelector("#" + cle).innerHTML = data[cle];
      });
    });
  });

  document.querySelectorAll(".lang").forEach((btn) => {
    btn.classList.remove("active");
  });

  document.querySelector("#btn-" + langue).classList.add("active");
}
