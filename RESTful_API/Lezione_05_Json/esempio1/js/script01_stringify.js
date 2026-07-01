let user = {
    nome: "Pippo Rossi",
    email: "pippo@mail.com",
    eta: 30,
    ruolo: "admin",
    piattaforma: {
        nome: "LinkedIn",
        iscrizione: 2025,
        nickName: "PippoRossiRossi"
    },

    presentati() {
        return `Ciao, mi chiamo ${this.nome} - Email: ${this.email}`;
    }
}

console.log(user.presentati());


//Serializzo l'oggetto trasformandolo in una string usando il metodo stringify()
let userJSON = JSON.stringify(user);

console.log(userJSON);
console.log(typeof userJSON);

//___________NOTAZIONE CON CLASSE________

class Admin{
    constructor(nome, nickName, dataIscrizione, piattaforma, password){
        this.nome = nome;
        this.nickName = nickName;
        this.dataIscrizione = dataIscrizione;
        this.piattaforma = piattaforma;
        this.password = password;
    }

    registraUtenti(nickNameUser, piattaforma){
        return `Hai appena registrato ${nickNameUser} sulla piattaforma ${piattaforma}`;
    }
}

let admin1 = new Admin("Laura Verdi", "LaVer", 2025, "Instagram", "abcdef");
console.log( admin1.registraUtenti("Dario", "Telegram") );
console.log(admin1);

//Serializzo
let admin1JSON = JSON.stringify(admin1);
console.log(admin1JSON);

//Filtrare un oggetto con un REPLACER. Mi permette di serializzare parzialmente l'oggetto, andando a sostituire o complemente omettere una proprietà

let admin1JSON_Replacer = JSON.stringify(admin1, ["nome", "nickName", "piattaforma"]);
console.log(admin1JSON_Replacer);

//Questo replacer può anche essere usato come funzione
let admin1JSON_Replacer2 = JSON.stringify(admin1, (key, value) =>{
    if(key == "password" || key == "dataIscrizione"){
        return undefined;
    }
    return value;
})

console.log(admin1JSON_Replacer2);




