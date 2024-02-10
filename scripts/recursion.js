function recursion(n){
    if(n==0){
        return;
    }
    console.log('Func',n)
    recursion(n-1)
    console.log('Funcy',n)
}
console.log('11',recursion(10));