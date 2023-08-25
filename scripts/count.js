import { renderNumber } from "./main.js";

let count = 0;

export const incrementTarget = () => {
  count++;
};

export const incrementCount = () => {
  return count;
};

const intervalIncrement = () => {
  setInterval(() => {
    incrementTarget();
    renderNumber();
  }, 1000);
};

intervalIncrement();
