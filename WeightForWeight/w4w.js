function orderWeight(strng) {
    
    let weighted = strng.split(' ').map((x) => {
	let tmp = x.replace(/\D/g,'').toString().split('').reduce( (s,c) =>{
	    return parseInt(s)+ parseInt(c);
	},0)
	return tmp;
    });

    let aryPosition = weighted.map((x,i) => {
	return i;
    });
    console.log(aryPosition);
    
    
}
console.log(orderWeight("103 _123 4444 99 2000"));
