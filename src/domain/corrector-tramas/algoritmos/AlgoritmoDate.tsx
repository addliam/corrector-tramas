import { Corrector } from "../interface/Corrector";
import { Parser } from "../Parser";

class AlgoritmoDate extends Parser implements Corrector {
  offsetsEntrada = [39];
  offsetsSalida = [
    10, 21, 22, 3, 22, 24, 6, 31, 10, 18, 34, 14, 12, 12, 12, 12, 12, 12, 12,
    12, 12, 12, 12, 12, 12,
  ];
  constructor() {
    super();
  }
  public corregir(contenido: string[][]): string[][] {
    console.log("[+] corregir desde AlgoritmoDate");
    return contenido;
  }
}
export default AlgoritmoDate;
