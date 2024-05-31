import { setupServicioCorrecion } from "./utils/SetupServicioCorreccion";
import { configDfac } from "../src/domain/corrector-tramas/algoritmos/config/ConfigDfac";
// import algoritmo a testear
import AlgoritmoDfac from "../src/domain/corrector-tramas/algoritmos/AlgoritmoDfac";
describe("ServicioCorrecion: Trama de tipo dfac", () => {
  it("Deberia obtenerse la salida esperada", () => {
    let { contenidoCorregido, modeloSalida } = setupServicioCorrecion(
      AlgoritmoDfac,
      configDfac,
      "./tests/tramas/entrada/dfac_20508790971_00008271_40005_0019925_202405_20240503.txt",
      "./tests/tramas/salida/dfac_20508790971_00008271_40005_0019925_202405_20240503.txt"
    );
    expect(contenidoCorregido).toEqual(modeloSalida);
  });
});
