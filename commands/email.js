const { SlashCommandBuilder } = require('@discordjs/builders');

const fs = require('fs')
const nodemailer = require('nodemailer');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('email')
		.setDescription('Sends a verification email to your ilstu.edu address')
        .addStringOption(option => option.setName('ilstuemail')
                                        .setDescription("Your ILSTU email Example: redbirdesports@ilstu.edu")
                                        .setRequired(true)),
	async execute(interaction, clientm) {
        const ilstuemail = interaction.options.getString("ilstuemail", true);


		if(ilstuemail === "reggie@ilstu.edu"){
            //message.delete({timeout : 10000});
            return;
        }
        try{domain = ilstuemail.split('@')}
        catch(error){
            interaction.reply("Not a email");
            setTimeout(()=> {interaction.deleteReply()},10000)
        }

        //console.log(domain) <-- Artifacts from testing
        //Generates random verification code.
        let verificationCode = Math.floor(Math.random()*90000) + 10000;

        //Checks if the domain is an ilstu.edu email and if they don't already have a json file that exists meaning they already have a code.
        if(domain[1] === 'ilstu.edu' && !fs.existsSync('./userfiles/'+interaction.user.id + '.json')){
            //makes json data
            let userJsonData = {'verify' : verificationCode, 'UserName': interaction.user.tag, "IlstuEmail" : ilstuemail	, "DiscordID" : interaction.user.id};
            //makes csv line and appends it to file
            let csvData = userJsonData['verify'] + ',' + userJsonData['UserName'] + ',' + userJsonData["IlstuEmail"] + ',' + userJsonData["DiscordID"]+ '\n'
            fs.appendFile('UserDataBase.csv', csvData, (err)=>
            {
                if(err){
                    console.log(err)
                }
                else{
                    console.log("Success")
                }
            });
            let data = JSON.stringify(userJsonData,null,2) // honestly dont remember the null part but 2 I believe is the spacing.
            //Write json file to userFiles folder
            let filename  = './userfiles/'+interaction.user.id + '.json'
            fs.writeFile(filename, data, (err)=>
            {
                if(err){
                    console.log(err)
                }
                else{
                    console.log("Success")
                }
            });
            //uses nodemailer to email this code is from how they recommend sending emails from my memory .
			const {pass} = require('../config.json');
            let transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: { // I used google we probably want to create a new account for this
                    user: 'ISUReggieBot@gmail.com',
                    pass: pass
                    }});
            var mailOptions = {
                from: 'ISUReggieBot@gmail.com', //Change this
                to: ilstuemail,
                subject: 'Redbird Esports Discord Verification',
                text: 
                'Hello and Welcome to the Redbird Esports Discord server! \n\n' + 
                'You are on your way to getting verified, thank you for your patience with this process. ' +
                'The next step is to create a ticket using the ticket tool found in the #verify channel. ' +
                'A moderator will then assist you with the final step. \n\nPlease remember this code: ' + verificationCode +
                
                '\n\nThank you, \n\n' +
                
                'Reggiebot\nRedbird Esports Discord'          
                };
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }  
            interaction.reply("Thank you for inputting the email " + domain[0] + '\nThe next steps to verify are:\n1. Type your display name below  in the following format: First Name "Gamertag" Last Name.\n2. Join our club on RedbirdLife: https://redbirdlife.illinoisstate.edu/organization/redbirdgaming')
			//setTimeout(()=> {interaction.deleteReply()},10000)
            })
        }
        //used if they already have a file or its a non isu email.
        else{
            interaction.reply('This is a non ilstu email or you already have a verification code. Please contact a mod for more information.')
            //setTimeout(()=> {interaction.deleteReply()},10000)
		}
	},
};
