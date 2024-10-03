 setTimeout( () => {
    console.log(3)
 } , 3000);

let num = 0 ;

let interval = setInterval( () => {
num++ ;
console.log(num)
if(num>=10){
    clearInterval(interval) ;
}
} , 1000 )



