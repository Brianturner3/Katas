function toWeirdCase(string){
    return string.toLowerCase().split(' ').map((t,i) => {
       return t.split('').map((u,j) => {
        if((j%2)==0)
            return u.toUpperCase();
        return u;
       }).join('');
    }).toString().replace(/,/g,' ');
}

console.log(toWeirdCase('This is a test'));