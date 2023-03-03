const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');

/*


*/
module.exports = {
	name: 'tweetPost',
	description: 'Sends a message in specific chat for twitter updates.',
	execute(interaction , typ) {


       /*  ≈*/
        console.log(typ)
        if(typ == "roleAdd"){
            for(roleName of interaction.values) {
                console.log(roleName)
                TestRole = interaction.guild.roles.cache.find(role => role.name === roleName)
                console.log(TestRole)
                interaction.member.roles.add(TestRole);
            }
            interaction.update("Roles have been added!")
        }
        else if(typ == "roleRemove"){
            for(roleName of interaction.values) {
                console.log(roleName)
                TestRole = interaction.guild.roles.cache.find(role => role.name === roleName)
                console.log(TestRole)
                interaction.member.roles.remove(TestRole);
            }
            interaction.update("Sugma Balls")
        }
        else{
            interaction.update("Something went wrong")
        }
        
        //interaction.update({ content: 'Something was selected wow this worked!', components: [] });
	},
};