const emojiJSON = require('../emojiRoles.json')
module.exports = {
	name: 'messageReactionAdd',
	async execute(reaction, user) {
		if (reaction.partial) {
			try {
				await reaction.fetch();
			} catch (error) {
				console.error('Something went wrong when fetching the message', error);
			}
		}
		if (user != reaction.client.user) {
			if (emojiJSON.hasOwnProperty(reaction.emoji.name) &&
				(reaction.message.channelId == '1081301966510100480' ||
					reaction.message.channelId == '1081355333357817866'||
					reaction.message.channelId == '1083775765474189368'||
					reaction.message.channelId == '1073263946083082301')
			) {
				TestRole = reaction.message.guild.roles.cache.find((role) => role.name === emojiJSON[reaction.emoji.name].role.name);
				reaction.message.guild.members.cache.find(member => member.id === user.id).roles.add(TestRole);
			}
			
		}
	},
};