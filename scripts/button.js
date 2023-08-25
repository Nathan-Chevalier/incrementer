import { incrementTarget } from "./count.js";
import { renderNumber } from "./main.js";

const incrementClick = (clickEvent) => {
  if (clickEvent.target.id === "incrementButton") {
    // // ? Creates a "cursor" div element
    // const cursor = document.createElement("div");
    // // ? Adds "flying-cursor" as the class of the cursor
    // cursor.classList.add("flying-cursor");
    // // ? Calculates the client's X & Y position, and sets an offset property based on this
    // cursor.style.setProperty("--offsetX", `${clickEvent.clientX}px`);
    // cursor.style.setProperty("--offsetY", `${clickEvent.clientY}px`);
    // // ? Adds the cursor element to the DOM
    // document.body.appendChild(cursor);
    // // ? Listens for the animation to end, removes the cursor div
    // cursor.addEventListener("animationend", function () {
    //   cursor.remove();
    // });
    incrementTarget();
    renderNumber();
  }
};

export const renderClicker = () => {
  document.addEventListener("click", incrementClick);
  return `<button class="button__increment" id="incrementButton">Click</button>`;
};
