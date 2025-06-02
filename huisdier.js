function Huisdier(dier, naam, leeftijd){
this.dier =  dier, 
this.naam = naam, 
this.leeftijd = leeftijd,
this.print = function print(){
    return `mijn ${dier} ${naam} is ${leeftijd} jaar oud`
}
}

module.exports = {Huisdier}