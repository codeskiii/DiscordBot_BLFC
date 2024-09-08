const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('try out'),
	async execute(interaction) {
		const replyMessage = new EmbedBuilder()
		    .setColor(0x0099FF)
			.setTitle('Ping-Pong!')
			.addFields(
				{ name: 'Response', value: 'Pong' }
			)
			.setTimestamp();
		await interaction.reply({embeds: [replyMessage]});
	},
};
