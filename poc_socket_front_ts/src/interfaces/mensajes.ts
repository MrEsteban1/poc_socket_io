import { tipoMensaje } from "../enum/Genelares";

export interface mensaje {
  id: string;
  orden?: number;
  usuario: string;
  mensaje: string;
  tipo: tipoMensaje;
}

export interface mensajeDinamico {}

export interface mensajeBot {
  id_dialogo: string;
  // id: string;
  orden: number;
  texto: string;
  tipo_respuesta: string;
}

interface mensajeRespuesta {
  respuesta: string;
  variable: string;
  // archivo: ?
}
