import { Parser } from "./Parser";
import { Corrector } from "./Corrector";

export interface TipoAlgoritmo {
  tipo: string;
  algoritmo: Corrector & Parser;
}
