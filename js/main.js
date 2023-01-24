


// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

const journey = prompt("quanti chilometri devi percorrere?")

const age = prompt("quanti hanni hai?")


// Il prezzo del biglietto è definito in base ai km(0.21 € al km).
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

const ticketPrice = (journey * 0.21);
// console.log(ticketPrice);


// Va applicato uno sconto del 20 % per i minorenni.

const discountA = ((ticketPrice * 20) / 100) 
const discountB = ((ticketPrice * 40) / 100)

if(age < 18){
    const discountA = ((ticketPrice * 20) / 100 ) 
    const ticketA = `Il tuo biglietto costerà ${ticketPrice - discountA}€`;
    document.getElementById( 'ticketA' ).innerHTML = ticketA;
    // console.log(discountA);
    
}

// Va applicato uno sconto del 40 % per gli over 65.
else if(age > 65){
    const discountB = ((ticketPrice * 40) / 100)
    const ticketB = `Il tuo biglietto costerà ${ticketPrice - discountB}€`;
    document.getElementById('ticketB').innerHTML = ticketB;
  
}
else{
    const ticketPrice = (journey * 0.21);
    const ticketC = `Il tuo biglietto costerà ${ticketPrice}€`;
    document.getElementById('ticketC').innerHTML = ticketC;
}


// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.







