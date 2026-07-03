//REPLACER, come filtrare serializzando
const calciatore = {
    id: 23,
    nome: "Marco Verdi",
    ruolo: "Centrocampista",
    eta: 21,
    golFatti: 12,
    falliSubiti: 68,
    kmPercorsi: 124,
    minutiGiocati: 1300,
    convocazioni: 1,
    iscizione: new Date('2026-05-02')
};

// let calciatoreJSON = JSON.stringify(calciatore);
// console.log(calciatoreJSON);

//Se volessi inviare parzialmente i dati posso utilizzare il Replacer.
//Molto utile per inviare, presso una API, solo risorse parziali

// let calciatoreJSON = JSON.stringify(calciatore, ["id", "nome", "cognome", "eta"]);
// console.log(calciatoreJSON);


//Posso sviluppare il replacer anche attraverso delle funzioni
let calciatoreJSON = JSON.stringify(calciatore, (key, value) => {
    const campiDaTenere = ["id", "nome", "ruolo"];

    if(key !== "" && !campiDaTenere.includes(key)){
        return undefined;
    }else{
        return value;
    }
})

console.log(calciatoreJSON);


//Esistono dei valori limite nella serializzazione
//Date
//Function
//BIGInt
//Nan e Infinity

//Esempio con BigInt

// let datoBigInt = JSON.stringify({valoreDato: 5128545100005254851n});
//per ovviare il problema posso passare alle string

let datoBigInt = JSON.stringify({valoreDato: 5128545100005254851n.toString()});
console.log(datoBigInt);

let valoriNanInfinity = JSON.stringify({valore1: NaN, valore2: Infinity});
console.log(valoriNanInfinity);

