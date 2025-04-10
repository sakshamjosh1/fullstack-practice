function random(){

}

let p = new Promise(random);


function callback(){
    console.log('Promise succeeded');
}
p.then(callback);