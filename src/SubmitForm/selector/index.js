import { createSelector } from "reselect";
import transform from "./transform";

const getFields = state => state.images;

const totalFields = createSelector(getFields, fields => {
  return transform.fields(fields);
});

export { totalFields };
