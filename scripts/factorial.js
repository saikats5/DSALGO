// 5! -> 5*4*3*2*1 ->
// function factorialRecursion(num){
//     if(num === 0){
//         return 1;
//     }
//     return num*factorialRecursion(num-1);
// }
function factorial(num){
    let fact = 1;
    for(let i=1; i<=num; i++){
        fact = fact * i;
    }
    return fact;
}
//console.log('11',factorialRecursion(5));
console.log('22',factorial(5));