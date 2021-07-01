const fs = require('fs');
const dataFilePath = __dirname + '/data.json';

const db = {anime: []};

fs.readFile(dataFilePath, 'utf8', (err, data) => {
  try {
    data = JSON.parse(data);
  } catch (err) {
    console.log('error in data base');
  }
  if (data && data.anime) db.anime = data.anime;
});


exports.db = db;
