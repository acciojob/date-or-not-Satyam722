var isDate = function (input) {
  // If input is already a Date object
  if (input instanceof Date) {
    return !isNaN(input.getTime());
  }

  // Try converting other types (string, number, etc.) into a Date
  const parsed = new Date(input);

  return !isNaN(parsed.getTime());
};
not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
