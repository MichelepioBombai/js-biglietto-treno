// Va applicato uno sconto del 40 % per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.



// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

const journey = prompt("quanti chilometri devi percorrere?")

const age = prompt("quanti hanni hai?")


// Il prezzo del biglietto è definito in base ai km(0.21 € al km).
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

const ticketPrice = (journey * 0.21);
// console.log(ticketPrice);


// Va applicato uno sconto del 20 % per i minorenni.

if(age < 18){
    const discount = (ticketPrice / 100) 


}

console.log(discount);










// let myRandomNumber = Math.floor(Math.random() * 100) +1;
// console.log(myRandomNumber);