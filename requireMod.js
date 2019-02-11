// Require 'http-functions' module
const getHTML = require('./http-functions');

// Initialize variable and set node https module options
  // Option 1 - URL
  // Option 2 - Path
const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

// Invoke function 'getHTML'
getHTML(requestOptions, printHTML);

// Declare function 'printHTML' and print to standard output
function printHTML (html) {
  console.log(html);
};