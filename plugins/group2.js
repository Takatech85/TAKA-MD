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


const { cmd } = require('../command');
let antideleteStatus = {}; // Tracks the ON/OFF status for each chat


cmd({
    pattern: "channel",
    desc: "Get the link to the official WhatsApp channel.",
    react: "📢",
    category: "utility",
    use: ".channel",
    filename: __filename,
}, async (conn, mek, m, { reply }) => {
    try {
        // Define the channel link inside the command
        const channelLink = "https://whatsapp.com/channel/0029Vark1I1AYlUR1G8YMX31";

        // Send the channel link to the user
        reply(`*ʜᴇʀᴇ's ᴛʜᴇ ʟɪɴᴋ ᴛᴏ ᴏᴜʀ ᴏғғɪᴄɪᴀʟ ᴡʜᴀᴛsᴀᴘᴘ ᴄʜᴀɴɴᴇʟ*:\n\n${channelLink}\n\n> *ᴊᴏɪɴ ᴜs ᴛᴏ sᴛᴀʏ ᴜᴘᴅᴀᴛᴇᴅ ᴡɪᴛʜ ᴛʜᴇ ʟᴀᴛᴇsᴛ ɴᴇᴡs ᴀɴᴅ ᴀɴɴᴏᴜɴᴄᴇᴍᴇɴᴛs🧞‍♂️.*`);
    } catch (error) {
        // Log and notify about any errors
        console.error("Error sending channel link:", error.message);
        reply("❌ Sorry, an error occurred while trying to send the channel link.");
    }
});
// Command for sending the support group or page link
cmd({
    pattern: "support",
    desc: "Get the link to the support group or page.",
    react: "🛠️",
    category: "utility",
    use: ".support",
    filename: __filename,
}, async (conn, mek, m, { reply }) => {
    try {
        // Define the support link inside the command
        const supportLink = "https://whatsapp.com/channel/0029Vark1I1AYlUR1G8YMX31";

        // Send the support link to the user
        reply(`*ɴᴇᴇᴅ ʜᴇʟᴘ ᴏʀ ʜᴀᴠᴇ ǫᴜᴇsᴛɪᴏɴs ? ᴊᴏɪɴ sᴜᴘᴘᴏʀᴛ ɢʀᴏᴜᴘ🪀*:\n\n${supportLink}\n\n> *ғᴇᴇʟ ғʀᴇᴇ ᴛᴏ ᴀsᴋ ʏᴏᴜʀ ǫᴜᴇsᴛɪᴏɴs ᴏʀ ʀᴇᴘᴏʀᴛ ɪssᴜᴇs🙇🏻‍♂️.*`);
    } catch (error) {
        // Log and notify about any errors
        console.error("Error sending support link:", error.message);
        reply("❌ Sorry, an error occurred while trying to send the support link.");
    }
});