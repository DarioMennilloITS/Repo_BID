const Ajv = require('ajv')
const addFormats = require('ajv-formats');

console.log("Prima Prova con AJV");

const ajv = new Ajv({allErrors: true});
addFormats(ajv);

//creo lo schemaJSON per qualche oggetto
const schemaCalciatore = {
    type: 'object',
    properties: {
        nome: {type: 'string', minLength: 2, maxLength: 40},
        cognome: {type: 'string', minLength: 2, maxLength: 40},
        eta: {type: 'integer', minimum: 18, maximum: 120},
        squadre: {type: 'array'},
        nazione: {type: 'string', minLength: 2, maxLength:40},
        ruolo: {type: 'string', enum: ["at", "cc", "df", "pt"]},
        email: {type: 'string', format: 'email'}
    },
    required: ['nome', 'cognome', 'eta', 'ruolo'],
    additionalProperties: false
}

const validaCalciatore = ajv.compile(schemaCalciatore); //questo produce un boolean

let calciatore = {
    nome: "Laura",
    cognome: "Rossi",
    eta: 19,
    squadre: ["Napoli", "Roma", "Juve"],
    nazione: "ITA",
    ruolo: "cc",
    email: "laura@mail.com"
}

if(!validaCalciatore(calciatore)){
    console.log("Dati non validi");
    validaCalciatore.errors.forEach(errore => {
        console.log(errore);
    });
    
}else{
    
    console.log("Dati tutti validi");
}