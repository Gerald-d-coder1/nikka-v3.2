//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Nikka-v3";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUFXUGxuOGowa2ZSUW9NcHpUdkZBRzl2dWVydVZhL29kai82NHd6MnAzZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmtNR2JXS1Rya3BFQmJkVVRGLyttcDdmdkI5WXZDeGRIajhoRmE1aWhXRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnUDlQOWxCbkNKdzJTTFE2SGJQb3ZIYmlMQTRKWFhWRm1FNjd0UzFIdEVZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzSndURzV4WVBXSnp3YWVnVmNhVng2NmM2VFUzUmZnQXRnK0IxV1pLVVNZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZNNEMrTUxDS1grTTZVYVdYS0wvMmVhNkNLeFF1alNZd0F3bUtHRzAxWGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNrZEdKejR0SEFDbEJOUnVHZmhIVUViVlU0ZEN1R1E5TENsV1dlVVpqMEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU9MZ0d2dVZWV2VDZFk5Zi9qak1JTnZ2UzJUSmprOU5tY0l6dkpMb2hVND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibkFXNlVYOTdrWGVvdEE2M2VoWkxiSnU1Q0V1OWtWR2RzTUpDUmtjQ2Qwbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVmUkZMczlQUXFqY1k0aFBzYmFsYTE5MzZSbFlSOHRHZFN1c1c0QXF2d0lqM0xvRDlMNm5GbHFKbCtLTGF2ZGM0THA1ZWNwNFZDeG4zcHRvTGg1NWl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzEsImFkdlNlY3JldEtleSI6IlRzK2FZL3hnMUtRVFJ1YjIyZnFxMVVKS09jZkV5L0M0MWxhREw5eXJ3d3M9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IktHV0FwcEUzU1Q2MWdMY09fMVNxVkEiLCJwaG9uZUlkIjoiYzkyNTA1ZGMtZjA5MC00ODEwLTllOTctOTZkNGUyYTRkMzk0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllZdkdFcUVjM2llZFpMd0FRNzVDb0ZCejFRVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5bmc0ZkpQR3lJcUVNYWQrbjgvdFBocHdYa0E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWjFMRllIWkwiLCJtZSI6eyJpZCI6IjIzNDkwNzE5NDU2MjI6MTRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiT25seTFHb2pvIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKUGRsS2NERU1QRHlMb0dHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJKb096VmMyNEdWQmpTZHg5OGZCSGR1Y2ZlY0VhY3Z3TnJRaUt1dS8veEYwPSIsImFjY291bnRTaWduYXR1cmUiOiJuNGZEMVpRWGYwUElhbjdObzJZbktod09pS2hVTklmKy95VjliZStydGFRaE96WFRTLzJLRnc2NmVtSGFrWm0zYzNDTlJPbkdaczJzTnRjRWkyYXBBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQ3ovU0trWkIyR0pBQ0h0MTlLckhZNWJCVk02TGlOOVRSL3d3c085aXVBWmQrVlY1aHE4WFhMcHc0SmhDOGZkQ1BHaUI3SVE3SlYzc0dhSUZ0OFJxalE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDcxOTQ1NjIyOjE0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNhRHMxWE51QmxRWTBuY2ZmSHdSM2JuSDNuQkduTDhEYTBJaXJydi84UmQifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzM0MzU4NTcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSTZPIn0==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "NIKKA-V3",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
