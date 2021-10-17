const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'owner', fromMe: false, desc: "Gives number link of the bot owner"}, (async (message, match) => {

    var skl = await axios.get("https://www.linkpicture.com/q/imashz_1.png", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Pikachu bot created by Ameer Suhail*
*Creator number(Imash) : http://wa.me/94771323434?text=Hello%20Imash%20kohomda.%20*

*කම්මැලි නිසයි මේ ඔක්කොම🥵*
`}) 

}));
