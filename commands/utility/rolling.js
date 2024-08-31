const { ButtonBuilder, ActionRowBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');
const fs = require('node:fs');
const path = require('path');

function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

async function reply(interaction, text) {
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

    let response;
    if(interaction.replied || interaction.deferred) {
        response = await interaction.editReply({
        content: result_text,
        components: [row],
        });
    } else {
        response = await interaction.reply({
        content: result_text,
        components: [row],
        });
    }

    const collectorFilter = i => i.user.id === interaction.user.id;

	const confirmation = await response.awaitMessageComponent({ filter: collectorFilter, time: 60_000 });
	
	if (confirmation.customId === 'ragain') {
		await reply(interaction, text);
	} else if (confirmation.customId === 'rnah') {
		await confirmation.update({ content: 'Alright, no worries!', components: [] });
	} else {
		await confirmation.update({ content: 'Invalid response', components: [] });
	}
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('e4rzeluck')
        .setDescription('MYSTERIOUS FRUIT'),
        
    async execute(interaction) {
        const filePath = path.join(__dirname, '../data/rolling.txt');

        let text = fs.readFileSync(filePath, 'utf8');
        text = text.split('\n');

        await reply(interaction, text);
    },
};
