const { ButtonBuilder, ActionRowBuilder, ButtonStyle, SlashCommandBuilder, Component  } = require('discord.js'),
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

		const rollAgain = new ButtonBuilder()
			.setCustomId('ragain')
			.setLabel('Roll again?')
			.setStyle(ButtonStyle.Primary);

		const nah = new ButtonBuilder()
			.setCustomId('rnah')
			.setLabel('nah')
			.setStyle(ButtonStyle.Danger);

		const row = new ActionRowBuilder()
			.addComponents(rollAgain, nah);

		await interaction.reply({
			content: result_text,
			components: [row],
		});

		const collectorFilter = i => i.user.id === interaction.user.id;

		try {
			const confirmation = await response.awaitMessageComponent({ filter: collectorFilter, time: 60_000 });
			if (confirmation.customId === 'ragain') {
				let result = randomChoice(text);
				let result_text = `WOW YOU GOT ${result}`;
				await interaction.editReply(result_text);
			}
			else if (confirmation.customId === 'rnah') {
                await interaction.editReply({ content: 'Alright, no worries!', components: [] });
            } else {
                await interaction.editReply({ content: 'Invalid response, cancelling', components: [] });
            }
		} catch (e) {
			await interaction.editReply({ content: 'Confirmation not received within 1 minute, cancelling', components: [] });
		}

	},
};
