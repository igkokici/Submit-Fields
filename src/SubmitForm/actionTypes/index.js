const getTypes = type => ({
  request: type + "_REQUEST",
  failure: type + "_FAILURE",
  success: type + "_SUCCESS"
});

const GET_JSON_FIELDS = getTypes("GET_JSON_FIELDS");

export { GET_JSON_FIELDS };
