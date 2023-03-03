const {SlashCommandBuilder} = require("@discordjs/builders");
const {MessageEmbed,MessageAttachment,MessageActionRow,MessageButton,PermissionFlagsBits} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ren_info')
    .setDescription('Sends message to hold Embed Message and button menu for REN information')
    .addChannelOption(option => option.setName('input')
        .setDescription('Channel to put REN Info into')
        .setRequired(true)),
  async execute(interaction, clientm) {
    const test = interaction.options.getChannel('input', true);
    const attachment = new MessageAttachment('./assets/EsportsPanel_REN_B.png')
    const mainEmbed = new MessageEmbed()
        .setColor('FF0000')
        .setImage("attachment://EsportsPanel_REN_B.png")
        .setTitle('Redbird Esports Network')
        .setURL("https://campusrecreation.illinoisstate.edu/esports/career/")
        .setDescription("The esports and gaming business is growing fast. The Redbird Esports Network (REN) gives you hands-on experience in the exciting gaming industry. REN is a student-led mock entrepreneurial start-up. You'll use the skills you learn in the classroom and apply them to the real world. There are numerous ways to get involved.");

    const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setLabel('Events and Outreach')
                .setStyle('SECONDARY')
                .setCustomId('EO'),
            new MessageButton()
                .setLabel('Social Media and Marketing')
                .setStyle('SECONDARY')
                .setCustomId('SMM'),
                );
    const row2 = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setLabel('Technology and Digital Development')
                .setStyle('SECONDARY')
                .setCustomId('TDD'),
            new MessageButton()
                .setLabel('Broadcasting and Production')
                .setStyle('SECONDARY')
                .setCustomId('BP'),
                );
    test.send(/*compoenets/buttons*/{embeds: [mainEmbed], components: [row,row2], files: [attachment] })
    await interaction.reply('Adding REN Information!');

  },
};