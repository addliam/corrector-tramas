import { Corrector } from "../interface/Corrector";
import { Parser } from "../Parser";

class AlgoritmoDfac extends Parser implements Corrector {
  // algunos tienen primer ancho de columna 82 otros 68 (quiza incompletos, huecos)
  offsetsEntrada = [82];
  // 42 se va hasta la letra N
  offsetsSalida = [12, 9, 12, 12, 12, 12, 12, 12, 12, 13, 42];
  constructor() {
    super();
  }
  public corregir(contenido: string[][]): string[][] {
    console.log("[+] corregir desde AlgoritmoDfac");
    return contenido;
  }
}
export default AlgoritmoDfac;
