const emojiJSON = require('../emojiRoles.json')
module.exports = {
	name: 'messageReactionAdd',
	async execute(reaction,user) {
		if(reaction.partial){
			try{
				await reaction.fetch();
			}catch(error){
				console.error('Something went wrong when fetching the message', error);
			}
		}
		console.log("got react");
		if(user != reaction.client.user){
			if(emojiJSON.hasOwnProperty(reaction.emoji.name)){
				TestRole = reaction.message.guild.roles.cache.find((role) => role.name === emojiJSON[reaction.emoji.name].role.name);
				reaction.message.guild.members.cache.find(member => member.id === user.id).roles.add(TestRole);
			}
		}
	},
};