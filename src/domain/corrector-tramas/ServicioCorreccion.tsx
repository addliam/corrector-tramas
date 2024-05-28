import { Corrector } from "./interface/Corrector";
import { IParser } from "./interface/IParser";

export class ServicioCorreccion {
  // no inyectar dependencia de Fabrica ya que siempre sera la misma fabrica de N algoritmos
  private algoritmoCorreccion: Corrector & IParser;
  // separamos responsabilidad de: correccion y parseo
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
