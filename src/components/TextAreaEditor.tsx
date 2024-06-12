import React, { useState, useEffect } from "react";
import { Trama } from "../domain/corrector-tramas/interface/Trama";

interface TextAreaEditorProps extends Trama {}

const TextAreaEditor: React.FC<TextAreaEditorProps> = ({
  contenido,
  tipo,
  nombreArchivo,
}) => {
  const [content, setContent] = useState(contenido);
  const [rows, setRows] = useState(2);

  useEffect(() => {
    // al iniciar setear rows number
    setRowsNumber(contenido);

    return () => {};
  }, [contenido]);

  const setRowsNumber = (content: string) => {
    const newLines = content.match(/\n/g)?.length;
    if (!newLines) setRows(2);
    else setRows(newLines + 1);
  };

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    // cambiar contenido dynamico
    const value = event.target.value;
    setContent(value);
    setRowsNumber(value);
  };

  return (
    <div className="textarea-container">
      <h3>
        <span className="tipo">{tipo.toUpperCase()}</span>
        <span className="separador">&nbsp;-&nbsp;</span>
        <span className="nombre-archivo">{nombreArchivo}</span>
      </h3>
      <textarea
        style={{
          width: "100%",
          whiteSpace: "nowrap",
          overflowX: "auto",
          overflowY: "hidden",
          height: "auto",
        }}
        name={`textarea-${tipo}`}
        wrap="off"
        id={`${tipo}`}
        cols={180}
        rows={rows}
        value={content}
        onChange={handleContentChange}
      ></textarea>
    </div>
  );
};

export default TextAreaEditor;
