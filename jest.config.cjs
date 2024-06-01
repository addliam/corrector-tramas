module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  transform: { "^.+\\.ts?$": "@swc/jest" },
  testEnvironment: "node",
  testRegex: "/tests/.*\\.(test|spec)?\\.(ts|tsx)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
