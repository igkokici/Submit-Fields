const transform = {
  formInputs: (formInputs = []) =>
    formInputs &&
    formInputs.map(input => ({
      type: input.type,
      label: input.label,
      name: input.name,
      placeholder: input.placeholder,
      component: input.component,
      rules:
        input.rules &&
        Object.assign(
          {},
          ...input.rules.split("|").map(rule => {
            const ruleValues = rule.split(":");
            return { [ruleValues[0]]: ruleValues[ruleValues.length - 1] };
          })
        ),
      options:
        input.options &&
        input.options.map(option => ({
          value: option.value,
          label: option.label
        }))
    }))
};

export default transform;
