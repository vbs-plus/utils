import { isCard } from "../src/index";

test("isCard('hello')", () => {
  expect(isCard("hello")).toBeFalsy();
});

test("isCard('120101198001010012')", () => {
  expect(isCard("120101198001010012")).toBeTruthy();
});

test("isCard('12010119800101809X')", () => {
  expect(isCard("12010119800101809X")).toBeTruthy();
});

test("isCard('12010119800101833x')", () => {
  expect(isCard("12010119800101833x")).toBeTruthy();
});

test("isCard('12010119800101829')", () => {
  expect(isCard("12010119800101829")).toBeFalsy();
});
