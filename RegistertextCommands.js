 
const { REST, Routes} =  require('discord.js');
const { token } = require('./config.json');


const commands = [
  {
    name:"menu",
    description: 'Envia la informacion del menu'
  }
];

const rest = new REST({ version: '10' }).setToken("MTI1ODk3ODgwNzU3MDc1OTg0MQ.GmI4xA.F_ShCNuJqh5CylAVFxAaNgzd-09TLJLTThRMMs");

(async () => {
try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands("1189963367314637002"), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}
})();
