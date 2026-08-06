const fs = require('fs');
const path = require('path');

module.exports = (client) => {
    client.commands = new Map();

    const foldersPath = path.join(__dirname, '..', 'commands');
    const folders = fs.readdirSync(foldersPath);

    for (const folder of folders) {
        const commandsPath = path.join(foldersPath, folder);
        const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

        for (const file of commandFiles) {
            const filePath = path.join(commandsPath, file);
            const command = require(filePath);

            client.commands.set(command.data.name, command);
        }
    }

    console.log('✅ Commands Loaded');
};
 
