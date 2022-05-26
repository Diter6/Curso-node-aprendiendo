


const colors = require('colors');
const { options } = require('yargs');
const {crearArchivo } = require('./helpers/multiplicar2');
const argv = require('./config/yargs');




console.clear();


crearArchivo(argv.t, argv.l, argv.h)
.then (nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'.rainbow))
.catch(err => console.log(err));
