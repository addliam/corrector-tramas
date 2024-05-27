import AlgoritmoDate from "./algoritmos/AlgoritmoDate";
import AlgoritmoDden from "./algoritmos/AlgoritmoDden";
import AlgoritmoDfac from "./algoritmos/AlgoritmoDfac";
import AlgoritmoDfar from "./algoritmos/AlgoritmoDfar";
import AlgoritmoDser from "./algoritmos/AlgoritmoDser";
import { TipoAlgoritmo } from "./interface/TipoAlgoritmo";

export const calcularTipoAlgoritmo = (nombreArchivo: string): TipoAlgoritmo => {
  // Aplicar logica deteccion de tipo archivo
  const nombreArchivoLowerCase = nombreArchivo.toLowerCase();
  if (nombreArchivoLowerCase.startsWith("dfar")) {
    return { tipo: "dfar", algoritmo: new AlgoritmoDfar() };
  }
  if (nombreArchivoLowerCase.startsWith("dfac")) {
    return { tipo: "dfac", algoritmo: new AlgoritmoDfac() };
  }
  if (nombreArchivoLowerCase.startsWith("dser")) {
    return { tipo: "dser", algoritmo: new AlgoritmoDser() };
  }
  if (nombreArchivoLowerCase.startsWith("date")) {
    return { tipo: "date", algoritmo: new AlgoritmoDate() };
  }
  if (nombreArchivoLowerCase.startsWith("dden")) {
    return { tipo: "dden", algoritmo: new AlgoritmoDden() };
  }
  console.error("[-] Tipo no reconocido.");
  throw new Error("Tipo no reconocido.");
};
