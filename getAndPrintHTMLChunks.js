// Initialze variable and set it's value to require node https module
  // while https is built-in to Node, it is a module, so it must be required
const https = require('https');

// Declare function 'getAndPrintHTMLChunks'
function getAndPrintHTMLChunks () {

  // Initialize variable and set node https module options
    // Option 1 - URL
    // Option 2 - Path
  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */

  https.get(requestOptions, function (response) {
      
    // Set encoding of received data to UTF-8
    response.setEncoding('utf8');

      // Callback function is invoked when a 'data' chunk is received
      // Output data as it comes in.
        // Label response data as 'chunk'
        // Print chunk.length
      response.on('data', function (data) {
          console.log('Chunk Received. Length:', data.length, 'Kb', "\n");
      });

  }

  )};

// Invoke function 'getAndPrintHTMLChunks' 
getAndPrintHTMLChunks();

