import { Corrector } from "../interface/Corrector";
import { Parser } from "../interface/Parser";

class AlgoritmoDfar extends Parser implements Corrector {
  offsetsEntrada = [65];
  offsetsSalida = [8, 12, 12, 12, 25];
  constructor() {
    super();
  }
  public corregir(contenido: string[][]): string[][] {
    console.log("[+] corregir desde AlgoritmoDfar");
    return contenido;
  }
}
export default AlgoritmoDfar;
