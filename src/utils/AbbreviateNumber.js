export const AbbreviateNumber = (number) => {
  if (typeof number !== "number" || isNaN(number)) {
    return "Invalid number"; // Return a fallback for invalid input
  }

  const units = ["", "K", "M", "B", "T", "Q", "P", "E"]; // Add more units as needed (Q: Quadrillion, P: Pentillion, E: Exa)

  let unitIndex = 0;
  let value = number;

  while (value >= 1000 && unitIndex < units.length - 1) {
    value /= 1000;
    unitIndex++;
  }

  // Check if the value is a whole number
  const isRounded = value % 1 === 0;

  const abbreviatedValue = isRounded
    ? `${value}${units[unitIndex]}`
    : `${value.toFixed(1)}${units[unitIndex]}`;

  return abbreviatedValue;
};
