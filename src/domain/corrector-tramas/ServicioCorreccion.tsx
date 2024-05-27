import { Corrector } from "./interface/Corrector";
import { Parser } from "./interface/Parser";

export class ServicioCorreccion {
  // no inyectar dependencia de Fabrica ya que siempre sera la misma fabrica de N algoritmos
  private algoritmoCorreccion: Corrector & Parser;

  constructor(algoritmoCorreccion: Corrector & Parser) {
    this.algoritmoCorreccion = algoritmoCorreccion;
  }
  public corregir(contenido: string): string {
    let matrixContenido: string[][] =
      this.algoritmoCorreccion.parsearEntrada(contenido);
    let matrixCorregida: string[][] =
      this.algoritmoCorreccion.corregir(matrixContenido);
    let contenidoSalida: string =
      this.algoritmoCorreccion.parsearSalida(matrixCorregida);
    return contenidoSalida;
  }
}
