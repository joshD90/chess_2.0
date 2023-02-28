import { getText } from "./getText";
test("test to see whether we are interacting with dom", () => {
  expect(getText()).toBeDefined();
  expect(getText()?.innerText).toEqual("James");
});
