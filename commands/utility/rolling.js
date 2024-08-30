const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('e4rzeluck')
		.setDescription('MYSTERIOUS FRUIT'),
	async execute(interaction) {
		await interaction.reply('WOW KITSUNE CONGRATULATIONS  !');
	},
};
