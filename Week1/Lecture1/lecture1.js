var number=12;//assigning 
var char="l";//string

//char is not js datatype

// numbers there are no integer/float/double

// do{
//     action;
// }while(condition is not reached );
// while(condition is true){
//     action;
// }

// const multiply=function (n){
//     return n*n;
// }
// console.log(multiply(4));
// // with name 
// const factorial=function fac(n){
//     // break point 
//     return n*fac(n-1);//reccurence 
// }
// factorial(4): 1*2*3*4
// console.log(factorial(4));


//Chamllenge:
//Input: n=4
//Output: 0-1-2-3

// do {
// action;
// }while (condition)
//while(condition){
// action;
// }
var i=0;
do{
    // console.log(`${i}-`);
    process.stdout.write(i+"-"); 
    i++;
}
while(i<4);
// var n=0;
const incrementation=function(limit){
    let n=0;
    do{
        n==(limit-1)?console.log(n+""):process.stdout.write(n+"-"); 
        n++;
    }while(n<limit)
}
var n=0;
// let n=0
incrementation(6);



