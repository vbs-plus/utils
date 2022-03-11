import { parseUrl } from "../src/index";

test("parseUrl('xxx')", () => {
  expect(parseUrl("xxx")).toBeNull();
});

test("parseUrl('http://localhost:8080/settlement/upload?key=1')", () => {
  expect(parseUrl("http://localhost:8080/settlement/upload?key=1")).toEqual({
    hash: "",
    host: "localhost:8080",
    hostname: "localhost",
    href: "http://localhost:8080/settlement/upload?key=1",
    origin: "http://localhost:8080",
    pathname: "/settlement/upload",
    port: ":8080",
    protocol: "http:",
    search: "?key=1",
  });
});
