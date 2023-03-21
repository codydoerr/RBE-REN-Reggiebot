const {MessageAttachment,MessageEmbed,MessageActionRow,MessageButton} = require('discord.js')
const emojiJSON = require('../emojiRoles.json');
module.exports = {
	name: 'interactionCreate',
	async execute(interaction) {
		if(interaction.isButton()){
			/*Invite List Interaction
			Used to see what club server emojis the User has interacted with and shows them a modal with all of those server's invite links
			*/
			if(interaction.customId == 'inviteList'){
				
					const embed = new MessageEmbed()
					.setColor('CE1126')
					.setTitle(
`
Welcome to the server!
`
					)
					.setImage("https://media.giphy.com/media/p4kx5aAkAXLO1ap2jA/giphy.gif")
					.setDescription(
`
`
					);
					let descString = ``
					emojiJSON.categories.clubGames.forEach(game => 
						{
							if(interaction.guild.members.cache.get(`${interaction.user.id}`).roles.cache.find(role => role.name === game))
							{
								descString+=`
${interaction.guild.emojis.cache.find(emoji => emoji.name === game)} - ${emojiJSON[game].clubName}						
${emojiJSON[game].inviteLink}
`
							}
						}
					);
					// Add inputs to the modal
					embed.setDescription(
						`
Click on the links below to join the associated server:
${descString}
						`
						);
					
					let message = await interaction.user.send({content:"Click here to see servers to join!",embeds:[embed]});
					await message.edit({content:"Hello!",embeds:[embed]})
				
			}


			if(interaction.customId == 'EO'||interaction.customId == 'SMM'||interaction.customId == 'TDD'||interaction.customId == 'BP'){
				let infoEmbed = new MessageEmbed();
				let attachment = new MessageAttachment();
				if(interaction.customId == 'EO'){
	
					attachment = new MessageAttachment('./assets/EsportsPanel_EventOutreach_B.png')
					infoEmbed = new MessageEmbed()
					.setColor('FF0000')
					.setImage("attachment://EsportsPanel_EventOutreach_B.png")
					.setDescription(`In-person interaction is the X factor that sets gaming communities apart from the online-only gaming communities. This adds social interaction to our favorite online games. Our team:
	
					- Develops organizational and procedural standards for the Redbird Esports program
					- Regularly consults with program staff and club student leaders to collaborate on events
					- Puts on professional and engaging events
					
					This team is made up of a coordinator and event staff.
					
					Want to apply? Head here: <#798392331412701234> `);
				}else if(interaction.customId == 'SMM'){
					attachment = new MessageAttachment('./assets/EsportsPanel_SMM_B.png')
					infoEmbed = new MessageEmbed()
					.setColor('FF0000')
					.setImage("attachment://EsportsPanel_SMM_B.png")
					.setDescription(`The social media and marketing team represents the Redbird Esports brand online. They make sure all messaging and art fully portrays our high-quality program.
					The team includes:
	
					- Social Media and Marketing Coordinator
					- Graphic Designer
					- Motion Graphics Designer
					- Photographer
					- Video Editor
					
					Want to apply? Head here: <#798392331412701234>
	
					Are you a current club leader and have a marketing request? Head here: <#931235672390500403>`);
				}else if(interaction.customId == 'TDD'){
					attachment = new MessageAttachment('./assets/EsportsPanel_DD_B.png')
					infoEmbed = new MessageEmbed()
					.setColor('FF0000')
					.setImage("attachment://EsportsPanel_DD_B.png")
					.setDescription(`Technology makes our gaming community thrive. The technology and digital development team design and implement solutions that drive participation and engagement on all Redbird Esports platforms.
	
					The team includes:
					
					- Technology and Digital Development Coordinator
					- Resource Outreach Manager
					- Game Server Administrator
					- Application Developer
					
					Want to apply? Head here: <#798392331412701234>`);
				}else if(interaction.customId == 'BP'){
					attachment = new MessageAttachment('./assets/EsportsPanel_BP_B.png')
					infoEmbed = new MessageEmbed()
					.setColor('FF0000')
					.setImage("attachment://EsportsPanel_BP_B.png")
					.setDescription(`Live-streaming is crucial to how fans engage with their favorite esports teams and organizations. The broadcasting and production team provides fans with access to gameplay, competition, and events. They also produce quality broadcasting, video, and voice content.
	
					The team includes:
					
					- Broadcast and Production Coordinator
					- Producer
					- Technical Director
					- Observer
					- Caster
					
					Want to apply? Head here: <#798392331412701234>`);
				}				
				await interaction.reply({embeds:[infoEmbed],ephemeral: true ,files:[attachment]})
			}
			if(interaction.customId == 'optin'){
				let optinRole = interaction.guild.roles.cache.find(role => role.id === '989194362451816478')
				if(interaction.member.roles.cache.find(role => role.id === '989194362451816478')){					
					await interaction.reply({content: 'You have this role!',ephemeral:true});
				}
				else{
					interaction.member.roles.add(optinRole);
					await interaction.deferReply({content: 'Adding Role',ephemeral:true});
				
					await interaction.editReply({content: 'Added Role!',ephemeral:true});
				}

			}else if(interaction.customId == 'optout'){
				let optinRole = interaction.guild.roles.cache.find(role => role.id === '989194362451816478')
				if(!interaction.member.roles.cache.find(role => role.id === '989194362451816478')){					
					await interaction.reply({content: 'You dont have this role!',ephemeral:true});
				}
				else{
					interaction.member.roles.remove(optinRole);
					await interaction.deferReply({content: 'Removing Role',ephemeral:true});
				
					await interaction.editReply({content: 'Removed Role!',ephemeral:true});
				}

			}
		}
	},
};