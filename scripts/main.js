import { renderD4, renderAutoD4, renderD6, renderAutoD6 } from "./button.js";
import { incrementCount } from "./count.js";

const renderButton = () => {
  const buttonContainer = document.getElementById("buttonContainer");
  const d4Button = renderD4();
  const d6Button = renderD6();
  const autoD4Button = renderAutoD4();
  const autoD6Button = renderAutoD6();
  let outputHTML = `
                    <div>
                      <div>
                        ${d4Button}
                      </div> 
                      <div>
                        ${autoD4Button}
                      </div>
                    </div>
                    <div>
                      <div>
                        ${d6Button}
                      </div>
                      <div>
                        ${autoD6Button}
                    </div>
                    `;

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
