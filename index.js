import { validate } from "jsonschema";

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
    this.message = message;
  }
}

export default function ok(data, schema) {
  const { errors } = validate(data, schema);
  if (!errors.length) return;
  const error = errors[0];
  throw new ValidationError(error.stack);
}
