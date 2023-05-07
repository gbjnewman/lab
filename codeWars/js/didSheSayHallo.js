// https://www.codewars.com/kata/56a4addbfd4a55694100001f
// 
// Description:
// 
// You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?
// 
// Write a simple function to check if the string contains the word hallo in different languages.
// 
// These are the languages of the possible people you met the night before:
// 
//     hello - english
//     ciao - italian
//     salut - french
//     hallo - german
//     hola - spanish
//     ahoj - czech republic
//     czesc - polish
// 
// Notes
// 
//     you can assume the input is a string.
//     to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
//     function should be case insensitive to pass the tests

// My first working code

function validateHello(greetings) {
  greetUpper = greetings.toUpperCase()
  hellos = ["HELLO", "CIAO", "SALUT", "HALLO", "HOLA", "AHOJ", "CZESC"]
  for (i = 0; i < hellos.length; i++) {
    re = RegExp(hellos[i]).test(greetUpper)
    console.log(re)
    if (re === true) {
      return true
    }
  }
  return false
   
} 


// some one liners from the solutions page
//
// const validateHello = greetings => /h[ae]llo|ciao|salut|hola|ahoj|czesc/i.test(greetings);
//
// const validateHello = greetings => /hello|ciao|salut|hallo|hola|ahoj|czesc/gi.test(greetings);
