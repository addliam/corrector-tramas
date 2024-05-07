import { useState } from "react";

interface FileItem {
  filename: string;
  content: string | ArrayBuffer | null;
}

const MainFilesHandler = (files: FileItem[]) => {
  // 1. Identificar tipo archivo (de los 4 o 5)
  // 2. Usar la funcion correspondiente por cada tipo archivo
};

export const MultipleFileComponent = () => {
  const [arrayFileItems, setArrayFileItems] = useState<FileItem[]>([]);

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
    setArrayFileItems(res);

    // Mostrar informacion de archivos
    // res.map((file: FileItem) => {
    //   console.log(file);
    // });
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
