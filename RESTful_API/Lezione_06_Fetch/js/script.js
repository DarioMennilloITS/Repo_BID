const URLEndpoint = "http://localhost:3000/users";

function recuperaUtenti(corso){

    let utenti = []
    //Programmazione Asincrona
    fetch(URLEndpoint,{
        method: "GET"
    })
    .then(response => {
        console.log(response);
        console.log(response.status);
        
        if(response.status == 404){
            location.href = "./dataNotFound.html";
        }
        return response.json(); //Questo metodo .json() a suoa volta restituisce una promise
    })
    .then(studentiBID => {return studentiBID.filter(s => s.corso === corso)})
    .then(filtrati => console.log(filtrati)
    )

    console.log("Questi sono i miei utenti", utenti);
    
}

// window.addEventListener("DOMContentLoaded", recuperaUtenti);

document.querySelector("#btn").addEventListener("click", function(){
    let corso = "BID";
    recuperaUtenti(corso);
})

/**
 * @param {Object} studente 
 */
function aggiungiStudente(studente){
    fetch(URLEndpoint, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(studente)
    })
    .then(response => console.log(response))
}

document.querySelector("#btnAdd").addEventListener("click", function(){
    let studente = {
        id: 6,
        nome: "Laura",
        cognome: "Bianchi",
        corso: "BID"
    }

    aggiungiStudente(studente);
})