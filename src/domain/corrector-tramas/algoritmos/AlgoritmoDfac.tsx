import { Corrector } from "../interface/Corrector";
import { IParser } from "../interface/IParser";

class AlgoritmoDfac implements IParser, Corrector {
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
    console.log("[+] corregir desde AlgoritmoDfac");

    // Recorremos cada fila del contenido
    for (let i = 0; i < contenido.length; i++) {
      let fila = contenido[i];

      // Obtenemos los valores de las columnas necesarias, asegurando convertirlos a números
      let col4 = parseFloat(fila[4].trim());
      let col6 = parseFloat(fila[6].trim());
      let col7 = parseFloat(fila[7].trim());
      let col8 = parseFloat(fila[8].trim());
      let col9 = parseFloat(fila[9].trim());
      let col10 = parseFloat(fila[10].trim());

      if (col9 === 0) {
        // Caso farmacoIGV
        if (col6 !== 0) {
          col7 += col6; // Transferimos el monto de la columna 6 a la columna 7
          col6 = 0;
        }

        // Calculamos la suma de las columnas (4, 7, 8) y restamos la columna (9)
        let sumaRestada = col4 + col7 + col8 - col9;

        // Si la suma restada no es igual a col10, ajustamos col7
        if (sumaRestada !== col10) {
          let diferencia = col10 - sumaRestada;
          col7 += diferencia;

          // Actualizamos la columna 7 en la fila
          fila[7] = col7.toFixed(2);
        }
      } else {
        // Caso normal
        // Calculamos la suma de las columnas (4, 6, 8) y restamos la columna (9)
        let sumaRestada = col4 + col6 + col8 - col9;

        // Si la suma restada no es igual a col10, ajustamos col6
        if (sumaRestada !== col10) {
          let diferencia = col10 - sumaRestada;
          col6 += diferencia;

          // Actualizamos la columna 6 en la fila
          fila[6] = col6.toFixed(2);
        }
      }

      // Actualizamos las columnas 6 y 7 en la fila
      fila[6] = col6.toFixed(2);
      fila[7] = col7.toFixed(2);
    }

    return contenido;
  }
}
export default AlgoritmoDfac;
