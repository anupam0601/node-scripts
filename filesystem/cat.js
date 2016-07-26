// Creating a read stream:

require('fs').createReadStream(process.argv[2]).pipe(process.stdout);