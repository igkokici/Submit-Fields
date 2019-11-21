const transform = {
  formInputs: (formInputs = []) =>
    formInputs &&
    formInputs.map(input => ({
      type: input.type,
      label: input.label,
      name: input.name,
      placeholder: input.placeholder,
      options:
        input.options &&
        input.options.map(option => ({
          value: option.value,
          label: option.label
        }))
    }))
};

export default transform;
