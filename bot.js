var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
            // Just add any case commands if you want to..
         }
     }
});

// var charData = {
//     name: '', race: '', subrace: '', dndclass: '', dndsubclass: '', level: 1, 
//     abilities: {
//         strength: 0,

//         dexterity: 0,
//         constitution: 0,
//         intellegence: 0,
//         wisdom: 0,
//         charisma: 0
//     }, 
//     weaponattacks: {},
//     spellattacks: {},
//     description: ''
// };

// var characters = [];
// var createNewChar = true;
// if (createNewChar == true) {
//     function createNewUserObject(charName, charRace, charSubRace, charClass, charSubClass, charLvl, charAbil, charWeapons, charSpells, charStory){
//         let newCharacter = Object.create(charData)
//         newCharacter.name = charName;
//         newCharacter.race = charRace;
//         newCharacter.subrace = charSubRace;
//         newCharacter.dndclass = charClass;
//         newCharacter.dndsubclass = charSubClass;
//         newCharacter.level = charLvl;
//         newCharacter.abilities = charAbil;
//         newCharacter.weaponattacks = charWeapons;
//         newCharacter.spellattacks = charSpells;
//         newCharacter.description = charStory;
//         // console.log(newCharacter)
//         return characters.concat(newCharacter);
//     }
// } 
// // else if(createNewChar == false /*update an existing char*/ ){
// // }

// console.log(createNewUserObject('Austin', 'Human', 'Dunce', 'Rogue', 'nerd', 50, {str:10, dex: 5, const: 10, int: 20, wis:10, chari: 10}, null, null, 'is a loser' ))
// // console.log(charData)    