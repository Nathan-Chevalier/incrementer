import { renderClicker } from "./button.js";
import { incrementCount } from "./count.js";

const renderButton = () => {
  const buttonContainer = document.getElementById("buttonContainer");
  const incrementerButton = renderClicker();
  const outputHTML = incrementerButton;
  buttonContainer.innerHTML = outputHTML;
};

export const renderNumber = () => {
  const numberContainer = document.getElementById("numberContainer");
  const numberDisplay = incrementCount();
  const outputHTML = numberDisplay;
  numberContainer.innerHTML = outputHTML;
};

renderButton();
renderNumber();
