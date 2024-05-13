import { Corrector } from "../interface/Corrector";
class AlgoritmoDser extends Parser implements Corrector {
  offsetsEntrada = [4, 8, 14];
  offsetsSalida = [8];
  constructor() {
    super();
  }
  public corregir(contenido: string[][]): string[][] {
    return [["a", "b"]];
  }
}
export default AlgoritmoDser;
