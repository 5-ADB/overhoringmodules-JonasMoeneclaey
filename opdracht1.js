// Maak een objectmodel aan voor een leerling
// zorg ervoor dat de leerling in een klas kan zitten. 

const leerling = {
    naam: "Kleintjes",
    voornaam: "Karel",
    leeftijd: 12
}

function Klas(leerling){
    this.leerling = leerling
}

const klas = new Klas(leerling.voornaam)

console.log(klas);
