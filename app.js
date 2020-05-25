const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarArchivo(argv.base, argv.limite).then(mensaje => {
            console.log(mensaje);
        }).catch(err => {
            console.log(err);
        })
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(mensaje => { console.log(`Archivo creado: ${mensaje}`.green); })
            .catch(e => { console.log(e); });

        break;
    default:
        console.log('La opcion no existe');
        break;
}

//let argv2 = process.argv;
//console.log(argv.base);
//console.log(argv.limite);

//let parametro = argv[2];
//let base = parametro.split('=')[1];