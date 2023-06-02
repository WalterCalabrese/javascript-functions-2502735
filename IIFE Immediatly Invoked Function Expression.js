// in Javascript puoi assegnare variabili
// a una costante, queste variabili sono
// dette espressioni




/*la funzione seguente è una IIFE
 unìimmediatly called function expression
 cioè viene eseguita appena letta
 le parentesi tonde raggruppano la funzione 
 in un primo blocco,le seconde parentesi tonde
 costituiscono il secondo blocco*/


(function (a, b) {
  const $ = document.querySelector.bind(document)
  const c = a + b;
  $('#output').innerHTML = c
  console.log(c)
})(2, 2);
