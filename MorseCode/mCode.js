var alphabet = {  
   "-----":"0",
   ".----":"1",
   "..---":"2",
   "...--":"3",
   "....-":"4",
   ".....":"5",
   "-....":"6",
   "--...":"7",
   "---..":"8",
   "----.":"9",
   ".-":"A",
   "-...":"B",
   "-.-.":"C",
   "-..":"D",
   ".":"E",
   "..-.":"F",
   "--.":"G",
   "....":"H",
   "..":"I",
   ".---":"J",
   "-.-":"K",
   ".-..":"L",
   "--":"M",
   "-.":"N",
   "---":"O",
   ".--.":"P",
   "--.-":"Q",
   ".-.":"R",
   "...":"S",
   "-":"T",
   "..-":"U",
   "...-":"V",
   ".--":"W",
   "-..-":"X",
   "-.--":"Y",
   "--..":"Z",
   "/":" ",
   "-.-.--":"!",
   ".-.-.-":".",
   "--··--":",",
   "   ": " ",
   "...---...": "SOS"
};

var MORSE_CODE = new Map();
for(var a in alphabet) {
   MORSE_CODE.set(a,alphabet[a]);
}


decodeMorse = function(morseCode){
   return morseCode.trim().split('   ').map((x) => x.split(' ').map((y) => MORSE_CODE.get(y)).join('')).join(' ');
}

console.log(decodeMorse('...---...-.-.--'));
//console.log(decodeMorse('...---...-.-.--SOS! THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.');




