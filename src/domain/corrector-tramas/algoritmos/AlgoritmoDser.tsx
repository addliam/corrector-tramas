import { Corrector } from "../interface/Corrector";
import { Parser } from "../Parser";

class AlgoritmoDser extends Parser implements Corrector {
  offsetsEntrada = [50, 74];
  // 74 similar a offsetSalida incluye ancho de columna mas espacios en blanco a la izquierda
  // Excepcion signo negativo representa alineacion izq.
  offsetsSalida = [-74, 15, 10, 12, 12, 12, 12, 12, 20];
  constructor() {
    super();
  }
  public corregir(contenido: string[][]): string[][] {
    console.log("[+] corregir desde AlgoritmoDser");
    return contenido;
  }
}
export default AlgoritmoDser;
