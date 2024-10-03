// function loadMessage() {
//     setTimeout( () => {
//         console.log('Hello Chandu') ;
//     } , 5000 )
// }


// // no 2
// function greetingDelay(name, delay) {
// setTimeout( () => {
//     console.log('Hello ' , name) ;
// } , delay )
// }
// // greetingDelay('Anny',5000)


// // no 3
// function tellJokes() {
//     console.log('bla bla bla....') ;
// }

// // const jokeInterval = setInterval(() => tellJokes() , 2000);

// setTimeout( () => {
//     clearInterval(jokeInterval) ;
// } , 10000 )



// no 4 
const fetchAsync = async () => {
let res = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
let data = await res.json() ;
console.log(data.joke) ;
} ;
fetchAsync() ;
