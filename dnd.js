const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
var charData = {
    name: '', race: '', subrace: '', dndclass: '', dndsubclass: '', level: 1, 
    abilities: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intellegence: 0,
        wisdom: 0,
        charisma: 0
    }, 
    weaponattacks: {},
    spellattacks: {},
    description: ''
};

var characters = [];
var createNewChar = true;
if (createNewChar == true) {
    function createNewUserObject(charName, charRace, charSubRace, charClass, charSubClass, charLvl, charAbil, charWeapons, charSpells, charStory){
        let newCharacter = Object.create(charData)
        newCharacter.name = charName;
        newCharacter.race = charRace;
        newCharacter.subrace = charSubRace;
        newCharacter.dndclass = charClass;
        newCharacter.dndsubclass = charSubClass;
        newCharacter.level = charLvl;
        newCharacter.abilities = charAbil;
        newCharacter.weaponattacks = charWeapons;
        newCharacter.spellattacks = charSpells;
        newCharacter.description = charStory;
        // console.log(newCharacter)
        return characters.concat(newCharacter);
    }
} 
// else if(createNewChar == false /*update an existing char*/ ){
// }

console.log(createNewUserObject('Austin', 'Human', 'Dunce', 'Rogue', 'nerd', 50, {str:10, dex: 5, const: 10, int: 20, wis:10, chari: 10}, null, null, 'is a loser' ))
// console.log(charData)    