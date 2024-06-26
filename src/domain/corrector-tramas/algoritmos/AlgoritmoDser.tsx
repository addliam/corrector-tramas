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
    return contenido.map((linea) => {
      const segundaColumna = linea[1];
      let nuevaPrimeraColumna = linea[0];
      if (segundaColumna.includes("RIESGO QUIRURGICO,INCLUYE CONSULTA")) {
        nuevaPrimeraColumna = `${nuevaPrimeraColumna.slice(0, -2)}02`;
      } else if (
        segundaColumna.includes(
          "30 % DE LOS HONORARIOS DEL CIRUJANO - SALA DE OPERACIONES",
        )
      ) {
        nuevaPrimeraColumna = `${nuevaPrimeraColumna.slice(0, -3)}201`;
      }
      return [nuevaPrimeraColumna, ...linea.slice(1)];
    });
  }
}
export default AlgoritmoDser;
