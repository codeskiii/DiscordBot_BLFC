const { SlashCommandBuilder } = require('discord.js'),
	fs = require('node:fs'),
	path = require('path');

function randomChoice(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('e4rzeluck')
		.setDescription('MYSTERIOUS FRUIT'),
	async execute(interaction) {
		const filePath = path.join(__dirname, '../data/rolling.txt');

		let text = fs.readFileSync(filePath, 'utf8');
		text = text.split('\n');

		let result = randomChoice(text);
		let result_text = `WOW YOU GOT ${result}`;

		await interaction.reply(result_text);
	},
};
