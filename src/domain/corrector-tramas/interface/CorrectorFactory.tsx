import { Corrector } from "./Corrector";
import { Parser } from "./Parser";
export interface CorrectorFactory {
  crearCorrector(nombreArchivo: string): Corrector & Parser;
}
