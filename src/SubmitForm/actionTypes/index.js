const getTypes = type => ({
  request: type + "_REQUEST",
  failure: type + "_FAILURE",
  success: type + "_SUCCESS"
});

const GET_FORM_FIELDS = getTypes("GET_JSON_FIELDS");
const CREATE_SUBMIT_FORM = getTypes("CREATE_SUBMIT_FORM");
const NOTIFICATION_REMOVE = "NOTIFICATION_REMOVE";

export { GET_FORM_FIELDS, CREATE_SUBMIT_FORM, NOTIFICATION_REMOVE };
