import AlgoritmoDser from "./algoritmos/AlgoritmoDser";
import AlgoritmoDfac from "./algoritmos/AlgoritmoDfac";
import AlgoritmoDden from "./algoritmos/AlgoritmoDden";
import AlgoritmoDfar from "./algoritmos/AlgoritmoDfar";
import { Corrector } from "./algoritmos/interface/Corrector";
class ServicioCorreccion {
  // patron Strategy o Abstract Factory por el metodo determinarTipo
  private corrector: Corrector;
  private contenido: string[][];
  constructor(corrector: Corrector) {
    this.corrector = corrector;
  }

  private static calcularTipo = (nombreArchivo: string): string => {
    return "";
  };

  public static determinarTipo(nombreArchivo: string): Corrector {
    let tipo: string = this.calcularTipo(nombreArchivo);
    switch (tipo) {
      case "DSER":
        return new AlgoritmoDser();
        break;
      case "DFAR":
        return new AlgoritmoDfar();
        break;
      case "DFAC":
        return new AlgoritmoDfac();
        break;
      case "DDEN":
        return new AlgoritmoDden();
        break;
      default:
        console.log("Tipo no encontrado!");
        throw new Error("No se pudo determinar el tipo de archivo.");
        break;
    }
  }
}
export default ServicioCorreccion;
