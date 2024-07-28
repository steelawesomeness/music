const fs = require('fs');
const path = require('path');

const musicDir = path.join(__dirname, 'music');
const outputFilePath = path.join(__dirname, 'songs.json');

fs.readdir(musicDir, (err, files) => {
    if (err) {
        return console.error('Unable to read music directory:', err);
    }

    const songs = files.filter(file => file.endsWith('.mp3'));
    fs.writeFile(outputFilePath, JSON.stringify(songs, null, 2), err => {
        if (err) {
            return console.error('Unable to write songs.json file:', err);
        }
        console.log('songs.json has been generated successfully.');
    });
});

