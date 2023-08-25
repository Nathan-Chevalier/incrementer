import { diceRoller } from "./dice.js";
import { renderNumber } from "./main.js";

let count = 0;

export const rollD4 = () => {
  count += diceRoller(1, 4);
};

export const rollD6 = () => {
  count += diceRoller(1, 6);
};

export const incrementCount = () => {
  return count;
};

let intervalTime = 0;

export const autoD4 = () => {
  setInterval(() => {
    rollD4();
    renderNumber();
    intervalTime += 1;
  }, 1000);
};

export const autoD6 = () => {
  setInterval(() => {
    rollD6();
    renderNumber();
  }, 1000);
};
