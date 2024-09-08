const { SlashCommandBuilder, EmbedBuilder } = require('discord.js'),
        fs = require('node:fs'),
        path = require('path');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rules')
		.setDescription('Replies with rules'),

	async execute(interaction) {

        const filePath = path.join(__dirname, '../data/rules.txt');
        const rules_data = fs.readFileSync(filePath, 'utf8');
        
		const replyMessage = new EmbedBuilder()
		    .setColor(0x0099FF)
			.setTitle('ZASADY BLOX FRUIT COMMUNITY')
			.addFields(
				{ name: 'rules', value: rules_data }
			)
			.setTimestamp();

		await interaction.reply({embeds: [replyMessage]});
	},
};
