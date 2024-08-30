const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mewing')
		.setDescription('who is the real sigma?'),
	async execute(interaction) {
		await interaction.reply('*mewing*');
	},
};
