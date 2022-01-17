import { isPhone } from '../src/index';

test("isPhone('hello')", () => {
  expect(isPhone('hello')).toBeFalsy();
});

test("isPhone('18866669999')", () => {
  expect(isPhone('18866669999')).toBeTruthy();
});

test("isPhone('12355558888')", () => {
  expect(isPhone('12355558888')).toBeFalsy();
});

test("isPhone(18866669999)", () => {
  expect(isPhone('18866669999')).toBeTruthy();
});

test("isPhone(12355558888)", () => {
  expect(isPhone('12355558888')).toBeFalsy();
});
