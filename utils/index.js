// convert numbers
export function toFarsiNumber(n) {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  return n
    .toString()
    .split("")
    .map((x) => farsiDigits[x])
    .join("");
}

export function replace(n) {
  const number = parseInt(
    n.replace(/[۰-۹]/g, (d) => String.fromCharCode(d.charCodeAt(0) - 1728))
  );
  const separatedNumbers = number.toLocaleString("fa-IR");
  return separatedNumbers;
}
