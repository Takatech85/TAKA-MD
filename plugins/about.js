/*
_  ______   _____ _____ _____ _   _
| |/ / ___| |_   _| ____/___ | | | |
| ' / |  _    | | |  _|| |   | |_| |
| . \ |_| |   | | | |__| |___|  _  |
|_|\_\____|   |_| |_____\____|_| |_|

ANYWAY, YOU MUST GIVE CREDIT TO MY CODE WHEN COPY IT
CONTACT ME HERE +237656520674
YT: KermHackTools
Github: Kgtech-cmr
*/

const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: "dev",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*╭┈───────────────•*

*🧍🏽‍♂️Hello ${pushname}*

*╰┈───────────────•*
*╭┈───────────────•*
*│  ◦* *ᴡᴇʟᴄᴏᴍᴇ ɪᴛs ᴛᴀᴋᴀ-ᴍᴅ*
*│  ◦* *ᴄʀᴇᴀᴛᴇʀ 𝟣 ᛕ꠸ꪀᧁꪻꪖᛕꪖ : +237659079843*
*│  ◦* *Only Dev*
*│  ◦* *ʀᴇᴀʟ ɴᴀᴍᴇ➠ Chris Dior.*
*│  ◦* *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ➠ ᛕ꠸ꪀᧁꪻꪖᛕꪖ*
*│  ◦* *ᴀɢᴇ➠ ❌*
*│  ◦* *ᴄɪᴛʏ➠ Dᴏᴜᴀʟᴀ*
*│  ◦* *ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴅᴇᴠᴇʟᴘᴏʀ*
*╰┈───────────────•*
> *◆◆◆◆◆◆◆◆◆◆◆◆*

*[ • TAKA-MD - TEAM • ]*
*╭┈───────────────•*
*│  ◦* *▢➠ᛕ꠸ꪀᧁꪻꪖᛕꪖ*
*│  ◦* *▢➠•༆$ℭ𝔥𝔯𝔦𝔰_𝔇𝔦𝔬𝔯🚹*
*│  ◦* *▢➠The Choosen*
*╰┈───────────────•*
*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝖪𝗀 𝖳𝖾𝖼𝗁
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
