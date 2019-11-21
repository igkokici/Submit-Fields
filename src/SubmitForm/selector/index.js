import { createSelector } from "reselect";
import transform from "./transform";

const getFields = state => state.form_inputs;

const totalFields = createSelector(getFields, fields => {
  return transform.formInputs(fields);
});

export { totalFields };
