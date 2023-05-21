import { inputHeight, inputWeight } from "./elements.js";

export const Modal = {
  wrapper: document.querySelector(".modal__wrapper"),
  message: document.querySelector(".modal .title span"),
  closeButton: document.querySelector(".closeBtn"),

  open() {
    Modal.wrapper.classList.add("open");
  },
  close() {
    Modal.wrapper.classList.remove("open");
  }
}

Modal.closeButton.onclick = () => {
  Modal.close();
  inputWeight.value = "";
  inputHeight.value = "";
};

const handleKeyDown = (event) => {
  if (event.key === "Escape") {
    Modal.close();
    inputWeight.value = "";
    inputHeight.value = "";
  }
};

window.addEventListener("keydown", handleKeyDown);

