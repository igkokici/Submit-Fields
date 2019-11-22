import { minLen, maxLen } from "./validate";

const validate = (data, rules, callback, setErrors) => {
  let errors = {};
  Object.keys(rules).map(name => {
    if (data[name]) {
      if (rules[name] && rules[name].min) {
        let error = minLen(rules[name].min, data[name]);
        if (error) errors[name] = error;
      }
      if (rules[name] && rules[name].max) {
        let error = maxLen(rules[name].max, data[name]);
        if (error) errors[name] = error;
      }
    }
    return {};
  });

  return Object.keys(errors).length === 0 ? callback(data) : setErrors(errors);
};

export default validate;
