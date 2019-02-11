// Require 'http-functions' module
const getHTML = require('../http-functions');

// Initialize variable and set node https module options
  // Option 1 - URL
  // Option 2 - Path
const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

// Invoke function 'getHTML'
getHTML(requestOptions, printReverse);

// Declare function 'printReverse' and print to standard output
function printReverse (html) {
  console.log(html.split("").reverse().join(""));
};
