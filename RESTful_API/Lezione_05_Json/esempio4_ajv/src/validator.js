//In questo file validator.js imposto il mio JSONschema che validerà gli oggetti
import Ajv from 'ajv';
import addFormats from 'ajv-formats';

const ajv = new Ajv({allErrors: false});
addFormats(ajv);

//comincio col definire lo schema del mio JSON
export const schemaUser = {
    type: 'object',
    properties: {
        nome: {type: 'string'}
    }
}