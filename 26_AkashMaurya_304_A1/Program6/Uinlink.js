const fs = require('fs').promises;

async function deleteFile() {
    try {
        await fs.unlink('./Program4/sample.txt');
        console.log('Deleted using fs.promises');
    } catch (err) {
        console.error('Error:', err.message);
    }
}

deleteFile();
