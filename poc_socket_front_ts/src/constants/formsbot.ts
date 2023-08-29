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
        info: {
          title: "Hola Bienvenido al ASIBOT! Ingrese su nombre",
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
        info: {
          title: "Hola Bienvenido al ASIBOT! Ingrese su Edad",
        },
      },
    ],
  },
];

export default formBots;
