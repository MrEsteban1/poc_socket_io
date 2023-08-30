import { title } from "process";
import { FormType } from "../enum/Genelares";
import { FormBot } from "../interfaces/forms";

const formBots: FormBot[] = [
  {
    flujo: [
      {
        id: "1231",
        valueType: FormType.texto,
        variableName: "nombre",
        idDestino:"1232",
        info: {
          title: "Hola Bienvenido al ASIBOT! Ingrese su nombre",
        },
      },
      {
        id: "1232",
        valueType: FormType.numero,
        variableName: "edad",
        idDestino:"1233",
        info: {
          title: "Ingrese su edad",
        },
      },
      {
        id: "1233",
        valueType: FormType.numero,
        variableName: "edad",
        idDestino:"1231",
        info: {
          title: "Ingrese su DNI",
        },
      },
    ],
    id: "AAAA",
    title: "ChatPrueba 1",
  },
  {
    id: "AAAE",
    title: "ChatPrueba 2",
    flujo: [
      {
        id: "1231",
        valueType: FormType.fecha,
        variableName: "edad",
        idDestino: "1232",
        info: {
          title: "Hola Bienvenido al ASIBOT! Ingrese su Edad",
        },
      },
    ],
  },
];

export default formBots;
