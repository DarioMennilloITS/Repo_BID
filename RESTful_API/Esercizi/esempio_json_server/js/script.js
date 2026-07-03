let studente = {
    id: 6,
    nome: "Anna Verdi",
    corso: "WSA"
}
function salvaStudente(){

    fetch("http://localhost:3000/studenti",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(studente)
    })
    .then(data => {return data.json()})
    .then(response=>{
        console.log(response);
    })
}


document.querySelector("#btn").addEventListener("click", function(){
    event.preventDefault();
    salvaStudente();

});