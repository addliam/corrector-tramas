import AlgoritmoDfar from "./algoritmos/AlgoritmoDfar";
import AlgoritmoDser from "./algoritmos/AlgoritmoDser";
import { Corrector } from "./interface/Corrector";
import { CorrectorFactory } from "./interface/CorrectorFactory";

export class CorrectorFactoryImpl implements CorrectorFactory {
  private calcularTipo = (nombreArchivo: string): string => {
    // Aplicar logica deteccion de tipo archivo
    return "DFAR";
  };

  crearCorrector(nombreArchivo: string): Parser & Corrector {
    // Necesita retornar un objeto que cumpla con: extender Parser e implementar Corrector
    let tipo: string = this.calcularTipo(nombreArchivo);
    switch (tipo) {
      case "DSER":
        return new AlgoritmoDser();
        break;
      case "DFAR":
        return new AlgoritmoDfar();
        break;
      default:
        console.log("Tipo no encontrado!");
        throw new Error("No se pudo determinar el tipo de archivo.");
        break;
    }
  }
}
