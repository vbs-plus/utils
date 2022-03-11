import { isEmail } from "../src/index";

test("isEmail('123@11.com')", () => {
  expect(isEmail("123@11.com")).toBeTruthy();
});

test("isEmail('44444')", () => {
  expect(isEmail("44444")).toBeFalsy();
});

test("isEmail(@11.com)", () => {
  expect(isEmail("@11.com")).toBeFalsy();
});

test("isEmail(test@33.cn.com.xx.cn)", () => {
  expect(isEmail("test@33.cn.com.xx.cn")).toBeTruthy();
});
