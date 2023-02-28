import sizeByWindow from "./sizeByWindow";

export const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
sizeByWindow(canvas);

export const ctx = canvas.getContext("2d");
