function reverseString(str) {
   if (typeof(str) !== 'string') {
      return undefined;
   }
   return str.split('').reverse().join('');
}

// module.exports = reverseString;
export { reverseString }
