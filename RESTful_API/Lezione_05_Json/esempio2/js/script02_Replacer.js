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
    if(key !== "id" || key !== "nome" || key !== "cognome"){
        return undefined;
    }else{
        return value;
    }
})

console.log(calciatoreJSON);
