let numeros = [3,5,30,8,2];
let mayor = 0;

for (let i=0;i<numeros.length;i++) {
    if (numeros[i]>mayor)
    mayor = numeros[i];
}

document.write('el numero mas grande es ' + mayor);
