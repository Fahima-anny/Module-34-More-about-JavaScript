const myLoader = () => {
    return new Promise ((resolve,reject) =>{
let success = Math.random() ;
if(success <= 0.5){
    resolve(success) 
}
else{
    reject(success)
}
    }
    )
    }


    myLoader()
    .then( data => console.log('resolved with - ', data) )
    .catch(err => console.log('rejected with - ',err ))
