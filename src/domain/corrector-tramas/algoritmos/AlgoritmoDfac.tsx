import { Corrector } from "../interface/Corrector";
class AlgoritmoDfac extends Parser implements Corrector {
  offsetsEntrada = [1, 2, 3];
  offsetsSalida = [10];
  constructor() {
    super();
  }
  public corregir(contenido: string[][]): string[][] {
    return [["a", "b"]];
  }
}
export default AlgoritmoDfac;
