//In questo file validator.js imposto il mio JSONschema che validerà gli oggetti
import Ajv from 'ajv';
import addFormats from 'ajv-formats';

const ajv = new Ajv({ allErrors: false });
addFormats(ajv);

//comincio col definire lo schema del mio JSON
export const schemaUser = {
    type: 'object',
    properties: {
        nome: { type: 'string', minLength: 2, maxLength: 30 },
        cognome: { type: 'string', minLength: 2, maxLength: 30 },
        email: { type: 'string', format: 'email' },
        eta: { type: 'integer', minimum: 18, maximum: 120 },
        ruolo: { type: 'string', enum: ['admin', 'base'] }
    },
    required: ['nome', 'cognome', 'ruolo'],
    additionalProperties: false
};

const validate = ajv.compile(schemaUser);

const messaggi = {
    minLength: "stringa troppo corta",
    maxLength: "stringa troppo lunga",
    format: "formato email non valido",
    minimum: "valore troppo basso",
    maximum: "valore troppo alto",
    type: "tipo non valido",
    enum: "valore non ammesso",
    required: "campo obbligatorio"
};


export function validaUser(dati) {
    const valido = validate(dati);

    if (valido) return { valido: true, errori: {} };

    const errori = {}
    validate.errors.forEach((err) => {
        const campo = err.instancePath.replace("/", "") || err.params.missingProperty;
        if (campo) {
            errori[campo] = messaggi[err.keyword] || err.message;
        }
    })

    // return { valido: false, errori: validate.errors }
    return { valido: false, errori}

}