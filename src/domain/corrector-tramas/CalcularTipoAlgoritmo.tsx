import AlgoritmoDate from "./algoritmos/AlgoritmoDate";
import AlgoritmoDden from "./algoritmos/AlgoritmoDden";
import AlgoritmoDfac from "./algoritmos/AlgoritmoDfac";
import AlgoritmoDfar from "./algoritmos/AlgoritmoDfar";
import AlgoritmoDser from "./algoritmos/AlgoritmoDser";
import { configDate } from "./algoritmos/config/ConfigDate";
import { configDden } from "./algoritmos/config/ConfigDden";
import { configDfac } from "./algoritmos/config/ConfigDfac";
import { configDfar } from "./algoritmos/config/ConfigDfar";
import { configDser } from "./algoritmos/config/ConfigDser";
import { ParsingWithConfig } from "./interface/ParsingWithConfig";
import { TipoAlgoritmo } from "./interface/TipoAlgoritmo";

// este metodo hace de `fábrica o un contenedor de inyección de dependencias (IoC container)`
export const calcularTipoAlgoritmo = (nombreArchivo: string): TipoAlgoritmo => {
  // Aplicar logica deteccion de tipo archivo
  const nombreArchivoLowerCase = nombreArchivo.toLowerCase();

  switch (true) {
    case nombreArchivoLowerCase.startsWith("dfar"):
      return {
        tipo: "dfar",
        algoritmo: new AlgoritmoDfar(new ParsingWithConfig(configDfar)),
      };
    case nombreArchivoLowerCase.startsWith("dfac"):
      return {
        tipo: "dfac",
        algoritmo: new AlgoritmoDfac(new ParsingWithConfig(configDfac)),
      };
    case nombreArchivoLowerCase.startsWith("dser"):
      return {
        tipo: "dser",
        algoritmo: new AlgoritmoDser(new ParsingWithConfig(configDser)),
      };
    case nombreArchivoLowerCase.startsWith("date"):
      return {
        tipo: "date",
        algoritmo: new AlgoritmoDate(new ParsingWithConfig(configDate)),
      };
    case nombreArchivoLowerCase.startsWith("dden"):
      return {
        tipo: "dden",
        algoritmo: new AlgoritmoDden(new ParsingWithConfig(configDden)),
      };
    default:
      console.error("[-] Tipo no reconocido.");
      throw new Error("Tipo no reconocido.");
  }
};
