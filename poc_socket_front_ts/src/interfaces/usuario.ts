import { tipoMensaje } from "../enum/Genelares";

export interface usuario {
  id: string;
  usuario: string;
  mensaje: string;
  tipo: tipoMensaje;
}
