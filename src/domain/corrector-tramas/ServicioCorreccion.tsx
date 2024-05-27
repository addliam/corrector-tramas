import { Corrector } from "./interface/Corrector";
import { CorrectorFactory } from "./interface/CorrectorFactory";
import { Parser } from "./Parser";

export class ServicioCorreccion {
  private correctorFactory: CorrectorFactory;

  constructor(correctorFactory: CorrectorFactory) {
    this.correctorFactory = correctorFactory;
  }
  public corregir(contenido: string, nombreArchivo: string): string {
    const corrector: Corrector & Parser =
      this.correctorFactory.crearCorrector(nombreArchivo);
    let matrixContenido: string[][] = corrector.parsearEntrada(contenido);
    let matrixCorregida: string[][] = corrector.corregir(matrixContenido);
    let contenidoSalida: string = corrector.parsearSalida(matrixCorregida);
    return contenidoSalida;
  }
}
