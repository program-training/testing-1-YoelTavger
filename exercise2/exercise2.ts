export function palindrome(str: string): boolean {
  const reversedStr: string = str.split("").reverse().join("");
  return str === reversedStr;
}
