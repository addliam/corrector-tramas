import { Corrector } from "./interface/Corrector";
class AlgoritmoDser implements Corrector {
  constructor() {}
  public corregir(contenido: string[][]): string[][] {
    return [["a", "b"]];
  }
}
export default AlgoritmoDser;
