const { SlashCommandBuilder } = require('@discordjs/builders');
//const zaJsonPull = require('./za_jsonPull');
//ADD MODULAR
module.exports = {
	data: new SlashCommandBuilder()
		.setName('za_commandpermissions')
		.setDescription('A command that sets the proper permissions for all commands'),
	async execute(interaction, clientm) {
        const zaCommandUsers = [//TDD Admin and Esports Program Staff
            {id:'1042876053682651167',type:'ROLE',permission: true},
            {id:'672818950408503338',type:'ROLE',permission: true},
        ]
        const zmCommandUsers = [//Head Mod and Mod
            {id:'736327842606088192',type:'ROLE',permission: true},
            {id:'672818951280918530',type:'ROLE',permission: true},
        ]
        const zcCommandUsers = [//Head Coaches
            {id:'1019237400800657510',type:'ROLE',permission: true},
        ]
        const modCheck = [ //modCheck 
            {id: '920859538385666088', type: 'ROLE', permission: true},
        ]
        let commands = await interaction.guild.commands.fetch()
        console.log(commands)
        for(appCommand of commands){
            console.log(appCommand)
            if(appCommand.name.includes('za_')){
                console.log("za command")
                await appCommand.permissions.set({ zaCommandUsers });
                await appCommand.edit({
                    defaultPermission: false,
                })
            }
            else if(appCommand.name.includes('zm_')){
                console.log("zm command")
                await appCommand.permissions.set({ zmCommandUsers });
                await appCommand.edit({
                    defaultPermission: false,
                })
            }
            else if(appCommand.name.includes('zc_')){
                console.log("zc command")
                await appCommand.permissions.set({ zcCommandUsers });
                await appCommand.edit({
                    defaultPermission: false,
                })
            }else if(appCommand.name.includes('verify')){
                console.log("verify command")
                await appCommand.permissions.set({ modCheck });
                await appCommand.edit({
                    defaultPermission: false,
                })
            }         
        }
        console.log("PermSet")
        interaction.reply("Permissions Set") 
	},
};