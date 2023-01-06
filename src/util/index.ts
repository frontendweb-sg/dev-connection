const getError = (name: string, errors: object = {}, touched: object = {}) => {
  return errors?.[name as keyof typeof errors] &&
    touched[name as keyof typeof touched]
    ? errors[name as keyof typeof errors]
    : null;
};

const isValidJson = (json: string) => {
  let jsons = json;
  try {
    jsons = JSON.parse(jsons);
  } catch (e) {
    return false;
  }
  if (typeof jsons === "object" && jsons !== null) {
    return true;
  }
  return false;
};

export { isValidJson, getError };
