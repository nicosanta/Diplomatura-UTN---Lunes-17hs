let metros = prompt ('ingresa cantidad de metros');
let transporte;

if (metros>=0 && metros<=1000) {
    transporte = 'pie';
} else if (metros>=1001 && metros<=10000){
    transporte = 'bicicleta';
} else if (metros>=10001 && metros<=30000) {
    transporte = 'colectivo';
} else if (metros>=30001 && metros<=100000) {
    transporte = 'auto';
} else if (metros>=100000) {
    transporte = 'avion';
}

document.write('Para la cantidad de ' + metros + ' metros, recomendamos viajar en ' + transporte);