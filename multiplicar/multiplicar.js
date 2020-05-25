const fs = require('fs');
const colors = require('colors');


let crearArchivo = (variable, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(variable)) {
            reject(console.log(`El valor ${variable} no es un numero`))
            return;
        }
        for (let i = 1; i <= limite; i++) {
            data += (`${variable} x ${i} = ${variable*i}\n`);
        }

        fs.writeFile(`tablas/tabla-de-${variable}-al-${limite}.txt`, data, (err) => {
            if (err) {
                reject(err)
                return;
            } else
                resolve(`tabla-de-${variable}-al-${limite}.txt`);
        });

    });
};


let listarArchivo = (variable, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(variable)) {
            reject(console.log(`El valor ${variable} no es un numero`))
            return;
        }
        console.log('========='.green);
        console.log(`Tabla del ${variable}`.green);
        console.log('========='.green);
        for (let i = 1; i <= limite; i++) {
            data += console.log(`${variable} x ${i} = ${variable*i}\n`);
        }

    });
}

module.exports = {
    crearArchivo,
    listarArchivo
};