const fs = require('fs');
const Client = require('ftp');

const client = new Client();

client.connect({
  host: 'http://ebooks.ntechdevelopers.com/technical',
  connTimeout: 20000,
});

client.on('ready', function () {
  client.list((error, array) => {
    if (error) {
      console.log(error)
    }
    console.log(array)
  })
});

