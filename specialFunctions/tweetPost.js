const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');
module.exports = {
	name: 'tweetPost',
	description: 'Sends a message in specific chat for twitter updates.',
	execute(tweet, client) {
        let tweetData = tweet;
        console.log(tweetData)
        //console.log("User :" + tweetData.user.screen_name)
        //console.log("Text: " + tweetData.text)
        //console.log("id_str " + tweetData.id_str )

        // for multi server bots to make life easier hard code the twitter user.id_str as the key to a dict with the channel id.
        //This will make life easier programming wise

        //Creates a embed message with the data from twitter api

        const TweeterAccount = {"1229537512709902342": "890788791076409408", /*CSGO*/"1444345136410988551":"886345633680740372",/*OW*/"1239957572985270272":"890793150233317440",/*Apex*/"1437808525208600581":"890780275271938080",/*RL*/"1239960381201801219":"890797087015456793",/*COD*/"1299120319605747713":"890781852141506603",/*FFXVI*/"1441155149670404100":"894347608380833827",/*MainAcc*/"724480381840445440":"764109052950741012",/*Halo*/"1494178414416306180":"935561770800648206",/*Wargaming*/"1616127634781487118":"890802274245427274"}


        try{
        if(tweetData.user.id_str in TweeterAccount){
            if(tweetData.user.id_str == "1239957572985270272"){
                //This is the special overwatch version lol
                console.log("we in boys")
                var url = "https://twitter.com/"+tweetData.user.screen_name+"/status/" + tweetData.id_str
                const tweetEmbed = new MessageEmbed()
                .setColor('#FF0000')
                .setTitle('New '+tweetData.user.name+' tweet!')
                .setURL('https://twitter.com/' + tweetData.user.screen_name)
                .setAuthor('Reggie')
                .setThumbnail(tweetData.user.profile_image_url)
                .addFields(
                    { name: 'Tweet Contents', value: tweetData.text },
                    { name: 'Tweet link', value: url },
                )
                .setTimestamp()
                .setFooter('Bot made by REN');
                client.channels.cache.get(TweeterAccount[tweetData.user.id_str]).send('<@&893592353019928576>')
            client.channels.cache.get(TweeterAccount[tweetData.user.id_str]).send({ embeds: [tweetEmbed] })
            }
            else{
            console.log("we in boys")
            var url = "https://twitter.com/"+tweetData.user.screen_name+"/status/" + tweetData.id_str
            const tweetEmbed = new MessageEmbed()
            .setColor('#FF0000')
            .setTitle('New '+tweetData.user.name+' tweet!')
            .setURL('https://twitter.com/' + tweetData.user.screen_name)
            .setAuthor('Reggie')
            .setThumbnail(tweetData.user.profile_image_url)
            .addFields(
                { name: 'Tweet Contents', value: tweetData.text },
                { name: 'Tweet link', value: url },
            )
            .setTimestamp()
            .setFooter('Bot made by REN');
        client.channels.cache.get(TweeterAccount[tweetData.user.id_str]).send({ embeds: [tweetEmbed] })
            }
        }
        else{
            console.log("lol get fucked")
        }
    }catch(error){console.log(error)}

	},
};