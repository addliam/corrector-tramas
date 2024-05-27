import AlgoritmoDate from "./algoritmos/AlgoritmoDate";
import AlgoritmoDden from "./algoritmos/AlgoritmoDden";
import AlgoritmoDfac from "./algoritmos/AlgoritmoDfac";
import AlgoritmoDfar from "./algoritmos/AlgoritmoDfar";
import AlgoritmoDser from "./algoritmos/AlgoritmoDser";
import { Corrector } from "./interface/Corrector";
import { CorrectorFactory } from "./interface/CorrectorFactory";
import { Parser } from "./Parser";

export class CorrectorFactoryImpl implements CorrectorFactory {
  private calcularTipo = (nombreArchivo: string): string => {
    // Aplicar logica deteccion de tipo archivo
    console.log("calcularTipo");
    console.log(nombreArchivo);
    if (nombreArchivo.toLowerCase().startsWith("dfar")) {
      return "dfar";
    }
    if (nombreArchivo.toLowerCase().startsWith("dfac")) {
      return "dfac";
    }
    if (nombreArchivo.toLowerCase().startsWith("dser")) {
      return "dser";
    }
    if (nombreArchivo.toLowerCase().startsWith("date")) {
      return "date";
    }
    if (nombreArchivo.toLowerCase().startsWith("dden")) {
      return "dden";
    }
    console.error("Tipo no reconocido.");
    return "INCORRECT";
  };

  crearCorrector(nombreArchivo: string): Parser & Corrector {
    // Necesita retornar un objeto que cumpla con: extender Parser e implementar Corrector
    let tipo: string = this.calcularTipo(nombreArchivo);
    switch (tipo) {
      case "dfar":
        return new AlgoritmoDfar();
      case "dfac":
        return new AlgoritmoDfac();
        break;
      case "dser":
        return new AlgoritmoDser();
        break;
      case "date":
        return new AlgoritmoDate();
      case "dden":
        return new AlgoritmoDden();
        break;
      default:
        console.log("Tipo no encontrado!");
        throw new Error("No se pudo determinar el tipo de archivo.");
        break;
    }
  }
}
