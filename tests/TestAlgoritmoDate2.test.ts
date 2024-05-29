import { setupServicioCorrecion } from "./utils/SetupServicioCorreccion";
import { configDate } from "../src/domain/corrector-tramas/algoritmos/config/ConfigDate";
// import algoritmo a testear
import AlgoritmoDate from "../src/domain/corrector-tramas/algoritmos/AlgoritmoDate";
describe("ServicioCorrecion: Trama de tipo date", () => {
  it("Deberia obtenerse la salida esperada", () => {
    let { contenidoCorregido, modeloSalida } = setupServicioCorrecion(
      AlgoritmoDate,
      configDate,
      "./tests/tramas/entrada/date_20508790971_00008271_20001_0019964_202405_20240504.txt",
      "./tests/tramas/salida/date_20508790971_00008271_20001_0019964_202405_20240504.txt",
    );
    expect(contenidoCorregido).toEqual(modeloSalida);
  });
});
