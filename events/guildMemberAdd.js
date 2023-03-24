module.exports = {
	name: 'guildMemberAdd',
	once: false,
	execute(member) {
            if(member.guild.name === "Redbird Esports"){
                /*try{
                    member.createDM()
                        .then( dm => {dm.send("Welcome to Redbird Esports!  Please see the instructions in the :wave:welcome channel on how to get verified.  This server is open to Illinois State University students, alumni, staff, and faculty only.\n\n" +
                
                        "Check out our social media:\n\n" +
                        
                        "Twitter: <https://twitter.com/Redbird_Esports> \n" +
                        "Discord: <https://www.discord.gg/Redbirdesports> \n" +
                        "Facebook: <https://www.facebook.com/ISURedbirdEsports> \n" +
                        "Instagram: <https://www.instagram.com/redbirdesports> \n" +
                        "Youtube: <https://www.youtube.com/channel/UCd7_wY88AAKow71-gmM2agw> \n" +
                        "Twitch: <https://www.twitch.tv/redbirdesports> \n" )});
                    }
                    catch(error){
                        console.error(error);
                    }
                    */
            }
            else{
                try{
                    mainServer = member.client.guilds.cache.find(guild=> guild.id === "145107585178140673")
                    mainServerUser = mainServer.members.cache.find(user => user.id === member.id)
                    if (typeof mainServerUser === "undefined") {
                            console.log("This code block")
                            const ErrorRole = member.guild.roles.cache.find(role => role.name === "ERROR");
                            member.roles.add(ErrorRole)
                    }
                    else{
                    if(mainServerUser.roles.cache.some(role => role.name === "Redbirds")){
                        const RedbirdSubRole = member.guild.roles.cache.find(role => role.name === "Redbirds");
                        member.roles.add(RedbirdSubRole)
                    }
                    else if(mainServerUser.roles.cache.some(role => role.name === "Alumni")){
                        const RedbirdSubRole = member.guild.roles.cache.find(role => role.name === "Alumni");
                        member.roles.add(RedbirdSubRole)
                    }
                    else if(mainServerUser.roles.cache.some(role => role.name === "Admitted Prospects")){
                        const RedbirdSubRole = member.guild.roles.cache.find(role => role.name === "Admitted Prospects");
                        member.roles.add(RedbirdSubRole)
                    }
                    else if(mainServerUser.roles.cache.some(role => role.name === "Prospects")){
                        const RedbirdSubRole = member.guild.roles.cache.find(role => role.name === "Prospects");
                        member.roles.add(RedbirdSubRole)
                    }
                    else if(mainServerUser.roles.cache.some(role => role.name === "Community Members")){
                        const RedbirdSubRole = member.guild.roles.cache.find(role => role.name === "Community Members");
                        member.roles.add(RedbirdSubRole)
                    }
                    else{
                        const ErrorRole = member.guild.roles.cache.find(role => role.name === "ERROR");
                        member.roles.add(ErrorRole)
                    }
                }
                }
                catch(error){
                    console.log(error)
                }
            }
        }
	};