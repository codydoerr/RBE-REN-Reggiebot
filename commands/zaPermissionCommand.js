const { SlashCommandBuilder } = require('@discordjs/builders');
const zaJsonPull = require('./zaJsonPull');
//ADD MODULAR
module.exports = {
	data: new SlashCommandBuilder()
		.setName('za_permissions')
		.setDescription('A testing command'),
	async execute(interaction, clientm) {
        //console.log(test)
        //'zreset_verify'
        //This is fucking asine but it works we can set this to do a list of commands that should be admin/mod/Me only
        //Maybe make admin commands start with a z so it goes to the bottom of the command list
        let commandsToChange = ['zarole_setup','za_permissions','zguild_button_menu','zmain_role_setup','zpronoun_setup','ztest','varsitysub','zaReactRoleSetup']
        for(appCommand of commandsToChange){
            let y = await interaction.guild.commands.fetch().then(result=> result.find(command => command.name === appCommand))
            //console.log(y)
            const permissions = [
                /* My user id */ {
                    id: '885329094076674048',
                    type: 'USER',
                    permission: true,
                }, 
                /*{
                    id: '890770628158836850',
                    type: 'ROLE',
                    permission: true,
                }, */
            ];
            y.edit
            await y.permissions.set({ permissions });
            await y.edit({
                defaultPermission: false,
            })
    }
    let commandsToChange2 = ['verify']
    for(appCommand of commandsToChange2){
        let y = await interaction.guild.commands.fetch().then(result=> result.find(command => command.name === appCommand))
        //console.log(y)
        const permissions = [
            /* My user id */ /*{
                id: '885329094076674048',
                type: 'USER',
                permission: true,
            } */
            {
                //ModCheck Id
                id: '920859538385666088',
                type: 'ROLE',
                permission: true,
            },
        ];
        y.edit
        await y.permissions.set({ permissions });
        await y.edit({
            defaultPermission: false,
        })
}
let commandsToChange3 = ['za_clean','zm_reset_verify']
for(appCommand of commandsToChange3){
    let y = await interaction.guild.commands.fetch().then(result=> result.find(command => command.name === appCommand))
    //console.log(y)
    const permissions = [
        /* My user id */ /*{
            id: '885329094076674048',
            type: 'USER',
            permission: true,
        } */
        /* My user id */ {
            id: '885329094076674048',
            type: 'USER',
            permission: true,
        }, 
        /*Esports program staff*/
        {
            id: '672818950408503338',
            type: 'ROLE',
            permission: true,
        },
        {
            //MOD
            id: '672818951280918530',
            type: 'ROLE',
            permission: true,
        },
    ];
    y.edit
    await y.permissions.set({ permissions });
    await y.edit({
        defaultPermission: false,
    })
}
let commandsToChange4 = ['za_jsonpull']
for(appCommand of commandsToChange4){
    let y = await interaction.guild.commands.fetch().then(result=> result.find(command => command.name === appCommand))
    //console.log(y)
    const permissions = [
        /* My user id */ /*{
            id: '885329094076674048',
            type: 'USER',
            permission: true,
        } */
        /* My user id */ {
            id: '885329094076674048',
            type: 'USER',
            permission: true,
        }, 
        /*Esports program staff*/
        {
            id: '672818950408503338',
            type: 'ROLE',
            permission: true,
        },
    ];
    y.edit
    await y.permissions.set({ permissions });
    await y.edit({
        defaultPermission: false,
    })
}

        console.log("PermSet")
        interaction.channel.send("Permissions Set") 
	},
};


//RE REGISTER COMMANDS TO GET THIS TO WORK