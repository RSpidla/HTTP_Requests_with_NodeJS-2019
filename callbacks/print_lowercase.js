// Require 'http-functions' module
const getHTML = require('../http-functions');

// Initialize variable and set node https module options
  // Option 1 - URL
  // Option 2 - Path
const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

// Invoke function 'getHTML'
getHTML(requestOptions, printLowerCase);

// Declare function 'printLowerCase' and print to standard output
function printLowerCase (html) {
  console.log(html.toLowerCase());
};
