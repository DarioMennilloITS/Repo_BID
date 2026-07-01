//Deserializzazione utilizzando il metodo PARSE()
//IL metodo parse() trasforma una stringa formato json in un oggetto a noi comprensibile

let docenteJSON = '{"id": 1, "nome": "Dario Mennillo", "corso": "BID", "presenza": true, "anniEsperienza": 10}';

console.log(docenteJSON);
console.log(typeof docenteJSON);

//Traduco questa string in un oggetto JAVASCRIPT
let docenteOBJ = JSON.parse(docenteJSON);
console.log(docenteOBJ);
console.log(docenteOBJ.nome);
console.log(docenteOBJ.presenza);

//________________________
//Posso optare per la costruzione di una classe in JS alla quale associare le prop del mio oggetto
class Studente{
    constructor(nome, cognome, corso, dataIscrizione){
        this.nome = nome;
        this.cognome = cognome;
        this.corso = corso;
        this.dataIscrizione = dataIscrizione;
    }

    presentati(){
        return `Ciao, mi chiamo ${this.nome} ${this.cognome} e sono iscritto al seguente corso ${this.corso}`;
    }
}

let studenteJSON = '{"nome": "Anna", "cognome": "Rossi", "corso": "BID", "dataIscrizione": "01/09/26"}';

let studenteOBJ = JSON.parse(studenteJSON);

let studente = new Studente(studenteOBJ.nome, studenteOBJ.cognome, studenteOBJ.corso, studenteOBJ.dataIscrizione);

console.log(studente.presentati());
console.log(studente.corso);

