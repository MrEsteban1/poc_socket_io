const falso = require("@ngneat/falso")
const fs = require("fs")

const mostrarFalsoDato = (dato)=>console.log(dato)

const generarOpciones = ()=>{
    const decimalRandom = Math.random() // 0 o 1
    const numeroAleatorio = (Math.floor(decimalRandom * (10+1+1)))+1
    let i = 0
    const opciones = []
    while(i<= numeroAleatorio){
        opciones.push({
            label: falso.randMovie(),
            value: falso.randCompanyName()
        })
        i++
    }

    return opciones
}

let i = 0

while(i<100){
    const dato = {
        id: falso.randUuid(),
        orden: i+1,
        opciones: generarOpciones(),
        imagen: falso.randUrl(),
        texto: falso.randText(),
        tipo_respuesta: "texto"
    }
    mostrarFalsoDato(dato)
    i++
}

const opcionesJSON = JSON.stringify(opciones)

// const fs.writeFileSync(__dirname+"/datos.json")




// export type Opcion = {
//     label:string,
//     value:string
// }


// export interface mensajeBot {
//     id_dialogo: string;
//     // id: string;
//     orden: number;
//     opciones?: Opcion[]
//     imagen?: string
//     texto: string;
//     tipo_respuesta: string;
//   }
