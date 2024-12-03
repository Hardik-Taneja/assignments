/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if (str1.length !== str2.length) return false; // If lengths are different, they can't be anagrams

  // Create arrays of size 26 to keep count of each letter
  let arr1 = new Array(26).fill(0);
  let arr2 = new Array(26).fill(0);

  for (let i = 0; i < str1.length; i++) {
    arr1[str1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    arr2[str2[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  // Compare each element of both arrays
  for (let i = 0; i < 26; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}
module.exports = isAnagram;
