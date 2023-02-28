import { h1 } from "./getH1";

export const getText = () => {
  const heading = document.getElementById("testH1") as HTMLHeadingElement;

  return heading;
};
