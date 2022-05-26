
const fs = require('fs');
const crearArchivo = (tabla = 5) =>  { 


    return new Promise ((resolve, reject) => {
         

    console.log('====================');
    console.log('Tabla del ',tabla );
    console.log('====================');
    
  
    let salida = '';

      for (let i=1; i <= 10; i++){
      salida += `${tabla} x ${i} = ${tabla * i}\n`;
      }
    
     console.log(salida);
    
     fs.writeFileSync( `tabla-${tabla}.txt`, salida,);
    
     resolve(`tabla-${tabla}.txt`);


    })
    }

module.exports = {
    crearArchivo 
}