import { useState, useEffect, useRef } from "react";
import { ServicioCorreccion } from "../domain/corrector-tramas/ServicioCorreccion";
// importacion algoritmos
import { Corrector } from "../domain/corrector-tramas/interface/Corrector";
import { calcularTipoAlgoritmo } from "../domain/corrector-tramas/CalcularTipoAlgoritmo";
import { TipoAlgoritmo } from "../domain/corrector-tramas/interface/TipoAlgoritmo";
import { Trama } from "../domain/corrector-tramas/interface/Trama";
import { IParser } from "../domain/corrector-tramas/interface/IParser";
import VistasTramasComponent from "./VistasTramasComponent";
interface FileItem {
  filename: string;
  content: string | ArrayBuffer | null;
}

export const MultipleFileComponent = () => {
  const [arrayFileItems, setArrayFileItems] = useState<FileItem[]>([]);
  // const [entradaTramas, setEntradaTramas] = useState<Trama[]>([]);
  const [salidaTramas, setSalidaTramas] = useState<Trama[]>([]);
  // referencia a boton "Buscar archivos"
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    MainFilesHandler(arrayFileItems);
    return () => {};
  }, [arrayFileItems]);
  /*useEffect(() => {
    salidaTramas.map((salidaTrama: Trama) => {
      console.log({ salidaTrama });
    });

    return () => {};
  }, [salidaTramas]);*/

  const MainFilesHandler = (files: FileItem[]) => {
    // TODO: vaciar estado actual de state
    // Recorrer los files para crear un corrector con algoritmo segun corresponda
    files.map((file: FileItem) => {
      const tramaTipoyAlgoritmo: TipoAlgoritmo = calcularTipoAlgoritmo(
        file.filename,
      );
      const tipoTrama: string = tramaTipoyAlgoritmo.tipo;
      const algoritmoTrama: Corrector & IParser = tramaTipoyAlgoritmo.algoritmo;
      const contenidoArchivoString: string = String(file.content);
      // Iniciar servicio correccion con algoritmo especifico
      const servicioCorreccion = new ServicioCorreccion(algoritmoTrama);
      const contenidoCorregido = servicioCorreccion.iniciar(
        contenidoArchivoString,
      );
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

  const handleDropOnDragArea = async (
    event: React.DragEvent<HTMLDivElement>,
  ) => {
    event.preventDefault();
    event.stopPropagation();
    let files = Array.from(event.dataTransfer.files).map((file: any) => {
      let reader = new FileReader();
      return new Promise<FileItem>((resolve) => {
        reader.onload = () =>
          resolve({ filename: file.name, content: reader.result });
        reader.readAsText(file);
      });
    });
    let res: FileItem[] = await Promise.all(files);
    setArrayFileItems(res);
  };
  const handleDragOverOnDragArea = async (event: any) => {
    event.preventDefault();
  };
  const handleButtonClick = () => {
    inputRef.current?.click();
  };
  return (
    <div className="upload-expense">
      <div
        className="drag-area"
        onDrop={handleDropOnDragArea}
        onDragOver={handleDragOverOnDragArea}
      >
        <div className="icon">
          <img
            height="32px"
            width="32px"
            src="src/assets/icon-upload-f56e28.png"
          />
        </div>
        <header>Arrastra y suelta para Subir Archivos</header>
        <span>O</span>
        <button onClick={handleButtonClick} id="buscar-archivos">
          Buscar archivos
        </button>
        <input
          ref={inputRef}
          id="entrada-archivos-trama"
          type="file"
          multiple
          onChange={(e) => handleFileChosen(e)}
          className="input-file"
          accept=".txt"
          hidden
        />
      </div>
      <div id="mainbody">
        <VistasTramasComponent tramas={salidaTramas} />
      </div>
    </div>
  );
};
