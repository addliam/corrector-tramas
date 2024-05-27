import { Corrector } from "../interface/Corrector";
import { Parser } from "../Parser";

class AlgoritmoDden extends Parser implements Corrector {
  offsetsEntrada = [0];
  offsetsSalida = [0];
  constructor() {
    super();
  }
  public corregir(contenido: string[][]): string[][] {
    // no ocurre nada en AlgoritmoDden
    console.log("[+] corregir desde AlgoritmoDden");
    return contenido;
  }
}
export default AlgoritmoDden;
