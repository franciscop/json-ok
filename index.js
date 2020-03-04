import { validate } from "jsonschema";

export default function ok(data, schema) {
  const { errors } = validate(data, schema);
  if (!errors.length) return;
  const error = errors[0];
  throw new Error(error.stack);
}
