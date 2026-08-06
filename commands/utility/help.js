const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Shows all available commands.'),

  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor('#5865F2')
      .setTitle('📘 BTA Bot Help')
      .setDescription('Welcome to **Blox Trade Academy**!')
      .addFields(
        {
          name: '🛠 Utility',
          value: '`/ping` - Check if the bot is online\n`/help` - Show this help menu'
        },
        {
          name: '💎 Trading (Coming Soon)',
          value: '`/value`\n`/wfl`\n`/trade`'
        }
      )
      .setFooter({ text: 'BTA Bot • Made for Blox Trade Academy' });

    await interaction.reply({ embeds: [embed] });
  }
};
