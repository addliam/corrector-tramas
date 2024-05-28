import { Corrector } from "./interface/Corrector";
import { IParser } from "./interface/IParser";

export class ServicioCorreccion {
  private algoritmoCorreccion: Corrector & IParser;
  constructor(algoritmoCorreccion: Corrector & IParser) {
    this.algoritmoCorreccion = algoritmoCorreccion;
  }
  public iniciar(contenido: string): string {
    let matrixContenido: string[][] =
      this.algoritmoCorreccion.parsearEntrada(contenido);
    let matrixCorregida: string[][] =
      this.algoritmoCorreccion.corregir(matrixContenido);
    let contenidoSalida: string =
      this.algoritmoCorreccion.parsearSalida(matrixCorregida);
    return contenidoSalida;
  }
}
