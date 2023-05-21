export const calcIMC = (weight, height) => {
  let imc = (weight / (height / 100) ** 2).toFixed(2);
  return imc;
};

export const notANumber = (value) => {
  return isNaN(value) || value == "";
};