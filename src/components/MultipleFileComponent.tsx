import { useState, useEffect } from "react";
import { ServicioCorreccion } from "../domain/corrector-tramas/ServicioCorreccion";
import { CorrectorFactoryImpl } from "../domain/corrector-tramas/CorrectorFactoryImpl";

interface FileItem {
  filename: string;
  content: string | ArrayBuffer | null;
}

const MainFilesHandler = (files: FileItem[]) => {
  // 1. Identificar tipo archivo (de los 4 o 5)
  // 2. Usar la funcion correspondiente por cada tipo archivo
  // Recorrer los files para crear un corrector con algoritmo segun corresponda
  files.map((file: FileItem) => {
    let servicioCorreccion: ServicioCorreccion = new ServicioCorreccion(
      new CorrectorFactoryImpl()
    );
    let contenidoCorregido: string = servicioCorreccion.corregir(
      String(file.content),
      file.filename
    );
    console.log("contenidoCorregido");
    console.log(contenidoCorregido);
    // let correctorFactory: CorrectorFactoryImpl = new CorrectorFactoryImpl();
    // // la fabrica elige el corrector de acuerdo al nombre del archivo, osea el tipo
    // let correctorEspecifico: Corrector = correctorFactory.crearCorrector(
    //   file.filename
    // );
    // let servicioCorreccion: ServicioCorreccion = new ServicioCorreccion(correctorEspecifico);
  });
};

export const MultipleFileComponent = () => {
  const [arrayFileItems, setArrayFileItems] = useState<FileItem[]>([]);

  useEffect(() => {
    // Mostrar informacion de archivos
    // arrayFileItems.map((file: FileItem) => {
    //   console.log(file.filename);
    // });
    MainFilesHandler(arrayFileItems);
    return () => {};
  }, [arrayFileItems]);

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
    </div>
  );
};
