import { CorrectorFactoryImpl } from "./CorrectorFactoryImpl";
import { Corrector } from "./interface/Corrector";

export class ServicioCorreccion {
  private correctorFactoryImpl: CorrectorFactoryImpl;

  constructor(correctorFactoryImpl: CorrectorFactoryImpl) {
    this.correctorFactoryImpl = correctorFactoryImpl;
  }
  public corregir(contenido: string, nombreArchivo: string): string {
    const corrector: Corrector & Parser =
      this.correctorFactoryImpl.crearCorrector(nombreArchivo);
    let matrixContenido: string[][] = corrector.parsearEntrada(contenido);
    let matrixCorregida: string[][] = corrector.corregir(matrixContenido);
    let contenidoSalida: string = corrector.parsearSalida(matrixCorregida);
    return contenidoSalida;
  }
}
