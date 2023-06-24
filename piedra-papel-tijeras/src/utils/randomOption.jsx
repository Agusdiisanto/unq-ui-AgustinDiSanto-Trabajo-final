import { elements } from "./Elements";

export const randomOption = () => {
  const randomIndex = Math.floor(Math.random() * elements.length);
  return elements[randomIndex];
};