const numeric = value =>
  /^-?\d+([.,]\d+)?$/.test(value) ? undefined : "Must contain only numbers";

const minLen = min => value =>
  value && value.length < min
    ? `Must have more than ${min} characters`
    : undefined;

const maxLen = max => value =>
  value && value.length > max
    ? `Must have less than ${max} characters`
    : undefined;

const required = value =>
  value || value === 0 || typeof value === "boolean"
    ? undefined
    : "Is required";

const validators = {
  numeric,
  minLen,
  maxLen,
  required
};

export default validators;
