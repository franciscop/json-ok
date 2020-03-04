import ok from "./index.js";

describe("json-ok", () => {
  it("validates correctly", () => {
    expect(() => ok(24, { type: "number" })).not.toThrow();
  });

  it("throws if not following the schema", () => {
    const data = 24;
    const schema = { type: "string" };
    expect(() => ok(data, schema)).toThrow();
  });
});
