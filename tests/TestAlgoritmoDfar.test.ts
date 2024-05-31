import { setupServicioCorrecion } from "./utils/SetupServicioCorreccion";
import { configDfar } from "../src/domain/corrector-tramas/algoritmos/config/ConfigDfar";
// import algoritmo a testear
import AlgoritmoDfar from "../src/domain/corrector-tramas/algoritmos/AlgoritmoDfar";
describe("ServicioCorrecion: Trama de tipo dfar", () => {
  it("Deberia obtenerse la salida esperada", () => {
    let { contenidoCorregido, modeloSalida } = setupServicioCorrecion(
      AlgoritmoDfar,
      configDfar,
      "./tests/tramas/entrada/dfar_20508790971_00008271_40005_0019925_202405_20240503.txt",
      "./tests/tramas/salida/dfar_20508790971_00008271_40005_0019925_202405_20240503.txt"
    );
    expect(contenidoCorregido).toEqual(modeloSalida);
  });
});
