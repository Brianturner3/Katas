

//Org.
function towerBuilder(nFloors) {
    // 2^nFloors + 1. start from the bottom and reverse the array. Use string.repeat()
    var toReturn = [];
    var level = nFloors;
    while(level > 0){
        if(level != 0){
          console.log('*'.repeat((level*2)-1));
          toReturn.push('*'.repeat((level*2)-1));
        }
        else
            toReturn.push('*')
        level --;
   }
  
   return toReturn.reverse().map((x,i,y) => {
    return ' '.repeat((y.length-1)-i) + x + ' '.repeat((y.length-1)-i);
   });
}

// Updated
function towerBuilder(nFloors) {
    var toReturn = [];
    var level = nFloors;
    while(level > 0){
        (level != 0) ? toReturn.push('*'.repeat((level*2)-1)) : toReturn.push('*');
        level --;
   }
  
   return toReturn.reverse().map((x,i,y) => {
    return ' '.repeat((y.length-1)-i) + x + ' '.repeat((y.length-1)-i);
   });
}

//Refactored
function towerBuilder(nFloors) {
    var toReturn = [], level = nFloors;
    while(level > 0){
        (level != 0) ? toReturn.unshift('*'.repeat((level*2)-1)) : toReturn.unshift('*');
        level --;
   }
   return toReturn.map((x,i) => ' '.repeat((nFloors-1)-i) + x + ' '.repeat((nFloors-1)-i));
}

/*
Interesting Solution
1.
function towerBuilder(n) {
  return Array.from({length: n}, function(v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}

2.
function towerBuilder(n) {
  return [...Array(n)].map((_,i)=>" ".repeat(n-1-i)+"*".repeat(i*2+1)+" ".repeat(n-1-i))
}
*/