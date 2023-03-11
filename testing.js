const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { token } = require('./config.json');
const fs = require('fs');

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const clientId = '886351724242153507';
const guildId = '145107585178140673';
const guilds = ['145107585178140673','894347607470641193','1083775764073287834'];

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');
		guilds.forEach(async guild => {await rest.put(
			Routes.applicationGuildCommands(clientId, guild),
			{ body: commands },
	)});
		

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();
