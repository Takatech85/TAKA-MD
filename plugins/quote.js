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

const axios = require('axios');
const { cmd } = require('../command');

cmd({
    pattern: "quote",
    desc: "Get a random inspiring quote.",
    category: "fun",
    react: "💬",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const response = await axios.get('https://favqs.com/api/qotd');
        const quote = response.data;
        const message = `
💬 "${quote.body}"\n
- ${quote.author}
*QUOTES BY 𝗧𝗔𝗞𝗔 𝗧𝗘𝗖𝗛*
        `;
        return reply(message);
    } catch (e) {
        console.error("Error fetching quote:", e);
        reply("¢συℓ∂ ησт ƒєт¢н α qυσтє. ρℓєαѕє тяу αgαιη ℓαтєя.");
    }
});
