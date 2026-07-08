import { validaUser } from "./validator";

//Per adesso schianto dei dati a mano nella funzione. Questa stessa funzione raccoglierà i dati da un form
function raccogliDati(){

    let utenteRAW = {
        nome: "Pippo",
        cognome: "Rossi",
        email: "rossi@mail.com",
        eta: 30,
        ruolo: "admin"
    }

    return utenteRAW;
}

function valida(){
    const dati = raccogliDati();
    console.log(validaUser(dati));
}

valida()