//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "dextermd556@gmail.com";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";  
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0pscm5reDBnaStyL1JXSkZ1M1VxZGZtVmZpMnZIODlFU09DYXBzWkgzND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibGNJUXpxZUtSYU5ORmtnZ0FsMjVXZFJyektKQTk0MkdvYlh5REsvNTRsST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXSjV2ZzE0dU9RNVVpN3dINEZiYmRxUWFPVit6bklYUVhZUjUyMlFrQkdFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4a0E0K2hRbHkrWlMrUnZ3TVd5UFNNK0hxOGVsZzRWMDRrelhDSDlHZjNjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFLUlY5WjNhbjdVdXZpTTl2QS9TSEhnUXVFMkpqcVgyWk1KbXNMRjZwMlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik00MUNvQ1pLWFVPaVRMWGR1S0QwQkk4SXlSM2tqRmZGemtaTlhVNnhFVHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0F2TWFzSFhLS0poeTg0ZG9DUm1ocnV3aUtlTmo0QzQwNTkyanZMTFgzaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUhSbUEzUkRvUkNodVV5SzFkL1NVL1lTSUJ1T3NTbzFocDBJcytWNDEyTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ingrd2lOOXQ4Z1pnRFVHbHBMLzBlUDloVG40Q1U3enlFN25zSG55SFVQUG42QUJ5YlkyNFpURU4rSnVHKytadVh2VWZsRHZWVnpSMUpnZTRoa1Q4T0FRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODMsImFkdlNlY3JldEtleSI6Im8zSFNrZWtuaTd2d1BibG4vdFl5R29vb0FJbUpTTU1hQVExQ3dVNEpVS0E9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImdnZ1dvcnpYU2RXLW5WWUNLbGR0MFEiLCJwaG9uZUlkIjoiNThkN2I3NmQtMTdmMi00NzQxLTkzNDYtYmU3YjQzOWUzNjE1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1ZVVJZRmNsbU8yYS9oQTVUYU82ZTlRWC95MD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZUDM2dUxIcmEydWtpT05CY0dQcVI0NGdYTnc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNTg1UlpCUzMiLCJtZSI6eyJpZCI6Ijk0Nzg0NDA1MjM3OjMxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuOFpOOFpOOFpOOFpOOFpOOFpOOFpOOFpOOFpOOFpOOFpOOFpOOFpOOFpOOFpOOFpOOFpOOFpOOFpOOFpOOFpOOFpOOFpOOFpOOFpOOFpOOFpOOFpOOFpOOFpOOFpOOFpOOFpOOFpOOFpOOFpCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS0NQek9JSEVQbjJvclFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSTkycTNma09UVEpOdy9CNCtNVTZGZzhObWNvbFpiejgzYUI5TTQ5WTd3cz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVDhrYzhaL1M4NDU5Yis4V3UxY0hiaU51RFdOc3R0dTVLSHQ1enp4RU1rMmpUYVFSRVVTZkI0VWU5UGk1N05MTVB5RXRKYzRCa1pRbUNxUzNMSFFzRHc9PSIsImRldmljZVNpZ25hdHVyZSI6IlJDV293NjJ5cEdTMy9zRDlnbWhNMGFKR0ZHa21WL2FZK2Mvbk5OWnJnYXZ5R3R5dFlGM1huNHkxSlpiQm10ZEdnbGlwc1VmUjczbHQybFFUcTNsSUF3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3ODQ0MDUyMzc6MzFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU1BkcXQzNURrMHlUY1B3ZVBqRk9oWVBEWm5LSldXOC9OMmdmVE9QV084TCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDIzNjkzNSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKSUsifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "🇱🇰 P͢O͢W͢E͢R͢ B͢Y͢ R͢C͢D͢ M͢D͢",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝐃𝐄𝐗𝐓𝐄𝐑,𝐕𝐈𝐏𝐄𝐑",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RCD").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
