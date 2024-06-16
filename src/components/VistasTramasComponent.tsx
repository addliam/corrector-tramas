import { Trama } from "../domain/corrector-tramas/interface/Trama";
import TextAreaEditor from "./TextAreaEditor";

interface VistasTramasComponentProps {
  tramas: Trama[];
}

const VistasTramasComponent = ({ tramas }: VistasTramasComponentProps) => {
  const downloadFile = (trama: Trama): void => {
    const element = document.createElement("a");
    const fileBlob = new Blob([trama.contenido], { type: "text/plain" });
    element.href = URL.createObjectURL(fileBlob);
    element.download = trama.nombreArchivo;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  const descargarTramasAction = (): void => {
    const cantidadTramas = tramas.length;
    console.log(`Descargando tramas. Cantidad: ${cantidadTramas}`);
    tramas.map((trama) => {
      downloadFile(trama);
    });
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
