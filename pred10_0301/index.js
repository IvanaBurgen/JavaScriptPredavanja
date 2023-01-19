/*stvaranje objekata pomoću funkcija*/

function Dog() {
  this.hasSat = false;
}

Dog.prototype.bark = function () {
  return "Wuf Wuf";
};

Dog.prototype.doSit = function () {
  this.hasSat = true;
};

var dog1 = new Dog();
var dog2 = new Dog();

//stvaranje objekata pomocu Object.create prototipa

/** predstaviSe je metoda */

var Covjek = {
  ime: "",
  prezime: "",
  predstaviSe() {
    console.log(`Bok, ja sam ${this.ime} ${this.preizme}.`);
  },
};

var sime = Object.create(Covjek);
sime.ime = "sime";
sime.prezime = "prezime";
sime.predstaviSe();
var frane = Object.create(Covjek);
frane.predstaviSe();

//Klase po novoj EP6 sintaksi, ovo gore se zaboravlja, bitno je za znati

class Igra {
  igraci;
  constructor(igraci) {
    this.igraci = igraci;
  }
  igraj() {
    console.log(
      `Pobjednik je ${this.igraci(
        Math.floor(Math.random() * this.igraci.length)
      )}`
    );
  }
}

class Zmire extends Igra {
  lovac;
  constructor(igraci, lovac) {
    super(igraci);
    if (igraci.includes(lovac)) {
      this.lovac = lovac;
    } else {
      this.lovac = "Luka";
    }
  }
  /**ovo su metode */
  brojim() {
    console.log("10,9,8,7,6,5,4,3,2,1, polazim!");
  }
  spasi(igrac) {
    console.log(`Moj spas za ${igrac}`);
  }

  igraj() {
    this.brojim();
    this.igraci.forEach((element) => {
      if (element !== this.lovac) {
        this.spasi(element);
      }
    });
  }
}
