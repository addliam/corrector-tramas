import { useState, useEffect } from "react";
import { ServicioCorreccion } from "../domain/corrector-tramas/ServicioCorreccion";
// importacion algoritmos
import { Corrector } from "../domain/corrector-tramas/interface/Corrector";
import { calcularTipoAlgoritmo } from "../domain/corrector-tramas/CalcularTipoAlgoritmo";
import { TipoAlgoritmo } from "../domain/corrector-tramas/interface/TipoAlgoritmo";
import { Trama } from "../domain/corrector-tramas/interface/Trama";
import TextAreaEditor from "./TextAreaEditor";
import { IParser } from "../domain/corrector-tramas/interface/IParser";
interface FileItem {
  filename: string;
  content: string | ArrayBuffer | null;
}

export const MultipleFileComponent = () => {
  const [arrayFileItems, setArrayFileItems] = useState<FileItem[]>([]);
  // const [entradaTramas, setEntradaTramas] = useState<Trama[]>([]);
  const [salidaTramas, setSalidaTramas] = useState<Trama[]>([]);

  {
    /* Testeando otro metodo parseo */
    // const parsing: Parsing = new Parsing();
    // parsing.start();
  }

  useEffect(() => {
    MainFilesHandler(arrayFileItems);
    return () => {};
  }, [arrayFileItems]);
  useEffect(() => {
    salidaTramas.map((salidaTrama: Trama) => {
      console.log({ salidaTrama });
    });

    return () => {};
  }, [salidaTramas]);

  const MainFilesHandler = (files: FileItem[]) => {
    // TODO: vaciar estado actual de state
    // Recorrer los files para crear un corrector con algoritmo segun corresponda
    files.map((file: FileItem) => {
      const tramaTipoyAlgoritmo: TipoAlgoritmo = calcularTipoAlgoritmo(
        file.filename
      );
      const tipoTrama: string = tramaTipoyAlgoritmo.tipo;
      const algoritmoTrama: Corrector & IParser = tramaTipoyAlgoritmo.algoritmo;
      const contenidoArchivoString: string = String(file.content);
      // Iniciar servicio correccion con algoritmo especifico
      const servicioCorreccion = new ServicioCorreccion(algoritmoTrama);
      const contenidoCorregido = servicioCorreccion.iniciar(
        contenidoArchivoString
      );
      console.log("contenidoCorregido: ");
      console.log(contenidoCorregido);
      // Agregar trama a lista de tramas corregidas, osea state salida
      setSalidaTramas((prev) => [
        ...prev,
        {
          tipo: tipoTrama,
          contenido: contenidoCorregido,
          nombreArchivo: file.filename,
        },
      ]);
    });
  };

  const handleFileChosen = async (event: any) => {
    // Convert the FileList into an array and iterate
    let files = Array.from(event.target.files).map((file: any) => {
      // Define a new file reader
      let reader = new FileReader();
      // Create a new promise
      return new Promise<FileItem>((resolve) => {
        // Resolve the promise after reading file
        reader.onload = () =>
          resolve({ filename: file.name, content: reader.result });
        // Read the file as a text
        reader.readAsText(file);
      });
    });

    // At this point you'll have an array of results
    let res: FileItem[] = await Promise.all(files);
    // Guardar el array de files en estado arrayFileItems
    setArrayFileItems(res);
  };

  return (
    <div className="upload-expense">
      <input
        style={{ height: "10rem", border: "2px solid red" }}
        type="file"
        multiple
        id="file"
        className="input-file"
        accept=".txt"
        onChange={(e) => handleFileChosen(e)}
      />
      <div id="mainbody">
        {salidaTramas.length > 0 &&
          salidaTramas.map((trama: Trama, indx: number) => (
            <TextAreaEditor
              key={`KEY-${indx}.${trama.nombreArchivo}`}
              contenido={trama.contenido}
              tipo={trama.tipo}
              nombreArchivo={trama.nombreArchivo}
            />
          ))}
      </div>
      {/* O haces un componente grande, que necesites solo pasar salidaTramas state, 
      O un state compartido de padre a hijo (callback) por cada tipo de trama */}
    </div>
  );
};
