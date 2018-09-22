function findMissingLetter(array)
{ 
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';  
  if(array[0] != array[0].toUpperCase()){
  	alphabet = alphabet.toUpperCase();
  }
  let start = alphabet.indexOf(array[0]);
  let end = alphabet.indexOf(array[array.length-1]);
  return diff = alphabet.substring(start,end+1).split('').filter((x) => {
  		return !array.includes(x);
  }).toString();
}

//console.log(findMissingLetter(['a','b','c','d','f']));
console.log(findMissingLetter(['O','Q','R','S']));