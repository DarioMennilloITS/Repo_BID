const URL = "https://api.open-meteo.com/v1/forecast?latitude=45.0705&longitude=7.6868&hourly=temperature_2m,rain,surface_temperature";

fetch(URL)
.then(data => {
    return data.json() ;
}).then(response =>{
    console.log(response);
    let lat = response.latitude;
    let lon = response.longitude;
    console.log(lat, lon);
});


//Nel trasformare un JSON ad oggetto posso trasformare dei dati parzialmente
//REVIVER
let meteoTorinoJSON = '{"lat": 45.08, "lon": 7.68, "ore12": 32.5, "ore13": 33, "ore14": 33, "ore15": 33.5, "ore16": 33}';

const dati = JSON.parse(meteoTorinoJSON, (chiave, valore) =>{
    if(chiave == "ore12" || chiave == "ore14" || chiave == "ore16" ){
        //in questo caso posso anche modificare puntulamente un dato
        return "";
    }
    return valore;
});

console.log(dati);

let utenteJSON = '{"nome": "Mario Rossi", "iscritto": "2026-07-03T10:41:00.000Z"}';

const datiOBJ = JSON.parse(utenteJSON, (chiave, valore) => {
    if(chiave == "iscritto"){
        return new Date(valore);
    }
    return valore;
})

console.log(datiOBJ.iscritto);


//Altro esempio ma con il metodo toJSON()
class Studente{
    constructor(nome, cognome, pass, email){
        this.nome = nome;
        this.cognome = cognome;
        this.pass = pass;
        this.email = email;
    }
    //Questo metodo sotto controllerà cosa viene serializzato - voglio escludere la password. Questo metodo verrà automaticamente richiamato dall'interfaccia JSON
    toJSON(){
        return {nome: this.nome, cognome: this.cognome, email: this.email};
    }
}

const stud = new Studente("Maria", "Gialli", "passnascosta", "maria@mail.com");

console.log( JSON.stringify(stud) );



