import { isQQ } from "../src/index";

test("isQQ('2323333339')", () => {
  expect(isQQ("2323333339")).toBeTruthy();
});

test("isQQ('asdasd')", () => {
  expect(isQQ("asdasd")).toBeFalsy();
});

test("isQQ(1000)", () => {
  expect(isQQ(1000)).toBeFalsy();
});

test("isQQ(10000)", () => {
  expect(isQQ(10000)).toBeTruthy();
});
