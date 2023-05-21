import { form, inputHeight, inputWeight } from "./elements.js";
import { calcIMC, notANumber } from "./utils.js";
import { AlertError } from "./alert-error.js";
import { Modal } from "./modal.js";

const displayResultMessage = (result) => {
  Modal.open();
  Modal.message.innerText = `Seu IMC é de ${result}`;
}

form.onsubmit = (event) => {
  event.preventDefault();

  let weight = inputWeight.value;
  let height = inputHeight.value;
  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height);
  if (weightOrHeightIsNotANumber) {
    AlertError.open();
    return;
  }

  AlertError.close();

  let resultIMC = calcIMC(weight, height);
  displayResultMessage(resultIMC);
};

inputWeight.oninput = () => AlertError.close();

inputHeight.oninput = () => AlertError.close();




