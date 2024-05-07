import { Corrector } from "./interface/Corrector";
class AlgoritmoDden implements Corrector {
  constructor() {}
  public corregir(contenido: string[][]): string[][] {
    return [["a", "b"]];
  }
}
export default AlgoritmoDden;
