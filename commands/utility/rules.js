const { SlashCommandBuilder } = require('discord.js'),
        fs = require('node:fs'),
        path = require('path');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rules')
		.setDescription('Replies with rules'),

	async execute(interaction) {

        const filePath = path.join(__dirname, '../data/rules.txt');
        const rules_data = fs.readFileSync(filePath, 'utf8');
        
        //console.log(rules_data);
		await interaction.reply(rules_data);
	},
};
