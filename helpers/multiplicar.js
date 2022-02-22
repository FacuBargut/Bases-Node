const fd = require('fs')
const colors = require('colors');




const crearArchivo = async(base = 5, listar = false, hasta = 10) =>{


    try{

    
    if(listar){
        console.log('============')
        console.log(`Tabla del ${base}`)
        console.log('============')
    }

    let salida, consola = '';

    for (let index = 1; index <= hasta ; index++) {
        salida += `${base} ${ 'x' } ${index} ${'='} ${base*index}\n`;
        consola += `${base} ${ 'x'.green } ${index} ${'='.green} ${base*index}\n`;
    }
    if(listar){
        console.log(consola)
    }
    
    fd.writeFileSync(`./salida/tabla-${base}.txt`, salida)
    
    return `tabla-${base}.txt`;
    }catch(error){
        throw error
    }
}

module.exports = {
    crearArchivo
}