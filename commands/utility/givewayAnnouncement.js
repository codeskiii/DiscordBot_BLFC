const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rungiveway')
        .setDescription('starts giveway')

        .addStringOption(option => 
            option.setName('tittle')
                .setDescription('tittle')
                .setRequired(true))

        .addStringOption(option => 
            option.setName('description')
                .setDescription('description')
                .setRequired(true))

        .addStringOption(option => 
            option.setName('when')
                .setDescription('when')
                .setRequired(true))
        ,

    async execute(interaction) {
        const tittle = interaction.options.getString('tittle');
        const description = interaction.options.getString('description');
        const when = interaction.options.getString('when');

        const message = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle(tittle)
            .addFields(
                { name: 'Description', value: description, },
                { name: 'When', value: when, },
            )
            .setTimestamp();
    },
};