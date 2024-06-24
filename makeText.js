/** Command-line tool to generate Markov text. */

const fs = require('fs');
const axios = require('axios');
const { MarkovMachine } = require('./markov');

async function textFromFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf-8');
        let markMachine = new MarkovMachine(content);
        console.log(markMachine.makeText());
    } catch (error) {
        console.error("Error reading file: ", error);
        process.exit(1);
    }
}

async function textFromURL(url) {
    try {
        let response = await axios.get(url);
        let markMachine = newMarkovMachine(response.data);
        console.log(markMachine.makeText());
    } catch (err) {
        console.error("Error retreiving URL: ", error);
        process.exit(1);
    }
}

let [method, path] = process.argv.slice(2);

if (method === 'file') {
    textFromFile(path);
} else if (method === 'url') {
    textFromURL(path);
} else {
    console.error("Unknown method. Try a file or url.");
    process.exit(1);
}