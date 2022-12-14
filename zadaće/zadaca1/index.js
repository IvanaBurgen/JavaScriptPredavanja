function razbij(e) {
  e.preventDefault();
  let uneseniTekst = document.getElementById("uneseniTekst").value;
  let brRijeci = uneseniTekst
    .split(" ")
    .filter((rijec) => rijec !== " ").length;
  let znakovi = uneseniTekst.split("").filter(function (n) {
    return n !== "";
  }).length;

  console.log(uneseniTekst);
  console.log(brRijeci);
  console.log(znakovi);

  document.getElementById(
    "statistika"
  ).innerHTML = `Broj riječi u rečenici je: ${brRijeci}<br> Broj znakova bez praznina: ${znakovi}<br>`;
}
