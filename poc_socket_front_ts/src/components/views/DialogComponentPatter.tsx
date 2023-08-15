import { Box } from "@mui/material";
import React from "react";
import { MensajeCard } from "../mensajes/MensajeCard";
import MensajeTitulo from "../mensajes/MensajeTitulo";
import { MensajeText } from "../mensajes/MensajeTexto";
import MensajeFooter from "../mensajes/MensajeFooter";
import MensajeFoto from "../mensajes/MensajeFoto";
import MensajeListaOpciones from "../mensajes/MensajeListaOpciones";
import { mensajeBot } from "../../interfaces/mensajes";

interface Props {
  mensaje?: mensajeBot
}
const DialogComponentPatter = ({mensaje}: Props) => {
  return (<MensajeCard>
            <MensajeTitulo />
            <MensajeText mensaje={ "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis atque, provident porro eligendi deleniti mollitia sapiente vel, iste ducimus, fuga qui est eaque doloremque ex blanditiis quaerat itaque nemo tenetur quos eos tempore. Labore placeat atque ipsum repellendus error accusantium eos, aliquam dicta repellat deserunt quasi dolorum sequi ipsam earum soluta adipisci dolor ex nobis at iure explicabo quia ut? Id minima architecto fugit dicta, reiciendis hic excepturi aperiam, voluptatum, vitae temporibus ea ipsam! Laborum cupiditate inventore quis. Omnis, temporibus sunt tempore, et eligendi qui provident laudantium officia, optio maiores quaerat incidunt illum nesciunt ea excepturi voluptatibus earum porro nulla" } />
            <MensajeFoto/>
            <MensajeListaOpciones />
            <MensajeFooter />
    </MensajeCard>);
  };


export default DialogComponentPatter;
