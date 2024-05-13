import { Corrector } from "./Corrector";

export interface CorrectorFactory {
  crearCorrector(nombreArchivo: string): Corrector;
}
