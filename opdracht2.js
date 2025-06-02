// schrijf op 2 verschillende manieren een constructor voor onderstaande object

const factuur = {
    id: 1,
    klant: "Jos Joskens",
    producten: [
        "appel", "peer", "banaan"
    ],
    betaald: false
}

function createFactuur(id, klant, producten, betaald){
    return {id: id, klant: klant, producten: producten, betaald: betaald}
}

const factuur1 = createFactuur(2, "Arnuts", ["frietjes", "pizza"], true)

console.log(factuur1);


function Factuur(id, klant, producten, betaald){
    this.id = id
    this.klant = klant
    this.producten = producten
    this.betaald = betaald
}

const factuur2 = new Factuur(2, "Arnuts", ["frietjes", "pizza"], true)
console.log(factuur2);
