const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('fs');
const { PassThrough } = require('stream');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('verify')
		.setDescription('Allows you to join the Redbird Esports server.')
        .addStringOption(option => option.setName('code')
                                        .setDescription("The 5 digit verification code you recieved in your email.")
                                        .setRequired(true)),
	async execute(interaction, clientm) {
        const veriCode = interaction.options.getString("code", true);
        //Will need to run through this process again
        //Can condense this down alot
        //this most likely will change with new role flow  but got the re activate to work- Nick 9/11/2021
        //checks the verification code supplied to the verification code stored. and then removes the public roles, adds the redbird role, and cleans up the role.
        try{
            const role = interaction.guild.roles.cache.find(role => role.name === 'Redbirds')
            const publicRole = interaction.guild.roles.cache.find(role => role.name === 'ModCheck')
            const userx = interaction.member;
            filename = './userfiles/'+interaction.user.id + '.json'   
            let rawdata = fs.readFileSync(filename);
            let userinfo = JSON.parse(rawdata);
            let author =  interaction.user.id; 
            let subUser
            let subRedbirdRole
            let subErrorRole
            if(veriCode === String(userinfo.verify)){
                console.log('nice')
                await interaction.reply("Welcome to the server! Make sure to head over to <#896092041052831774> and <#1081301966510100480> to assign yourself to the appropriate categories. We'll leave this ticket open for a few minutes so the support team can answer any questions you might have!");
                //interaction.member.setNickname(userinfo.IlstuEmail.split("@")[0]) - This is the old nick name change that will be done by mods now
                //x = await clientm.guilds.fetch()
                //console.log(x)
                let clientGuilds = []
                //x.each(guild => clientGuilds.push(clientm.guilds.cache.get(guild.id)));
                //console.log(clientGuilds)
                interaction.member.roles.remove(publicRole);
                for(x of interaction.client.guilds.cache){
                    try{
                    console.log(x[1].name)
                    const member =x[1].members.cache.find(user=> user.id === interaction.member.id)
                    if(member === undefined){continue}
                    console.log("Name : " + member)
                    redBirdRole = x[1].roles.cache.find(role => role.name ==="Redbirds")
                    errorRole = x[1].roles.cache.find(role=> role.name === "ERROR")
                    if(redBirdRole ===undefined){continue}
                    if(member.roles.cache.some(role => role.name === "ERROR")){
                        member.roles.remove(errorRole)
                    }
                    member.roles.add(redBirdRole)
                    console.log("Role added")
                    }catch(error){console.log(error)}

                }
                //setTimeout(()=> {interaction.deleteReply()},5000)
            }
            //verification reply if wrong.
            else{
                interaction.reply('This is an incorrect verification code. Please enter the correct code sent to your ilstu email.')
                setTimeout(()=> {interaction.deleteReply()},10000)
            }
            //if you do not have public 3.0 then you cannot verify you get this role from a mod on our server
        }
        catch(error){
            console.error(error)
        }


	},
};
