const { REST, Routes, SlashCommandBuilder } = require('discord.js');

const commands = [
  new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!')
].map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(
        '1534398102516137994',
        'YOUR_SERVER_ID'
      ),
      { body: commands },
    );

    console.log('Successfully registered commands.');
  } catch (error) {
    console.error(error);
  }
})();
