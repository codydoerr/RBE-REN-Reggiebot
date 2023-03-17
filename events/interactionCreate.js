const {MessageAttachment,MessageEmbed,Modal,TextInputComponent,MessageActionRow,MessageButton} = require('discord.js')
const emojiJSON = require('../emojiRoles.json');
module.exports = {
	name: 'interactionCreate',
	async execute(interaction) {
		if(interaction.isButton()){
			/*Invite List Interaction
			Used to see what club server emojis the User has interacted with and shows them a modal with all of those server's invite links
			*/
			if(interaction.customId == 'inviteList'){
				if(interaction.channelId == '1073263946083082301'){
					console.log("hit, you have hit the invite list button")
					const modal = new Modal()
						.setCustomId('serversToJoin')
						.setTitle('Servers To Join');
					const row = new MessageActionRow()
						.addComponents(
							new MessageButton()
								.setLabel(`Anime`)
								.setStyle('LINK')
								.setURL('https://discord.gg/QGv4eYBkXz'),
							new MessageButton()
								.setLabel('Apex')
								.setStyle('LINK')
								.setURL('https://discord.gg/nMRADqfCsY'),
							new MessageButton()
								.setLabel('Call Of Duty')
								.setStyle('LINK')
								.setURL('https://discord.gg/Np9QGyqJm5'),
								
							new MessageButton()
								.setLabel('CS:GO')
								.setStyle('LINK')
								.setURL('https://discord.gg/JjHj2SmjPx'),
								
							new MessageButton()
								.setLabel('League Of Legends')
								.setStyle('LINK')
								.setURL('https://discord.gg/TsM3ZPXz84'),
								);
					const row2 = new MessageActionRow()
						.addComponents(
							new MessageButton()
								.setLabel('Overwatch')
								.setStyle('LINK')
								.setURL('https://discord.gg/ngSfhHm28F'),
							new MessageButton()
								.setLabel('R6:Siege')
								.setStyle('LINK')
								.setURL('https://discord.gg/G6tMPUmfxu'),
								
							new MessageButton()
								.setLabel('Rocket League')
								.setStyle('LINK')
								.setURL('https://discord.gg/SC2YhfvkN3'),
								
							new MessageButton()
								.setLabel('Valorant')
								.setStyle('LINK')
								.setURL('https://discord.gg/mMbmA2bsag'),
								);
					const row3 = new MessageActionRow()
						.addComponents(
							new MessageButton()
								.setLabel('Minecraft')
								.setStyle('LINK')
								.setURL('https://discord.gg/qMQFvUwpgW'),
							new MessageButton()
								.setLabel('FFXIV')
								.setStyle('LINK')
								.setURL('https://discord.gg/HD8wYHYdCu'),
							new MessageButton()
								.setLabel('D&D')
								.setStyle('LINK')
								.setURL('https://discord.gg/9P5vU56Uzv'),
							new MessageButton()
								.setLabel('FGC')
								.setStyle('LINK')
								.setURL('https://discord.gg/7BX65tSxVA'),
							);
					const row4 = new MessageActionRow()
						.addComponents(
							new MessageButton()
								.setLabel('HALO')
								.setStyle('LINK')
								.setURL('https://discord.gg/bhTTfxZQ7a'),
							new MessageButton()
								.setLabel('Wargaming')
								.setStyle('LINK')
								.setURL('https://discord.gg/cvxVzSQrd4'),
							new MessageButton()
								.setLabel('Super Smash Bros.')
								.setStyle('LINK')
								.setURL('https://discord.gg/ar6pU6G'),
							);
					// An action row only holds one text input,
					// so you need one action row per text input.

					// Add inputs to the modal
					modal.addComponents(row,row2,row3,row4);
					await interaction.showModal(modal);
				}
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