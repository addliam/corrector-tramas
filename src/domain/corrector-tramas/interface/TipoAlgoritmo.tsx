import { Corrector } from "./Corrector";
import { IParser } from "./IParser";

export interface TipoAlgoritmo {
  tipo: string;
  algoritmo: Corrector & IParser;
}
