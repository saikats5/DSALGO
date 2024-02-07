// 0 1 1 2 3 5 8 13 21
function fibonacci(num){
    let fibo = [0,1];
    for(let i=2;i<=num;i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
console.log('11',fibonacci(5));
console.log('22',fibonacci(10));
console.log('33',fibonacci(15));

function fiboNumer(num){
    if(num<2){
        return num;
    }
    let prev=0, curr=1, next=0;
    for(let i=2;i<=num;i++){
        next = prev + curr;
        prev = curr;
        curr = next;
    }
    return next;
}
console.log('44',fiboNumer(5));
console.log('55',fiboNumer(11));
console.log('66',fiboNumer(14));
