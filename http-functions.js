const https = require('https');

module.exports = function getHTML (options, callback) {
/* Your code here */

  https.get(options, function (response) {

    // Check server response via HTTP status code
    // If server response anything other than '200 OK' print to standard output the http status code
    if (response.statusCode !== 200) {
      console.log('Error status code ' + response.statusCode);
      return;
    };

    // Set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // Initialize empty variable to host empty string
    let emptyVariable = '';

    // Add 'data' chunks to 'emptyVar' as it is received
      // Label response data as 'chunk'
    response.on('data', (chunk) => {
      emptyVariable += chunk;
    });

    // On end of data stream print 'data' to standard output 
    response.on('end', () => { 
      callback(emptyVariable);
    });

  });

};