var suma = 0
let contPar = 0
for(i = 0; i<=10000; i++){

    if((i % 2) === 0){
        suma += i;
        contPar++;
    }
    if(contPar === 11){
        break;
    }
    
}
console.log(suma);