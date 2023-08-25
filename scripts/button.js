import { rollD4, autoD4, rollD6, autoD6 } from "./count.js";
import { renderNumber } from "./main.js";

const d4Click = (clickEvent) => {
  if (clickEvent.target.id === "d4Button") {
    rollD4();
    renderNumber();
  }
};

export const renderD4 = () => {
  document.addEventListener("click", d4Click);
  return `<button class="button__increment" id="d4Button">Roll D4</button>`;
};

const d6Click = (clickEvent) => {
  if (clickEvent.target.id === "d6Button") {
    rollD6();
    renderNumber();
  }
};

export const renderD6 = () => {
  document.addEventListener("click", d6Click);
  return `<button id="d6Button">Roll D6</button>`;
};

const initiateAutoD4 = (clickEvent) => {
  if (clickEvent.target.id === "autoIncrementButton") {
    autoD4();
  }
};
export const renderAutoD4 = () => {
  document.addEventListener("click", initiateAutoD4);
  return `<button class="button__auto" id="autoIncrementButton">D4 Auto-roller</button>`;
};

const initiateAutoD6 = (clickEvent) => {
  if (clickEvent.target.id === "autoD6Button") {
    autoD6();
  }
};

export const renderAutoD6 = (clickEvent) => {
  document.addEventListener("click", initiateAutoD6);
  return `<button id="autoD6Button"> D6 Auto-Roller </button>`;
};
