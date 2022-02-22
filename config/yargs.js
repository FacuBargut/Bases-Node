const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Es la base de la tabla de multiplicar'
            })
            .option('l', {
                alias: 'listar',
                type: 'boolean',
                default: false,
                describe: 'Muestra la tabla en consola'
            })
            .option('h', {
                alias: 'hasta',
                type: 'number',
                describe: 'Establece un limite para la tabla de multiplicar',
                demandOption: true,
                default: 10
            })
            .check( (argv, options) =>{
                if (isNaN(argv.b)) {
                    throw new Error("La base tiene que ser un número")
                  } if (isNaN(argv.h)) {
                    throw new Error("El hasta debe ser un número")
                  } else {
                    return true
                  }


                
            })
             .argv

module.exports = argv