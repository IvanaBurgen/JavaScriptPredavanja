function napuniBody() {
  document.body.innerHTML += "<hr><p>Dobar dan svima</p>";
  console.log(x);
  //pozivanje funkcije
  console.log(z);
  console.log(mojaDugaRecenica);
}

let email;

function pozdravi(e) {
  e.preventDefault();
  let ime = document.getElementById("fname").value;
  let email = document.getElementById("email").value;
  document.getElementById(
    "pozdrav"

    //<pre> znači preformatiran
  ).innerHTML = `Pozdrav <pre>   ${ime}</pre>. Hvala ti na upitu. Odgovorit ćemo ti uskoro na email ${email}`;
}

function zamijeni(e, nacin) {
  e.preventDefault();
  let replacedString;
  let originalnaRecenica = document.getAnimations("originalnaRecenica").value;
  let searchTerm = document.getElementById("replaceTerm").value;
  if (nacin === "pjeske") {
    let originalnaRecenica =
      document.getElementById("originalnaRecenica").value;
    let searchTerm = document.getElementById("searchTerm").value;
    let replaceTerm = document.getElementById("replaceTerm").value;
    let indexStart = originalnaRecenica.indexOf(searchTerm);
    let originalLength = searchTerm.length;
    let replacedString =
      originalnaRecenica.substring(0, indexStart) +
      replaceTerm +
      originalnaRecenica.substring(indexStart + searchTerm.length);
  } else {
    replacedString = document
      .getElementById("originalnaRecenica")
      .value.replace(
        document.getElementById("searchTerm").value,
        document.getElementById("replaceTerm").value
      );
  }
  document.getElementById("zamijenjen").innerHTML = replacedString;
}

//uzimamo staru vrijednost varijable x i pridodajemo joj novu +=

var x = "Ovo je vrlo dugi string";
x += " koji je u dva reda";
x += " jer se inače ne može čitati.";

let z = 5;
z += 8; //13
z = z + 8; //21;

let mojaDugaRecenica = `lkfgkgfkgflkgf fgkgfdklgfkmlgf \n člhfktfhklčtzhk kfthkčlfhklčhzklč`;

//svaki objekt ima property i metodu
//metoda se poziva sa zagradom, a property se samo stavi . pa property
//neke metode mijenjaju originalni string, a neke ne
