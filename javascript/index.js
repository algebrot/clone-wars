const fs = require('fs');
const readline = require('readline');

async function processFile(filePath) {
  const fileStream = fs.createReadStream(filePath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity // to handle different kinds of line endings
  });

  const array = [];

  for await (const line of rl) {
    const row = line.split(',');
    array.push(row);
  }

  return array;
}

processFile('quotes.csv')
  .then(data => {
    console.log('Parsed data:', data);
  })
  .catch(err => {
    console.log('Error:', err);
  });