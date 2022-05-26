const { describe } = require('yargs');



const argv = require('yargs')
.option('t', {
  alias: 'tabla',
  type: 'number',
  demandOption: true,
  describe: 'Numero de la tabla a realizar'  
})

.option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
     describe: 'Muestra o no la tabla' 
  })

  .option('h', {
    alias: 'hasta',
    type: 'number',
    demandOption: true,
     describe: 'Hasta que numero multiplicar' 
  })

.check((argv, options) => {
        if(isNaN(argv.t)) {
                throw 'Debes colocar un numero de tabla';
        }
        return true;
})

.check((argv, options) => {
    if(isNaN(argv.h)) {
            throw 'Debes colocar un numero para multiplicar la tabla';
    }
    return true;
})
.argv


module.exports = argv;