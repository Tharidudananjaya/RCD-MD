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
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94729280674@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VafPRIHIHphCGVuZEb0T";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VafPRIHIHphCGVuZEb0T";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94729280674";
global.owner = process.env.OWNER_NUMBER || "94729280674";
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
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEJkTVpucG1ESjVTdGxmVWlweHpTZ0VZU2h3ODhjQlYxYkd0UWdQcG5XVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMUJYamVsK2RRdnhxODI1NkdIVWJoUXlocGJmcitkQmhKZzVXV05IMWV4az0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzQmRtc2xud2RHUiswNHB5bGxaUk1EZ09USkw4RmsyZVVEL3ZLTlVTSVVFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJySksvQjl1ci9Ea1Y3M0R4QWZTTGVZc1FSdkErZnhoZGlvTkxxY0pSWnh3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNLUHZRUE5Vd0kvQ3d1MlZtSnBpUk9EYkN6b0VReGF2Q2xkSC9KblU5Vmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBPclZzRlBva2x4SDlIUG81QTE1emtMOEJxb0h4c2o2Rys4OUJjQmlaMG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib08wRjNCU2FrMXlaRnU2Y2dZcU9UeER0b1MyQ1RFQ1hwbWYxcmt0b2RGWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEc5TWNtMmhuaHMveUtvTlJBL2pYaExleTBYd3FVYnhlREtaSnphWDdYST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRoWlk3OWhjQ3lrRTRnQk95cGdLa2IrOXVtUHN4MlJ0MVdOR2x0Zk5PWGxXbmJ4c21ZUllrTWlXWFZwOFBqUVR3UGVWODZHeWt0MXhWTHZVaGpYS2dBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjUsImFkdlNlY3JldEtleSI6IkhYVlFvbEFkdnVmM1ZXY2Y1Q3JXTGVKcHBEc2o2RVpONzhyY3UxNE9RUmc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3ODk5NTgyMjVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOURFODIxOUQ4NkJCNDVFRTc5RkIyNEYwNTMwMEIyQTIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTYxMzEyMH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiekJrQ3pEZ0dSaUdOTzRzVlJYWWNEdyIsInBob25lSWQiOiIwNDIzYmJkZS1kZTllLTQyNjUtYTI5Yi1lOGM0YzU2MzZmMDQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidjd2YlYwZG5BdnBCQXVseW0zU0tEc2RUWm1jPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJtNmh5STBnS00zQkw3Rkh4dW1pS1dhMHhFaz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIyUk1CVkw5WiIsIm1lIjp7ImlkIjoiOTQ3ODk5NTgyMjU6NTNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRM2fRc2fWM2fVM2fRc2fUs2fIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPRGV2Z0lRcnUzOHN3WVlGQ0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ5MTNJUGorSGVsdm1iSjFBaVBkUHNVVnRpaWsxSDNPZyt6MkI2cmRHZEJFPSIsImFjY291bnRTaWduYXR1cmUiOiJ1b25LODR5NzlJZW5OV2JORFVTNDlkMFROSTd1VmFNTG9IVTdiYjJNL2lMcUY4QjNrMGlnZWdaSlNrcDQ2NCtaY2w4Q2lLOUpWRmx2OEtvajFEdzhCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTmZiQ3YvK2Z4SUk2WXprb3BVY2c0TnJENnptcEhzb05YUkVmUkExSHdicFZsSEMxSTBCVUlGYjNXUGxubEpSNDhOeVBFWXhFRk92amlLVHNBNGM1Z3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc4OTk1ODIyNTo1M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjdGR5RDQvaDNwYjVteWRRSWozVDdGRmJZb3BOUjl6b1BzOWdlcTNSblFSIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5NjEzMTE1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNNYiJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐌𝐑-𝐃𝐀𝐒𝐀-🏛️",
  author: process.env.PACK_AUTHER || "MR DASA",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "MR DASA",
  ownername: process.env.OWNER_NAME || "MR DASA",
  errorChat: process.env.ERROR_CHAT || "94729280674",
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
  LANG: (process.env.THEME || "WASI").toUpperCase(),
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
