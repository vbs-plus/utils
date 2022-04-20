import { isIDCard } from "../src/index";

test("isIDCard('hello')", () => {
  expect(isIDCard("hello")).toBeFalsy();
});

test("isIDCard('120101198001010012')", () => {
  expect(isIDCard("120101198001010012")).toBeTruthy();
});

test("isIDCard('12010119800101809X')", () => {
  expect(isIDCard("12010119800101809X")).toBeTruthy();
});

test("isIDCard('12010119800101833x')", () => {
  expect(isIDCard("12010119800101833x")).toBeTruthy();
});

test("isIDCard('12010119800101829')", () => {
  expect(isIDCard("12010119800101829")).toBeFalsy();
});
