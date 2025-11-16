var isDate = function (input) {
  if (input === undefined || input === null) return false;

  // Convert non-strings to string so new Date() never receives raw invalid tokens
  input = input.toString();

  const parsed = new Date(input);
  return !isNaN(parsed.getTime());
};

const input = prompt("Enter Date.");
alert(isDate(input));
