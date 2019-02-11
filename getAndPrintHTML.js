// Initialze variable and set it's value to require node https module
  // while https is built-in to Node, it is a module, so it must be required
const https = require('https');

// Declare function 'getAndPrintHTMLChunks'
function getAndPrintHTML () {

  // Initialize variable and set node https module options
    // Option 1 - URL
    // Option 2 - Path
  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */

  
  // 
  https.get(requestOptions, function (response) {

      // Check server response via HTTP status code
        //If server response anything other than '200 OK' print to standard output the http status code
      if (response.statusCode !== 200) {
          console.log('Error status code: ' + response.statusCode);
          return;
      }

      // Set encoding of received data to UTF-8
      response.setEncoding('utf-8');

      // Initialize empty variable to host empty string
      var emptyVar = '';

      // Add 'data' chunks to 'emptyVar' as it is received
        // Label response data as 'chunk'
      response.on('data', (chunk) => {
          emptyVar += chunk;
      });

      // On end of data stream print 'data' to standard output 
      response.on('end', () => {
        console.log(emptyVar);
      });
  });

};

// Invoke function 'getAndPrintHTML'
getAndPrintHTML();