import { readFileSync } from "fs";
import { ServicioCorreccion } from "../../src/domain/corrector-tramas/ServicioCorreccion";
import { ParsingWithConfig } from "../../src/domain/corrector-tramas/interface/ParsingWithConfig";
import { Corrector } from "../../src/domain/corrector-tramas/interface/Corrector";
import { IParser } from "../../src/domain/corrector-tramas/interface/IParser";
import { ConfigTrama } from "../../src/domain/corrector-tramas/interface/ConfigTrama";

export const setupServicioCorrecion = (
  AlgoritmoClass: new (config: ParsingWithConfig) => Corrector & IParser,
  configTrama: ConfigTrama,
  absEntradaPath: string,
  absSalidaPath: string,
) => {
  let entradaArchivo = readFileSync(absEntradaPath, "utf-8");
  let modeloSalida = readFileSync(absSalidaPath, "utf-8");
  const algoritmoTrama: Corrector & IParser = new AlgoritmoClass(
    new ParsingWithConfig(configTrama),
  );
  const contenidoEntrada: string = String(entradaArchivo);
  const servicioCorreccion = new ServicioCorreccion(algoritmoTrama);
  let contenidoCorregido = servicioCorreccion.iniciar(contenidoEntrada);
  modeloSalida = modeloSalida.replace(/\r/g, "");
  contenidoCorregido = contenidoCorregido.trim() + "\n";
  return { contenidoCorregido, modeloSalida };
};
