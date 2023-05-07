/*
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
Examples

"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"

    don't worry about uppercase vowels
    y is not considered a vowel for this kata
*/





// My function (done without regex)

function shortcut (string) {
	splitted = string.split('');
	newaray = []
	for (let i = 0; i < splitted.length; i++) {
		//console.log(splitted[i])
		if (splitted[i] == 'a') {
			null
		} else if (splitted[i] == 'e') {
			null
		} else if (splitted[i] == 'i') {
			null
		} else if (splitted[i] == 'o') {
			null
		} else if (splitted[i] == 'u') {
			null
		} else {
			//append to newaray
			newaray.push(splitted[i])
			//console.log(newaray)
		}
	}
	return newaray.join('')
}

shortcut("hellohello")





// Top result form codeways( which uses regex)

/*
function shortcut(string){
  return string.replace(/[aeiou]/g,'')
}
*/


// Other interesting top result that doesnt appear to use regex
/*
function shortcut(str) {
  return str.split('').filter(function(e) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1 
  }).join('')
}
*/
