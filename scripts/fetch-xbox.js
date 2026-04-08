const https = require('https');
const fs = require('fs');
const path = require('path');

const keysPath = path.join(__dirname, '../themes/ta-portfolio/src/js/keys.json');
const keys = JSON.parse(fs.readFileSync(keysPath, 'utf8'));
const apiKey = process.env.XBOX_API_KEY || keys.xboxApiKey;

const options = {
  hostname: 'xbl.io',
  path: '/api/v2/player/titleHistory',
  headers: { 'X-Authorization': apiKey }
};

https.get(options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      const game = json.content.titles
        .filter(t => t.type === 'Game' && t.titleHistory && t.titleHistory.lastTimePlayed)
        .sort((a, b) => new Date(b.titleHistory.lastTimePlayed) - new Date(a.titleHistory.lastTimePlayed))[0];
      const output = {
        name: game.name,
        titleId: game.titleId,
        displayImage: game.displayImage
      };
      fs.writeFileSync(path.join(__dirname, '../data/xbox.json'), JSON.stringify(output, null, 2));
      console.log(`Xbox: last played "${game.name}"`);
    } catch (e) {
      console.warn(`Xbox: failed to parse response — ${e.message}`);
    }
  });
}).on('error', err => {
  console.warn(`Xbox: failed to fetch data — ${err.message}`);
});
