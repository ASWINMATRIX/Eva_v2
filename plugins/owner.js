const Julie = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');

if (Config.WORKTYPE == 'private') {

    Julie.addCommand({pattern: 'owner', fromMe: true, desc: 'shows the detail of bot owner'}, (async (message, match) => {

        if (message.jid === '918848938028-1627723879@g.us') {

            return;
        }

        if (Config.OWNER == 'default') {
            await message.client.sendMessage(message.jid,'*🧚EVA Mwol🧚by ASWIN KK*' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.OWNER + '\n\n---------------------', MessageType.text);
        }
    }));
}

else if (Config.WORKTYPE == 'public') {

    Julie.addCommand({pattern: 'owner', fromMe: false, desc: 'shows the detail of bot owner'}, (async (message, match) => {

        if (message.jid === '918848938028-1627723879@g.us') {

            return;
        }

        if (Config.OWNER == 'default') {
            await message.client.sendMessage(message.jid,'* 🧚EVA Mwol🧚 by ASWIN💌 KKD*' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.OWNER + '\n\n--------------------', MessageType.text);
        }
    }));
}
