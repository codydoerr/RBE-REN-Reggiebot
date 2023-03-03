const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageAttachment } = require('discord.js');
const emojiRolesJSON = require('../emojiRoles.json');
let reactionMessageCollector
module.exports = {
    data: new SlashCommandBuilder()
        .setName('za_reactrolesetup')
        .setDescription('Select role and menu name')
        .addChannelOption(option => option.setName('channel')
            .setDescription("Channel to post the discord roles")
            .setRequired(true))
        .addStringOption(option => option.setName('server')
            .setDescription("the server role menu ur posting")
            .setRequired(true)),
    async execute(interaction, clientm) {
        //const emojiRoles = JSON.parse(emojiRolesJSON);
        const emojiCache = interaction.guild.emojis.cache
        const clubGameFanEmojis = [
            emojiCache.find(emoji => emoji.name === 'APEXfan'),
            emojiCache.find(emoji => emoji.name === 'CODfan'),
            emojiCache.find(emoji => emoji.name === 'CSfan'),
            emojiCache.find(emoji => emoji.name === 'DnDfan'),
            emojiCache.find(emoji => emoji.name === 'FFXIVfan'),
            emojiCache.find(emoji => emoji.name === 'SMASHfan'),
            emojiCache.find(emoji => emoji.name === 'HALOfan'),
            emojiCache.find(emoji => emoji.name === 'LOLfan'),
            emojiCache.find(emoji => emoji.name === 'OWfan'),
            emojiCache.find(emoji => emoji.name === 'R6fan'),
            emojiCache.find(emoji => emoji.name === 'RLfan'),
            emojiCache.find(emoji => emoji.name === 'VALORANTfan'),
        ]
        const otherGameFanEmojis = [
            emojiCache.find(emoji => emoji.name === 'FNfan'),
            emojiCache.find(emoji => emoji.name === 'PUBGfan'),
            emojiCache.find(emoji => emoji.name === 'TARKOVfan'),
            emojiCache.find(emoji => emoji.name === 'GEARSfan'),
            emojiCache.find(emoji => emoji.name === 'NBA2Kfan'),
            emojiCache.find(emoji => emoji.name === 'MADDENfan'),
            emojiCache.find(emoji => emoji.name === 'FIFAfan'),
            emojiCache.find(emoji => emoji.name === 'HSfan'),
            emojiCache.find(emoji => emoji.name === 'MTGfan'),
            emojiCache.find(emoji => emoji.name === 'SMITEfan'),
            emojiCache.find(emoji => emoji.name === 'DOTAfan'),
            emojiCache.find(emoji => emoji.name === 'YUGIOHfan'),
            emojiCache.find(emoji => emoji.name === 'AMONGUSfan'),
            emojiCache.find(emoji => emoji.name === 'PokeGOfan'),
            emojiCache.find(emoji => emoji.name === 'OTHERfan')
        ]
        const interestsEmojis = [
            emojiCache.find(emoji => emoji.name === 'ANIMEfan'),
            emojiCache.find(emoji => emoji.name === 'BOARDfan'),
        ]
        const platformEmojis = [
            emojiCache.find(emoji => emoji.name === 'XBOXfan'),
            emojiCache.find(emoji => emoji.name === 'PSfan'),
            emojiCache.find(emoji => emoji.name === 'SWITCHfan'),
            emojiCache.find(emoji => emoji.name === 'PCfan'),
            emojiCache.find(emoji => emoji.name === 'MOBILEfan'),
            emojiCache.find(emoji => emoji.name === 'RETROfan'),
        ]
        const pronounEmojis = [emojiCache.find(emoji => emoji.name === 'hehim'),
        emojiCache.find(emoji => emoji.name === 'sheher'),
        emojiCache.find(emoji => emoji.name === 'theythem'),
        emojiCache.find(emoji => emoji.name === 'askme')
        ]
        const livingEmojis = ['🇭',
            '🇲',
            '🇹',
            '🇨',
            '🇼',
            '🇴'
        ]
        const rankHaloEmojis = [emojiCache.find(emoji => emoji.name === 'OnyxRank'),
        emojiCache.find(emoji => emoji.name === 'DiamondRank'),
        emojiCache.find(emoji => emoji.name === 'PlatinumRank'),
        emojiCache.find(emoji => emoji.name === 'GoldRank'),
        emojiCache.find(emoji => emoji.name === 'SilverRank'),
        emojiCache.find(emoji => emoji.name === 'BronzeRank')
        ]
        const rankRLEmojis = [emojiCache.find(emoji => emoji.name === 'RLBronze'),
        emojiCache.find(emoji => emoji.name === 'RLSilver'),
        emojiCache.find(emoji => emoji.name === 'RLGold'),
        emojiCache.find(emoji => emoji.name === 'RLPlat'),
        emojiCache.find(emoji => emoji.name === 'RLDiamond'),
        emojiCache.find(emoji => emoji.name === 'RLChamp'),
        emojiCache.find(emoji => emoji.name === 'RLGC'),
        emojiCache.find(emoji => emoji.name === 'RLSSL')
        ]
        const socialEmojis = [emojiCache.find(emoji => emoji.name === 'twitter'),
        emojiCache.find(emoji => emoji.name === 'youtube'),
        emojiCache.find(emoji => emoji.name === 'twitch'),
        ]
        const clubEmojis = ['✅',
        ]
        const mainRoleEmojis = ['🏅', '🎙️'
        ]
        const yearEmojis = ['1️⃣',
            '2️⃣',
            '3️⃣',
            '4️⃣',
            '🎓',
        ]
        const positionEmojis = ['✅',
        ]
        const roleFFXIVEmojis = ['✅',
        ]
        const serverTalentMCEmojis = ['✅',
        ]
        const serverTypeMCEmojis = ['✅',
        ]
        const notificationEmojis = ['✅',
        ]
        const overwatchNotifEmojis = [emojiCache.find(emoji => emoji.name === 'twitter'),
        emojiCache.find(emoji => emoji.name === 'pickup'),
        emojiCache.find(emoji => emoji.name === 'twitch'),
        ]
        const arenaEmojis = [
            emojiCache.find(emoji => emoji.name === 'RedbirdEHead3'),
        ]

        const games = new MessageEmbed()
            .setColor('CE1126')
            .setTitle(`Select the games you play from our Redbird Gaming Clubs:`)
            .setDescription(`*(games marked with ${emojiCache.find(emoji => emoji.name === 'redbirdred')} have varsity teams)*

        ${emojiCache.find(emoji => emoji.name === 'APEXfan')} - Redbird Apex Legends Club
        ${emojiCache.find(emoji => emoji.name === 'CODfan')} - Redbird Call of Duty Club
        ${emojiCache.find(emoji => emoji.name === 'CSfan')} - Redbird CS:GO Club
        ${emojiCache.find(emoji => emoji.name === 'DnDfan')} - Redbird Dungeons and Dragons Club
        ${emojiCache.find(emoji => emoji.name === 'FFXIVfan')} - Redbird FFXIV Club
        ${emojiCache.find(emoji => emoji.name === 'SMASHfan')} - Redbird Fighting Game Club
        ${emojiCache.find(emoji => emoji.name === 'HALOfan')} - Redbird Halo Club
        ${emojiCache.find(emoji => emoji.name === 'LOLfan')} - Redbird League of Legends Club ${emojiCache.find(emoji => emoji.name === 'redbirdred')}
        ${emojiCache.find(emoji => emoji.name === 'OWfan')} - Redbird Overwatch Club ${emojiCache.find(emoji => emoji.name === 'redbirdred')}
        ${emojiCache.find(emoji => emoji.name === 'R6fan')} - Redbird Rainbow 6 Siege Club
        ${emojiCache.find(emoji => emoji.name === 'RLfan')} - Redbird Rocket League Club ${emojiCache.find(emoji => emoji.name === 'redbirdred')}
        ${emojiCache.find(emoji => emoji.name === 'VALORANTfan')} - Redbird VALORANT Club
        `);
        const otherGames = new MessageEmbed()
            .setColor('CE1126')
            .setTitle(`Select the games you play that are talked about in our server:`)
            .setDescription(` 
        **Shooters**
        ${emojiCache.find(emoji => emoji.name === 'FNfan')} - Fortnite
        ${emojiCache.find(emoji => emoji.name === 'PUBGfan')} - PlayerUnknown's Battlegrounds
        ${emojiCache.find(emoji => emoji.name === 'TARKOVfan')} - Escape from Tarkov
        ${emojiCache.find(emoji => emoji.name === 'GEARSfan')} - Gears of War
        
        **Sports**
        ${emojiCache.find(emoji => emoji.name === 'NBA2Kfan')} - NBA 2K
        ${emojiCache.find(emoji => emoji.name === 'MADDENfan')} - Madden
        ${emojiCache.find(emoji => emoji.name === 'FIFAfan')} - FIFA
        
        **Card Games**
        ${emojiCache.find(emoji => emoji.name === 'HSfan')} - Hearthstone
        ${emojiCache.find(emoji => emoji.name === 'MTGfan')} - Magic: The Gathering
        ${emojiCache.find(emoji => emoji.name === 'YUGIOHfan')} - Yu-Gi-Oh!
        
        **MOBA**
        ${emojiCache.find(emoji => emoji.name === 'SMITEfan')} - Smite
        ${emojiCache.find(emoji => emoji.name === 'DOTAfan')} - DOTA
        
        **Arcade and Others**
        ${emojiCache.find(emoji => emoji.name === 'AMONGUSfan')} - Among Us
        ${emojiCache.find(emoji => emoji.name === 'PokeGOfan')} - Pokémon GO
        ${emojiCache.find(emoji => emoji.name === 'OTHERfan')} - Other Games
        `);
        const interests = new MessageEmbed()
            .setColor('CE1126')
            .setTitle(`Select your other interests/hobbies:`)
            .setDescription(`
        ${emojiCache.find(emoji => emoji.name === 'ANIMEfan')} - Anime
        ${emojiCache.find(emoji => emoji.name === 'BOARDfan')} - Board Games
        `);
        const platform = new MessageEmbed()
            .setColor('CE1126')
            .setTitle(`Select the platforms that you game on:`)
            .setDescription(`
        ${emojiCache.find(emoji => emoji.name === 'XBOXfan')} - Xbox
        ${emojiCache.find(emoji => emoji.name === 'PSfan')} - Playstation
        ${emojiCache.find(emoji => emoji.name === 'SWITCHfan')} - Switch
        ${emojiCache.find(emoji => emoji.name === 'PCfan')} - PC/MAC
        ${emojiCache.find(emoji => emoji.name === 'MOBILEfan')} - Mobile
        ${emojiCache.find(emoji => emoji.name === 'RETROfan')} - Retro
        `);
        const pronoun = new MessageEmbed()
            .setColor('CE1126')
            .setTitle(`Select your pronouns:`)
            .setDescription(`
        ${emojiCache.find(emoji => emoji.name === 'hehim')} - He/Him
        ${emojiCache.find(emoji => emoji.name === 'sheher')} - She/Her
        ${emojiCache.find(emoji => emoji.name === 'theythem')} - They/Them
        ${emojiCache.find(emoji => emoji.name === 'askme')} - Ask Me
        `);
        const living = new MessageEmbed()
            .setColor('CE1126')
            .setTitle(`Select where you live on campus:`)
            .setDescription(`
        🇭 - Hewett Hall
        🇲 - Manchester Hall
        🇹 - Tri Towers
        🇨 - Cardinal Court
        🇼 - Watterson Towers
        🇴 - Off Campus Housing
        `);
        const rankHalo = new MessageEmbed()
            .setColor('CE1126')
            .setTitle(`Select your current rank:`)
            .setDescription(``);
        const mainRole = new MessageEmbed()
            .setColor('CE1126')
            .setTitle(`Select your extra roles in the server:`)
            .setDescription(`
        🏅 - See results from our competitive teams
        🎙️ - Posts when you Stream
        `);
        const rankRL = new MessageEmbed()
            .setColor('CE1126')
            .setTitle(`Select your current rank:`)
            .setDescription(``);
        const social = new MessageEmbed()
            .setColor('CE1126')
            .setTitle(`Select the socials you want to follow:`)
            .setDescription(``);
        const club = new MessageEmbed()
            .setColor('CE1126')
            .setTitle(`React to this message with the games that you play:`)
            .setDescription(``);
        const year = new MessageEmbed()
            .setColor('CE1126')
            .setTitle(`Select your year in school:`)
            .setDescription(`        1️⃣ - First Year (Freshman)
        2️⃣ - Second Year (Sophomore)
        3️⃣ - Third Year (Junior)
        4️⃣ - Fourth(+) Year (Senior)
        🎓 - Graduate
        `);
        const position = new MessageEmbed()
            .setColor('CE1126')
            .setTitle(`Select your desired position:`)
            .setDescription(``);
        const roleFFXIV = new MessageEmbed()
            .setColor('CE1126')
            .setTitle(`Select your desired role:`)
            .setDescription(``);
        const serverTalentMC = new MessageEmbed()
            .setColor('CE1126')
            .setTitle(`Select your talent:`)
            .setDescription(``);
        const serverTypeMC = new MessageEmbed()
            .setColor('CE1126')
            .setTitle(`Select what server type you want to play in:`)
            .setDescription(``);
        const notification = new MessageEmbed()
            .setColor('CE1126')
            .setTitle(`Select what notifications you want to receive:`)
            .setDescription(``);
        const overwatchNotif = new MessageEmbed()
            .setColor('CE1126')
            .setTitle(`Select what Overwatch notifications you want to receive:`)
            .setDescription(``);
        const arena = new MessageEmbed()
            .setColor('CE1126')
            .setTitle(`Select your desired Arena roles:`)
            .setDescription(`${emojiCache.find(emoji => emoji.name === 'RedbirdEHead3')} - Select this to be able to see chats related to the esports arena
        `);

        const servername = interaction.options.getString("server", true);
        const channel = interaction.options.getChannel("channel", true);
        switch (servername) {
            case "all": {
                const gamesMessage = await channel.send({ embeds: [games], files: ["assets/Games Panel.png"], fetchReply: true });
                clubGameFanEmojis.forEach(emoji => gamesMessage.react(emoji));

                const otherGamesMessage = await channel.send({ embeds: [otherGames], files: ["assets/Other Games Panel.png"], fetchReply: true });
                otherGameFanEmojis.forEach(emoji => otherGamesMessage.react(emoji));

                const interestsMessage = await channel.send({ embeds: [interests], files: ["assets/Interests Panel.png"], fetchReply: true });
                interestsEmojis.forEach(emoji => interestsMessage.react(emoji));

                const platformMessage = await channel.send({ embeds: [platform], files: ["assets/Platform Panel.png"], fetchReply: true });
                platformEmojis.forEach(emoji => platformMessage.react(emoji));

                const pronounMessage = await channel.send({ embeds: [pronoun], files: ["assets/Pronouns Panel.png"], fetchReply: true });
                pronounEmojis.forEach(emoji => pronounMessage.react(emoji));

                const livingMessage = await channel.send({ embeds: [living], files: ["assets/Living Quarters Panel.png"], fetchReply: true });
                livingEmojis.forEach(emoji => livingMessage.react(emoji));

                const socialMessage = await channel.send({ embeds: [social], files: ["assets/Socials Panel.png"], fetchReply: true });
                socialEmojis.forEach(emoji => socialMessage.react(emoji));

                const clubMessage = await channel.send({ embeds: [club], files: ["assets/Club Roles.png"], fetchReply: true });
                clubEmojis.forEach(emoji => clubMessage.react(emoji));

                const yearMessage = await channel.send({ embeds: [year], files: ["assets/Student Year Panel.png"], fetchReply: true });
                yearEmojis.forEach(emoji => yearMessage.react(emoji));

                const positionMessage = await channel.send({ embeds: [position], files: ["assets/Positions Panel.png"], fetchReply: true });
                positionEmojis.forEach(emoji => positionMessage.react(emoji));

                const roleFFXIVMessage = await channel.send({ embeds: [roleFFXIV], files: ["assets/Roles Panel.png"], fetchReply: true });
                roleFFXIVEmojis.forEach(emoji => roleFFXIVMessage.react(emoji));

                const serverTalentMCMessage = await channel.send({ embeds: [serverTalentMC], files: ["assets/Server Talent Panel.png"], fetchReply: true });
                serverTalentMCEmojis.forEach(emoji => serverTalentMCMessage.react(emoji));

                const serverTypeMCMessage = await channel.send({ embeds: [serverTypeMC], files: ["assets/Server Type Panel.png"], fetchReply: true });
                serverTypeMCEmojis.forEach(emoji => serverTypeMCMessage.react(emoji));

                const notificationMessage = await channel.send({ embeds: [notification], files: ["assets/Notification Panel.png"], fetchReply: true });
                notificationEmojis.forEach(emoji => notificationMessage.react(emoji));

                const arenaMessage = await channel.send({ embeds: [arena], files: ["assets/Arena Panel.png"], fetchReply: true });
                arenaEmojis.forEach(emoji => arenaMessage.react(emoji));

                const mainRolesMessage = await channel.send({ embeds: [mainRole], files: ["assets/Games Panel.png"], fetchReply: true });
                mainRoleEmojis.forEach(emoji => mainRolesMessage.react(emoji));

                break;
            }
            case "gaming": {
                const gamesMessage = await channel.send({ embeds: [games], files: ["assets/Games Panel.png"], fetchReply: true });
                clubGameFanEmojis.forEach(emoji => gamesMessage.react(emoji));

                const otherGamesMessage = await channel.send({ embeds: [otherGames], files: ["assets/Other Games Panel.png"], fetchReply: true });
                otherGameFanEmojis.forEach(emoji => otherGamesMessage.react(emoji));

                const interestsMessage = await channel.send({ embeds: [interests], files: ["assets/Interests Panel.png"], fetchReply: true });
                interestsEmojis.forEach(emoji => interestsMessage.react(emoji));

                const platformMessage = await channel.send({ embeds: [platform], files: ["assets/Platform Panel.png"], fetchReply: true });
                platformEmojis.forEach(emoji => platformMessage.react(emoji));

                const pronounMessage = await channel.send({ embeds: [pronoun], files: ["assets/Pronouns Panel.png"], fetchReply: true });
                pronounEmojis.forEach(emoji => pronounMessage.react(emoji));

                const mainRolesMessage = await channel.send({ embeds: [mainRole], files: ["assets/Roles Panel.png"], fetchReply: true });
                mainRoleEmojis.forEach(emoji => mainRolesMessage.react(emoji));

                const livingMessage = await channel.send({ embeds: [living], files: ["assets/Living Quarters Panel.png"], fetchReply: true });
                livingEmojis.forEach(emoji => livingMessage.react(emoji));

                const yearMessage = await channel.send({ embeds: [year], files: ["assets/Student Year Panel.png"], fetchReply: true });
                yearEmojis.forEach(emoji => yearMessage.react(emoji));

                const arenaMessage = await channel.send({ embeds: [arena], files: ["assets/Arena Panel.png"], fetchReply: true });
                arenaEmojis.forEach(emoji => arenaMessage.react(emoji));

                break;
            }
            case "test": {
                const mainRolesMessage = await channel.send({ embeds: [mainRole], files: ["assets/Roles Panel.png"], fetchReply: true });
                mainRoleEmojis.forEach(emoji => mainRolesMessage.react(emoji));
                break;
            }
            case "rocketLeague": {
                const rankRLMessage = await channel.send({ embeds: [games], files: ["assets/Rank Panel.png"], fetchReply: true });
                rankRLEmojis.forEach(emoji => rankRLMessage.react(emoji));
                break;
            }
            case "halo": {
                const rankHaloMessage = await channel.send({ embeds: [games], files: ["assets/Rank Panel.png"], fetchReply: true });
                rankHaloEmojis.forEach(emoji => rankHaloMessage.react(emoji));
                break;
            }
        }
    }
}