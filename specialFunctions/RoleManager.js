const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

/*


*/
module.exports = {
  name: "roleMenuTesting",
  description: "Sends a message in specific chat for twitter updates.",
  execute(interaction, typ) {
    /*  ≈*/
    console.log(typ);
    try {
      for (roleName of interaction.values) {
        console.log(roleName);

        TestRole = interaction.guild.roles.cache.find(
          (role) => role.name === roleName
        );
        if (typeof TestRole === "undefined") {
          console.log("Nope");
        } else {
          if (
            interaction.member.roles.cache.some(
              (role) => role.name === roleName
            )
          ) {
            interaction.member.roles.remove(TestRole);
          } else {
            interaction.member.roles.add(TestRole);
          }
          console.log(TestRole);
        }
      }
      interaction.update("Select the roles you want to add/remove");
    } catch (error) {
      console.log("role error");
    }
  },
};
