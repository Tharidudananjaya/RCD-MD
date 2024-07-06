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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0E3SkFnY0tWYXI1SlU5WUVnMTExSE5mNmlKS1FZcTR1dkNrUHp1TnEzQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic1ZzRlh3Z2wxTXN3anZJL0pieWE0SEpCN0ZYU1NwdGtqQ3FzbDVwZ3RUcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRQk00TUJrbGZ5SW5uSlBOeDM5WGJibWx3SkdCaEFwT2hZVit4OVFIdTNFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZWGxIZ0w1UE1Lb0h0eU5PbWZnQVhkeitkajF5R2pXWmRsakhUQjBXam5NPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFCSnVvNlZYdTB3aW9KZG0waWtES2Urdyt4ejA5R3NWUmFiZUNhYVRrM3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZIYzM4UzV3b05IeC9kdDBVU0tKZWE4QlJzYUVFYlI4TG9MTHBsVDdvMVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0ZyTFQ0YjA3MW52d1NIeFFIcWNCWUhVQVlmVzdPTE11cmFkVWtielVtZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSHFFODkwUkxBOHI2SmFsQjArdStPR1hEQWh6a0Y4ZXlzMUNzcWNoSkN5az0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlY0YWxCWnZzTWhhM1pqYUdtNEUrZldqSmFOeHhNZ09jejdsUFJpZnF2TERQajVQZzNXaGZWZXVaKzJIM0JXVjBxRmFzV0Q1aGc4RDV1THk1dkV4bGhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUxLCJhZHZTZWNyZXRLZXkiOiJjdzVYOXFYcml4SEtubXhNYzNNbnZyRWtwQjJnNUtUUjFFa3lHcXNvV2FFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJaUTBfVExUcFFfNnc5TkdrRnotZk5nIiwicGhvbmVJZCI6ImQzOGUyZjg5LWFlN2ItNDFiNS1iN2MxLWFmMWVmNjQyMGY2ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNZ2dVTzBkR002RGJxcUh5YW00TkF2emFBSG89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMERmalB0OHJnRy94UStuZkZSdzFiWUNQdmxJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNQRVI4WUZZIiwibWUiOnsiaWQiOiI5NDc4NDQwNTIzNzoyN0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLjhaTjhaTjhaTjhaTjhaTjhaTjhaTjhaTjhaTjhaTjhaTjhaTjhaTjhaTjhaTjhaTjhaTjhaTjhaTjhaTjhaTjhaTjhaTjhaTjhaTjhaTjhaTjhaTjhaTjhaTjhaTjhaTjhaTjhaTjhaTjhaQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0o2UHpPSUhFS1g0a2JRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ikk5MnEzZmtPVFRKTncvQjQrTVU2Rmc4Tm1jb2xaYno4M2FCOU00OVk3d3M9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImU2djMvL2lPaEJRY0FGcFBSZ25VaEd2OXN5aE8vTmt0N1V0RFYxcTVVU3B4VjV5YVJ6ZDNueFNSQ0Nnb2c2d3Y1OTNJRXNQdFRqWWdOTEl2cnRyUkN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJwWEtQNXRBaVFIemFyMFhldEpHU3pYNWNvN055R1NzbDhXVzNTZWtHYmxwSVZQekhVRkZhL3VSK0ZGaXdaQWJkRmdRRUt5WHM3VHFhYTI1eTRNeVNqZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzg0NDA1MjM3OjI3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNQZHF0MzVEazB5VGNQd2VQakZPaFlQRFpuS0pXVzgvTjJnZlRPUFdPOEwifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk5NTg1NzcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSklLIn0="
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
