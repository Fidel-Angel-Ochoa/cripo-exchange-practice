import numeral from "numeral";

const dollarFilter = function (value) {
  if (!value) {
    return "$ 0";
  }

  return numeral(value).format("($ 0.00a)");
};

const percentFilter = function (value) {
  if (!value) {
    return "0%";
  }
  //se usa signo de asentuacion como comilla ``. Se usa "Number" para tomar el valor y convertirlo a numero, por si viene en formato string.
  return `${Number(value).toFixed(2)}%`;
};

// cuando se hace 'export default' se exporta todo lo que contiene el archivo
// si solo se hace 'export {funcion-exportada}' solo se exportara la funcion espcificada
export { dollarFilter, percentFilter };
