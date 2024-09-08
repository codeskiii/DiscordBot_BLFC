const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wannatrade')
		.setDescription('trade with people')
        .addStringOption(
            option =>
                option
                    .setName('iwant')
                    .setDescription('what do you want to get')
                    .setRequired(true))
        .addStringOption(
            option =>
                option
                    .setName('icangive') 
                    .setDescription('what do you want to give')
                    .setRequired(false))
        ,

	async execute(interaction) {
        const target = interaction.options.getString('iwant');
		const back = interaction.options.getString('icangive') ?? 'No item provided';

		const replyMessage = new EmbedBuilder()
		    .setColor(0x0099FF)
			.setTitle('Trade Request!')
			.addFields(
				{ name: 'What I want', value: target },
                { name: 'What I can give', value: back },
                { name: 'User', value: interaction.user.toString() }
            )
			.setTimestamp();
            
		await interaction.reply({embeds: [replyMessage]});
	},
};
