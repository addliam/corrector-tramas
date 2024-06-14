import { Corrector } from "../interface/Corrector";
import { IParser } from "../interface/IParser";

class AlgoritmoDser implements IParser, Corrector {
  private parser: IParser;

  parsearEntrada(texto: string): string[][] {
    return this.parser.parsearEntrada(texto);
  }
  parsearSalida(matrix: string[][]): string {
    return this.parser.parsearSalida(matrix);
  }

  constructor(parser: IParser) {
    this.parser = parser;
  }
  public corregir(contenido: string[][]): string[][] {
    console.log("[+] corregir desde AlgoritmoDser");
    // Iterar sobre cada fila de la matriz de entrada
    for (let i = 0; i < contenido.length; i++) {
      // Obtener el detalle de la fila actual
      let detalle = contenido[i][0];
      detalle = detalle.replace("0303000501", "0303000201");
      detalle = detalle.replace("0803230101", "0803230102");

      contenido[i][0] = detalle;
    }
    return contenido;
  }
}
export default AlgoritmoDser;
