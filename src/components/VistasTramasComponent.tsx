import React from "react";
import { Trama } from "../domain/corrector-tramas/interface/Trama";
import TextAreaEditor from "./TextAreaEditor";

interface VistasTramasComponentProps {
  tramas: Trama[];
}

const VistasTramasComponent = ({ tramas }: VistasTramasComponentProps) => {
  const descargarTramasAction = (): void => {
    console.log(`Descargando tramas ...`);
    const cantidadTramas = tramas.length;
    console.log(`Cantidad: ${cantidadTramas}`);
  };
  return (
    <>
      <div id="contenedor-tramas">
        {tramas.length > 0 &&
          tramas.map((trama: Trama, indx: number) => (
            <TextAreaEditor
              key={`KEY-${indx}.${trama.nombreArchivo}`}
              contenido={trama.contenido}
              tipo={trama.tipo}
              nombreArchivo={trama.nombreArchivo}
            />
          ))}
      </div>
      <div id="contenedor-boton-descarga">
        {tramas.length > 0 && (
          <button
            id="btn-descargar-tramas"
            onClick={() => descargarTramasAction()}
            type="button"
          >
            Descargar Tramas
          </button>
        )}
      </div>
    </>
  );
};

export default VistasTramasComponent;
