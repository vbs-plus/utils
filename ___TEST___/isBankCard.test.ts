import { isBankCard } from "../src/index";

test("isQQ('6222222222222222222')", () => {
  expect(isBankCard("6222222222222222222")).toBeTruthy();
});

test("isQQ('asdasd')", () => {
  expect(isBankCard("asdasd")).toBeFalsy();
});

test("isQQ(1000)", () => {
  expect(isBankCard(1000)).toBeFalsy();
});

test("isQQ(10000)", () => {
  expect(isBankCard(10000)).toBeFalsy();
});
