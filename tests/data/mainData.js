const GenerateABoundedRandom = require("../utils/GenerateABoundedRandom");

const mainData = {
  vaucherCode: GenerateABoundedRandom.number().betweenOneAnd(999).toString(),
  vaucherName: "Nombre del Comprobante: " + GenerateABoundedRandom.number().betweenOneAnd(9999).toString(),
  dianResolutionNumber: GenerateABoundedRandom.number().betweenOneAnd(999999).toString(),
  prefix: "FC-" + GenerateABoundedRandom.number().betweenOneAnd(999999).toString(),
  intialNumbering: "1",
  finalNumbering: GenerateABoundedRandom.number().betweenOneAnd(999).toString(),
  nextDocumentNumber: GenerateABoundedRandom.number().betweenOneAnd(999999999).toString(),
};

module.exports = mainData;
