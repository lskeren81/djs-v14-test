const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Check Ping'),
    async execute(interaction) {
        await interaction.reply(`pong`);
    },
};