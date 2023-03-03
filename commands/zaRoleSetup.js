const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageSelectMenu } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('zarole_setup')
		.setDescription('Select role and menu name')
        .addChannelOption(option => option.setName('input')
                                        .setDescription("Channel for the discord roles")
                                        .setRequired(true))
        .addStringOption(option => option.setName('server_menu')
            .setDescription("the server role menu ur posting")
            .setRequired(true)),
	async execute(interaction, clientm) {
        const servername = interaction.options.getString("server_menu", true)
        const test = interaction.options.getChannel("input", true);
        let row
        switch (servername) {
            case "overwatch":{
                row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                    .setCustomId('role')
                    .setPlaceholder('Nothing selected')
                    .setMinValues(1)
                    .setMaxValues(3)
                    .addOptions([
                        {
                            label: 'Twitter Notifications',
                            description: 'See Redbird Overwatch twitter feed and get notified on posts',
                            value: 'Twitter Notis'
                        },
                        {
                            label: 'Pickup Games',
                            description: 'Get access to join our pickup games!',
                            value: 'PUGs Role',
                        },
                        {
                            label: 'Twitch Notifications',
                            description: 'Get notified when we go live!',
                            value: 'Twitch Notis',
                        },
                    ]),
                );
                test.send(/*compoenets/buttons*/{ content: 'Role Selection:'})
                test.send(/*compoenets/buttons*/{ content: 'Select your roles in the drop down menu!', components: [row] })
                interaction.reply("Role Menu Setup")
                break;
                }
            case "RL":{
                row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                    .setCustomId('role')
                    .setPlaceholder('Nothing selected')
                    .setMinValues(1)
                    .setMaxValues(7)
                    .addOptions([
                        {
                            label: 'Varsity Fan',
                            description: 'Fan of our Varsity Rocket League team!',
                            value: 'VarsityFAN'
                        },
                        {
                            label: 'Club Fan',
                            description: 'Fan of our Club Rocket League teams!',
                            value: 'ClubFAN',
                        },
                        {
                            label: 'Student',
                            description: 'Active ISU Student',
                            value: 'Student',
                        },
                        {
                            label: 'Graduate Student',
                            description: 'Active ISU Graduate Student!',
                            value: 'Graduate Student',
                        },
                        {
                            label: 'Alumni',
                            description: 'ISU Alumni!',
                            value: 'Alumni',
                        },
                        {
                            label: 'Casual Player',
                            description: 'A casual Rocket League player!',
                            value: 'Casual Player',
                        },
                        {
                            label: 'Competitive Player',
                            description: 'A competitive Rocket League player!',
                            value: 'Competitive Player',
                        },
                    ]),
                );
                test.send(/*compoenets/buttons*/{ content: 'Role Selection:'})
                test.send(/*compoenets/buttons*/{ content: 'Select your roles in the drop down menu!', components: [row] })
                interaction.reply("Role Menu Setup")
                break;
            }
            case "RLRanks":{
                row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                    .setCustomId('role')
                    .setPlaceholder('Nothing selected')
                    .setMinValues(1)
                    .setMaxValues(9)
                    .addOptions([
                        {
                            label: 'Unranked',
                            description: '',
                            value: 'Unranked'
                        },
                        {
                            label: 'Bronze',
                            description: '',
                            value: 'Bronze',
                        },
                        {
                            label: 'Silver',
                            description: '',
                            value: 'Silver',
                        },
                        {
                            label: 'Gold',
                            description: '',
                            value: 'Gold',
                        },
                        {
                            label: 'Platinum',
                            description: '',
                            value: 'Platinum',
                        },
                        {
                            label: 'Diamond',
                            description: '',
                            value: 'Diamond',
                        },
                        {
                            label: 'Champion',
                            description: '',
                            value: 'Champion',
                        },
                        {
                            label: 'Grand Champion',
                            description: '',
                            value: 'Grand Champion',
                        },
                        {
                            label: 'Super Sonic Legend',
                            description: '',
                            value: 'Super Sonic Legend',
                        },
                    ]),
                );
                test.send(/*compoenets/buttons*/{ content: 'Rank Selection:'})
                test.send(/*compoenets/buttons*/{ content: 'Select your rank from the drop down menu!', components: [row] })
                interaction.reply("Role Menu Setup")
                break;
            }
            case "R6":{
                row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                    .setCustomId('role')
                    .setPlaceholder('Nothing selected')
                    .setMaxValues(1)
                    .addOptions([
                        {
                            label: 'Comp Player',
                            description: 'Rainbow 6 competitive player.',
                            value: 'Comp'
                        },
                    ]),
                );
                test.send(/*compoenets/buttons*/{ content: 'Role Selection:'})
                test.send(/*compoenets/buttons*/{ content: 'Select your roles in the drop down menu!', components: [row] })
                interaction.reply("Role Menu Setup")
                break;
            }
            case "StudentYear":{
                row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                    .setCustomId('role')
                    .setPlaceholder('Nothing selected')
                    .setMinValues(1)
                    .setMaxValues(4)
                    .addOptions([
                        {
                            label: 'Freshman',
                            description: '',
                            value: 'Freshman'
                        },
                        {
                            label: 'Sophomore',
                            description: '',
                            value: 'Sophomore',
                        },
                        {
                            label: 'Junior',
                            description: '',
                            value: 'Junior',
                        },
                        {
                            label: 'Senior',
                            description: '',
                            value: 'Senior',
                        },
                    ]),
                );
                test.send(/*compoenets/buttons*/{ content: 'Year Selection:'})
                test.send(/*compoenets/buttons*/{ content: 'Select your roles in the drop down menu!', components: [row] })
                interaction.reply("Role Menu Setup")
                break;
                }
            case "SmitePositions":{
                row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                    .setCustomId('role')
                    .setPlaceholder('Nothing selected')
                    .setMinValues(1)
                    .setMaxValues(5)
                    .addOptions([
                        {
                            label: 'Carry',
                            description: '',
                            value: 'Carry'
                        },
                        {
                            label: 'Solo',
                            description: '',
                            value: 'Solo',
                        },
                        {
                            label: 'Mid',
                            description: '',
                            value: 'Mid',
                        },
                        {
                            label: 'Jungle',
                            description: '',
                            value: 'Jungle',
                        },
                        {
                            label: 'Support',
                            description: '',
                            value: 'Support',
                        },
                    ]),
                );
                test.send(/*compoenets/buttons*/{ content: 'Smite Position Selection:'})
                test.send(/*compoenets/buttons*/{ content: 'Select your roles in the drop down menu!', components: [row] })
                interaction.reply("Role Menu Setup")
                break;
                }
            case "FFVIXRolesx":{
                row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                    .setCustomId('role')
                    .setPlaceholder('Nothing selected')
                    .setMinValues(1)
                    .setMaxValues(9)
                    .addOptions([
                        {
                            label: 'Tank',
                            description: '',
                            value: 'Tank'
                        },
                        {
                            label: 'Healer',
                            description: '',
                            value: 'Healer',
                        },
                        {
                            label: 'DPS',
                            description: '',
                            value: 'DPS',
                        },
                        {
                            label: 'Aether',
                            description: '',
                            value: 'Aether',
                        },
                        {
                            label: 'Crystal',
                            description: '',
                            value: 'Crystal',
                        },
                        {
                            label: 'Primal',
                            description: '',
                            value: 'Primal',
                        },
                        {
                            label: 'Raiders',
                            description: '',
                            value: 'Raiders',
                        },
                        {
                            label: 'PvP',
                            description: '',
                            value: 'PvP',
                        },
                        {
                            label: 'Ultimates',
                            description: '',
                            value: 'Ultimates',
                        },
                        {
                            label: 'LFP',
                            description: 'Looking For Party',
                            value: 'Looking For Party',
                        },
                    ]),
                );
                test.send(/*compoenets/buttons*/{ content: 'Role Selection:'})
                test.send(/*compoenets/buttons*/{ content: 'Select your roles in the drop down menu!', components: [row] })
                interaction.reply("Role Menu Setup")
                break;
                }
            case "MinecraftServerTalent":{
                row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                    .setCustomId('role')
                    .setPlaceholder('Nothing selected')
                    .setMaxValues(7)
                    .addOptions([
                        {
                            label: 'Builder',
                            description: '',
                            value: 'Builder'
                        },
                        {
                            label: 'Terraformer',
                            description: '',
                            value: 'Terraformer'
                        },
                        {
                            label: 'Redstone',
                            description: '',
                            value: 'Redstone'
                        },
                        {
                            label: 'Command Block Pro',
                            description: '',
                            value: 'Command Block Pro'
                        },
                        {
                            label: 'Decorator',
                            description: '',
                            value: 'Decorator'
                        },
                        {
                            label: 'Road Builder',
                            description: '',
                            value: 'Road Builder'
                        },
                        {
                            label: 'misc',
                            description: '',
                            value: 'misc'
                        },
                    ]),
                );
                test.send(/*compoenets/buttons*/{ content: 'Role Selection:'})
                test.send(/*compoenets/buttons*/{ content: 'Select your talent/role in the drop down menu!', components: [row] })
                interaction.reply("Role Menu Setup")
                break;
            }
            case "MinecraftServerType":{
                row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                    .setCustomId('role')
                    .setPlaceholder('Nothing selected')
                    .setMaxValues(3)
                    .addOptions([
                        {
                            label: 'Vanilla',
                            description: 'Role to get notified about whats going on in the Vanilla Server!',
                            value: 'Vanilla Enthusiast'
                        },
                        {
                            label: 'Modded',
                            description: 'Role to get notified about whats going on in the Modded Server!',
                            value: 'Modded Enjoyer'
                        },
                        {
                            label: 'Events',
                            description: 'Role to get notified about events!',
                            value: 'Events'
                        },
                    ]),
                );
                test.send(/*compoenets/buttons*/{ content: 'Role Selection:'})
                test.send(/*compoenets/buttons*/{ content: 'Select your server role from the drop down menu!', components: [row] })
                interaction.reply("Role Menu Setup")
                break;
            }
            case "MinecraftServerPronouns":{
                row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                    .setCustomId('role')
                    .setPlaceholder('Nothing selected')
                    .setMaxValues(2)
                    .addOptions([
                        {
                            label: 'zim/zims/zimself',
                            description: '',
                            value: 'zim/zims/zimself'
                        },
                        {
                            label: 'loaf/loafs/loafself',
                            description: '',
                            value: 'loaf/loafs/loafself'
                        },
                    ]),
                );
                test.send(/*compoenets/buttons*/{ content: 'Extra Pronoun Selection:'})
                test.send(/*compoenets/buttons*/{ content: 'Select your server role from the drop down menu!', components: [row] })
                interaction.reply("Role Menu Setup")
                break;
            } //Main RBE server role menus
            case "MainServerGameRoles":{
                row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                    .setCustomId('role')
                    .setPlaceholder('Nothing selected')
                    .setMaxValues(25)
                    .addOptions([
                        {
                            label: 'Amongus',
                            description: '',
                            value: 'AMONGUSfan'
                        },
                        {
                            label: 'Anime',
                            description: '',
                            value: 'ANIMEfan'
                        },
                        {
                            label: 'Apex',
                            description: '',
                            value: 'APEXfan'
                        },
                        {
                            label: 'BoardGames',
                            description: '',
                            value: 'BOARDfan'
                        },
                        {
                            label: 'Call of Duty',
                            description: '',
                            value: 'CODfan'
                        },
                        {
                            label: 'Counter-Strike',
                            description: '',
                            value: 'CSfan'
                        },
                        {
                            label: 'Dungeons and Dragons',
                            description: '',
                            value: 'DnDfan'
                        },
                        {
                            label: 'DOTA',
                            description: '',
                            value: 'DOTAfan'
                        },
                        {
                            label: 'FIFA',
                            description: '',
                            value: 'FIFAfan'
                        },
                        {
                            label: 'Fighting Games',
                            description: '',
                            value: 'FIGHTINGfan'
                        },
                        {
                            label: 'Fortnite',
                            description: '',
                            value: 'FNfan'
                        },
                        {
                            label: 'Game Dev',
                            description: '',
                            value: 'GAMEDEVfan'
                        },
                        {
                            label: 'Gears of War',
                            description: '',
                            value: 'GEARSfan'
                        },
                        {
                            label: 'Gen Games',
                            description: '',
                            value: 'GENGAMESfan'
                        },
                        {
                            label: 'Halo',
                            description: '',
                            value: 'HALOfan'
                        },
                        {
                            label: 'Hearthstone',
                            description: '',
                            value: 'HSfan'
                        },
                        {
                            label: 'League Of Legends',
                            description: '',
                            value: 'LOLfan'
                        },
                        {
                            label: 'Madden',
                            description: '',
                            value: 'MADDENfan'
                        },
                        {
                            label: 'Minecraft',
                            description: '',
                            value: 'MCfan'
                        },
                        {
                            label: 'Magic the Gathering',
                            description: '',
                            value: 'MTGfan'
                        },
                        {
                            label: 'NBA 2k',
                            description: '',
                            value: 'NBA2Kfan'
                        },
                        {
                            label: 'Other Games',
                            description: '',
                            value: 'OTHERfan'
                        },
                        {
                            label: 'OverWatch',
                            description: '',
                            value: 'OWfan'
                        },
                        {
                            label: 'Rainbow 6',
                            description: '',
                            value: 'R6fan'
                        },
                        {
                            label: 'Rocket League',
                            description: '',
                            value: 'RLfan'
                        },
                    ]),
                );
                test.send(/*compoenets/buttons*/{ content: 'Select the game/club you are interested in:'})
                test.send(/*compoenets/buttons*/{ content: 'Select your server role from the drop down menu!', components: [row] })
                interaction.reply("Role Menu Setup")
                break;
            }
            case "MainServerGameRoles2":{
                row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                    .setCustomId('role')
                    .setPlaceholder('Nothing selected')
                    .setMaxValues(5)
                    .addOptions([
                        {
                            label: 'Super Smash Bros',
                            description: '',
                            value: 'SMASHfan'
                        },
                        {
                            label: 'SMITE',
                            description: '',
                            value: 'SMITEfan'
                        },
                        {
                            label: 'Escape from Tarkov',
                            description: '',
                            value: 'TARKOVfan'
                        },
                        {
                            label: 'Valorant',
                            description: '',
                            value: 'VALORANTfan'
                        },                        
                        {
                            label: 'Final Fantasy XIV',
                            description: '',
                            value: 'FFXIVfan'
                        },
                    ]),
                );
                test.send(/*compoenets/buttons*/{ content: 'Select the game/club you are interested in:'})
                test.send(/*compoenets/buttons*/{ content: 'Select your server role from the drop down menu!', components: [row] })
                interaction.reply("Role Menu Setup")
                break;
            }
            case "MainServerPlatform":{
                row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                    .setCustomId('role')
                    .setPlaceholder('Nothing selected')
                    .setMaxValues(6)
                    .addOptions([
                        {
                            label: 'PC',
                            description: '',
                            value: 'PCfan'
                        },
                        {
                            label: 'Xbox',
                            description: '',
                            value: 'XBOXfan'
                        },
                        {
                            label: 'Playstation',
                            description: '',
                            value: 'PSfan'
                        },
                        {
                            label: 'Switch',
                            description: '',
                            value: 'SWITCHfan'
                        },
                        {
                            label: 'Mobile',
                            description: '',
                            value: 'MOBILEfan'
                        },
                        {
                            label: 'Retro',
                            description: '',
                            value: 'RETROfan'
                        },
                    ]),
                );
                test.send(/*compoenets/buttons*/{ content: 'Select your platform of choice:'})
                test.send(/*compoenets/buttons*/{ content: 'Select your server role from the drop down menu!', components: [row] })
                interaction.reply("Role Menu Setup")
                break;
            }
            case "MainServerExtras":{
                row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                    .setCustomId('role')
                    .setPlaceholder('Nothing selected')
                    .setMaxValues(2)
                    .addOptions([
                        {
                            label: 'Results',
                            description: '',
                            value: 'Results'
                        },
                        {
                            label: 'Streamer',
                            description: '',
                            value: 'Streamer'
                        },
                    ]),
                );
                test.send(/*compoenets/buttons*/{ content: 'Select any extra roles to identify yourself!:'})
                test.send(/*compoenets/buttons*/{ content: 'Select your server role from the drop down menu!', components: [row] })
                interaction.reply("Role Menu Setup")
                break;
            }
            case "MainServerLiving":{
                row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                    .setCustomId('role')
                    .setPlaceholder('Nothing selected')
                    .setMaxValues(6)
                    .addOptions([
                        {
                            label: 'Hewitt Hall',
                            description: '',
                            value: 'Hewitt Hall'
                        },
                        {
                            label: 'Manchester Hall',
                            description: '',
                            value: 'Manchester Hall'
                        },
                        {
                            label: 'Tri Towers',
                            description: '',
                            value: 'Tri Towers'
                        },
                        {
                            label: 'Cardinal Court',
                            description: '',
                            value: 'Cardinal Court'
                        },
                        {
                            label: 'Watterson Towers',
                            description: '',
                            value: 'Watterson Towers'
                        },
                        {
                            label: 'Off Campus Housing',
                            description: '',
                            value: 'Off Campus Housing'
                        },
                    ]),
                );
                test.send(/*compoenets/buttons*/{ content: 'Select where you are on campus:'})
                test.send(/*compoenets/buttons*/{ content: 'Select your server role from the drop down menu!', components: [row] })
                interaction.reply("Role Menu Setup")
                break;
            }
            case "HaloRank":{
                row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                    .setCustomId('role')
                    .setPlaceholder('Nothing selected')
                    .setMaxValues(6)
                    .addOptions([
                        {
                            label: 'Onyx',
                            description: '',
                            value: 'Onyx'
                        },
                        {
                            label: 'Diamond',
                            description: '',
                            value: 'Diamond'
                        },
                        {
                            label: 'Platinum',
                            description: '',
                            value: 'Platinum'
                        },
                        {
                            label: 'Gold',
                            description: '',
                            value: 'Gold'
                        },
                        {
                            label: 'Silver',
                            description: '',
                            value: 'Silver'
                        },
                        {
                            label: 'Bronze',
                            description: '',
                            value: 'Bronze'
                        },
                    ]),
                );
                test.send(/*compoenets/buttons*/{ content: 'Select your halo rank:'})
                test.send(/*compoenets/buttons*/{ content: 'Select your server role from the drop down menu!', components: [row] })
                interaction.reply("Role Menu Setup")
                break;
            }
            case "HaloPlatformPlay":{
                row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                    .setCustomId('role')
                    .setPlaceholder('Nothing selected')
                    .setMaxValues(4)
                    .addOptions([
                        {
                            label: 'PC',
                            description: '',
                            value: 'PC'
                        },
                        {
                            label: 'Xbox',
                            description: '',
                            value: 'Xbox'
                        },
                        {
                            label: 'Casual',
                            description: '',
                            value: 'Casual'
                        },
                        {
                            label: 'Competitive',
                            description: '',
                            value: 'Competitive'
                        },
                    ]),
                );
                test.send(/*compoenets/buttons*/{ content: 'Select your platform and playstyle:'})
                test.send(/*compoenets/buttons*/{ content: 'Select your server role from the drop down menu!', components: [row] })
                interaction.reply("Role Menu Setup")
                break;
            }
            case "ApexNotiLFG":{
                row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                    .setCustomId('role')
                    .setPlaceholder('Nothing selected')
                    .setMaxValues(2)
                    .addOptions([
                        {
                            label: 'Looking To Play',
                            description: '',
                            value: 'Looking To Play'
                        },
                        {
                            label: 'Notifications',
                            description: '',
                            value: 'Notifications'
                        },
                    ]),
                );
                test.send(/*compoenets/buttons*/{ content: 'Select if you want to LFG or get notifications:'})
                test.send(/*compoenets/buttons*/{ content: 'Select your server role from the drop down menu!', components: [row] })
                interaction.reply("Role Menu Setup")
                break;
            }
            case "WargamingGames":{
                row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                    .setCustomId('role')
                    .setPlaceholder('Nothing selected')
                    .setMaxValues(2)
                    .addOptions([
                        {
                            label: 'Warhammer',
                            description: '',
                            value: 'Warhammer'
                        },
                        {
                            label: 'Star Wars',
                            description: '',
                            value: 'Star Wars'
                        },
                    ]),
                );
                test.send(/*compoenets/buttons*/{ content: 'Select the games you play:'})
                test.send(/*compoenets/buttons*/{ content: 'Select your games from the drop down menu!', components: [row] })
                interaction.reply("Role Menu Setup")
                break;
            }
            case "esportarena":{
                row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                    .setCustomId('role')
                    .setPlaceholder('Nothing selected')
                    .setMaxValues(1)
                    .addOptions([
                        {
                            label: 'Esports and Gaming Arena',
                            description: 'Select this to be able to see chats related to the esports arena',
                            value: 'Esports and Gaming Arena'
                        },
                    ]),
                );
                test.send(/*compoenets/buttons*/{ content: 'Pick your Redbird Arena related role!:'})
                test.send(/*compoenets/buttons*/{ content: 'Select your role from the drop down menu!', components: [row] })
                interaction.reply("Role Menu Setup")
                break;
            }
            default:
                break;
        }
	},
};
