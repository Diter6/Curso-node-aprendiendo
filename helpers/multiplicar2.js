
const fs = require('fs');
const crearArchivo = async (tabla = 5, listar = false, h) =>  { 
    const colors = require('colors');
try{
  

  
    let salida = '';
    
    let consola = '';

      for (let i=1; i <= h; i++){
      salida += `${tabla} x ${i} = ${tabla * i}\n`;
      consola += `${tabla} ${'x'.green} ${i} ${'='.green} ${tabla * i}\n`;
      }
    
      if(listar){
        console.log('===================='.underline.bgBlue);
        console.log('Tabla del '.bgCyan,tabla);
        console.log('===================='.underline.bgBlue);
        console.log(consola);
    }
    
     fs.writeFileSync(`./salida/tabla-${tabla}.txt`, salida);
    
     return(`tabla-${tabla}.txt`);


    
    }catch (err){
        throw err; 
    }
}

module.exports = {
    crearArchivo 
}