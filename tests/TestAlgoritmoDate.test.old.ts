import { readFileSync } from "fs";
import { ServicioCorreccion } from "../src/domain/corrector-tramas/ServicioCorreccion";
import { ParsingWithConfig } from "../src/domain/corrector-tramas/interface/ParsingWithConfig";
import { Corrector } from "../src/domain/corrector-tramas/interface/Corrector";
import { IParser } from "../src/domain/corrector-tramas/interface/IParser";
import { configDate } from "../src/domain/corrector-tramas/algoritmos/config/ConfigDate";

// import algoritmo a testear
import AlgoritmoDate from "../src/domain/corrector-tramas/algoritmos/AlgoritmoDate";

const entradaArchivo = readFileSync(
  "./tests/tramas/entrada/date_20508790971_00008271_20001_0019964_202405_20240504.txt",
  "utf-8",
);
let salidaArchivo = readFileSync(
  "./tests/tramas/salida/date_20508790971_00008271_20001_0019964_202405_20240504.txt",
  "utf-8",
);
describe("ServicioCorrecion: Trama de tipo date", () => {
  it("Deberia obtenerse la salida esperada", () => {
    // Instanciar algoritmo especifico
    const algoritmoTrama: Corrector & IParser = new AlgoritmoDate(
      new ParsingWithConfig(configDate),
    );
    const contenidoEntrada: string = String(entradaArchivo);
    console.log(entradaArchivo);
    // Iniciar servicio correccion con algoritmo
    const servicioCorreccion = new ServicioCorreccion(algoritmoTrama);
    let contenidoCorregido = servicioCorreccion.iniciar(contenidoEntrada);
    // Sobre el: salidaArchivo
    // Gestionar eliminacion de (\r) carriage return. .replace(/\r/g, "")\
    salidaArchivo = salidaArchivo.replace(/\r/g, "");
    // Sobre el: contenidoCorregido
    // trimear para quitar espacios en blanco innecesarios
    contenidoCorregido = contenidoCorregido.trim() + "\n";
    // TODO: servicioCorreccion debe retornar un contenidoCorregido sin espacios al final, pero con un salto de linea
    // Ejm: "6.87\n      " -> "6.87\n"
    expect(contenidoCorregido).toEqual(salidaArchivo);
  });
});
