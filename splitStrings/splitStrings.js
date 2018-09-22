function solution(str){
    //Attempt 1
    /*
    var sol = function(input){
        return input.split('').map( (x,i,t) => {
            return (i % 2 != 0 && i != 0) ? t[i-1] + t[i] : ''; 
        }).filter((t) => t != '');
    };

    return (str.length % 2 != 0) ? sol(str+'_') : sol(str) ;
    */

    //Attempt 2
    // replace the map with a filter/reduce
}

console.log(solution('abc'));
console.log(solution('abcdef'));
