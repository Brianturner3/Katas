function findUniq(arr){
    var hashMap = new Map();
    for(var i = 0; i < arr.length; i++) {
	if (hashMap.get(arr[i]) == null){
	    hashMap.set(arr[i],1);
	}
	else {
	    hashMap.set(arr[i], hashMap.get(arr[i])+1);
	}
    }
    var toReturn;
    hashMap.forEach((k,v) => {
	if(k === 1){
	    toReturn = v;
	}
    })
    return toReturn;
}

console.log(findUniq([0,1,0],1));
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ], 2));
