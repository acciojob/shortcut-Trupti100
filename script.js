function shortcut(str1, str2) {
  // Check if either of the input strings is empty
  if (str1.length === 0 || str2.length === 0) {
    return '';
  }

  // Get the initial letters of the input strings
  const initialLetters = str1.charAt(0) + str2.charAt(0);

  // Return the initial letters in uppercase
  return initialLetters.toUpperCase();
}

// Examples
console.log(shortcut("Amnesty", "International")); // Output: 'AI'
console.log(shortcut("Hello", "world"));           // Output: 'Hw'
console.log(shortcut("", "International"));        // Output: ''
console.log(shortcut("Amnesty", ""));              // Output: ''
