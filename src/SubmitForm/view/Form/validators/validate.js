const minLen = (min, value) =>
  value && value.length < min
    ? `Must have more than ${min} characters`
    : undefined;

const maxLen = (max, value) =>
  value && value.length > max
    ? `Must have less than ${max} characters`
    : undefined;

export { minLen, maxLen };
