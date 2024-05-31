import { setupServicioCorrecion } from "./utils/SetupServicioCorreccion";
import { configDser } from "../src/domain/corrector-tramas/algoritmos/config/ConfigDser";
// import algoritmo a testear
import AlgoritmoDser from "../src/domain/corrector-tramas/algoritmos/AlgoritmoDser";
describe("ServicioCorrecion: Trama de tipo dfar", () => {
  it("Deberia obtenerse la salida esperada", () => {
    let { contenidoCorregido, modeloSalida } = setupServicioCorrecion(
      AlgoritmoDser,
      configDser,
      "./tests/tramas/entrada/dser_20508790971_00008271_40005_0019925_202405_20240503.txt",
      "./tests/tramas/salida/dser_20508790971_00008271_40005_0019925_202405_20240503.txt"
    );
    expect(contenidoCorregido).toEqual(modeloSalida);
  });
});
