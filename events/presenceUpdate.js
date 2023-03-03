const {MessageAttachment,MessageEmbed} = require('discord.js')
const {request} = require('undici');

const {twitch_auth,twitch_client} = require('../config.json');
module.exports = {
	name: 'presenceUpdate',
	async execute(_oldPresence,newPresence) {
		let presence = newPresence
	if(presence.guild.id === "145107585178140673"){
		let streamerRole = presence.guild.roles.cache.get('1048282798475186248')
		let streamingRole = presence.guild.roles.cache.get('748586477151060119')
		let postChannel = presence.guild.channels.cache.get('1066840128397529108')

		let streamingActivity = "STREAMING"
		if(presence.activities.find(activity => activity.type === streamingActivity) && presence.member.roles.cache.find(role => role === streamingRole))
		{
			return;
		}
		else if((!presence.member.roles.cache.find(role => role === streamerRole) && presence.activities.find(activity => activity.type === streamingActivity))||(presence.member.roles.cache.find(role => role === streamerRole)&&!presence.activities.find(activity => activity.type === streamingActivity)&&presence.member.roles.cache.find(role => role === streamingRole))){
			try{
				presence.member.roles.remove(streamingRole)
				return;
			}catch(error){
				console.error(error);
			}
		}else if(presence.member.roles.cache.find(role => role === streamerRole)&&presence.activities.find(activity => activity.type === streamingActivity)&&!presence.member.roles.cache.find(role => role === streamingRole)){
			try{
				presence.member.roles.add(streamingRole)
				/*here we need to add a message send to the twitch-notif channel that includes an imbed of the streaming user's
				twitch information
				link
				followers
				subs
				etc
				*/

				let userName = `${presence.activities.find(activity => activity.type === streamingActivity).url}`
				userName = userName.match('.tv\/(.+)')
				let profileImage
				let game
				let viewers
				let title
				if(true){
				uri =`https://api.twitch.tv/helix/streams?user_login=${userName[1]}`;
				const {body,list} = await request(`${uri}`,{
					method: `GET`,
					headers:{
						"Authorization": `Bearer ${twitch_auth}`,
						"Client-Id": `${twitch_client}`
						}
					});
					bodyJson = await body.json()
					console.log('data',bodyJson)
				game = bodyJson.data[0].game_name
				viewers = bodyJson.data[0].viewer_count
				title = bodyJson.data[0].title
				}
				uri =`https://api.twitch.tv/helix/users?login=${userName[1]}`;
				const {body,list} = await request(`${uri}`,{
					method: `GET`,
					headers:{
						"Authorization": `Bearer ${twitch_auth}`,
						"Client-Id": `${twitch_client}`
						}
					});
					bodyJson = await body.json()
					console.log('data',bodyJson)
				profileImage = bodyJson.data[0].profile_image_url

				let infoEmbed = new MessageEmbed()
					.setTitle(`${presence.member.nickname} just started streaming! Check them out here!`)
					.setThumbnail(profileImage)
					.addFields(
						{ name: 'Title:', value: `${title}` },
						{ name: 'Streaming:', value: `${game}`, inline:true },
						{ name: 'Viewers', value: `${viewers}`, inline: true }
					)
					.setTimestamp()
					.setColor('9146FF')
					.setURL(`${presence.activities.find(activity => activity.type === streamingActivity).url}`)
					.setDescription(`${presence.activities.find(activity => activity.type === streamingActivity).url}`)
					.setFooter('Bot made by REN');;
					
				await postChannel.send({embeds:[infoEmbed]})

				return;
			}catch(error){
				console.error(error);
			}
		}else{
			return;
		}
	}else{
		return;
	}
	},
};