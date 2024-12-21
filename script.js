function checkPalindrom(string) {
  let str = string.toLowerCase();
  let reverseString = str.split('').reverse().join('');
  if (reverseString === str) {
    return true;
  } else {
    return false;
  }
}

console.log(checkPalindrom('Mom'));
