const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  SESSION_ID: process.env.SESSION_ID || "EDITH-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0xGeE5PL0ZJZVNiYWRqb09TT082cURBaXZtN2oxUkZMa2ZEdnNIazhtdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOHNYbFpFTjRZWmN4bjkyS0pDWkErcGN3ZU5raFFiTEZmRGtLNlYxa2hrQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTFc2ZUJOM09OVFhOSWprQlVPdEQ3N1B4MWtJTWxzODRjcGJLWHlsV1hVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJScVlNRzhPUE56NHZ1YktSQTNuVjF1MzM2UGtJOGhzVWs5NytPYjdJK1VnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFBSjVRMzVkb25XV2FxUmZwVEhoZGJhcWJVL1ovek02NWhnSVBnNGMxMFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IisrRzNuRTRhRjdBSW9aOUVNVzl2OTdsdXdjTksvQjNQYnB4aHd6L01lVkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0E2Z1FEZXpVMDAvUGpqN25wU3hTb2RjQmhmdFVJVkNXb3UrKy84cWVWcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU5sc2grZkQ4SFJsNVFrT045TUZPSDdObmpjUzJjY2ZEQW9GRkhITmlsUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlZQWJrOTRiR2ZWaHFsMGFsaVM0MnNPRTZOZ1dpU04wNWZVMVZGU084TnNiamJYMUxKeEs4RkVuQjNVdW55Njh5ajBWT0pjRUFwQ1FhazVNZ09ubUJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI0LCJhZHZTZWNyZXRLZXkiOiI4UGZBYlM4ZG1IaVR6eXBaaHNVSzNSeldRWjdIUXhBWkpVc2FINXd2WXZBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjQwNzcwODExOTI5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDQUQyODA1OERBRDdGMTlFRjkwQzNFMjREQzlCQTQ2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTkzNTI2ODB9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IlFNMTZRTjZKIiwibWUiOnsiaWQiOiI0MDc3MDgxMTkyOTozN0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjIwNzQzMDI2MDYzMzcyOTozN0BsaWQiLCJuYW1lIjoi4pyH4oCMIOKcueKAjCAgICAgICAgICAgIOKcuSAg4pyH4oCM26oifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09LM3JiWUNFT0d1OXNZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InZ2UFVoVFl5K0s1bVFCbGR6TFpSMTBBTUw4dC9LUHhWVjg1eVZBRjRzSDA9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImxKMFAraVcrZXFmeExYK2dYYU1NT3gxeVVFekNqYU1hajdDbXlIcjJ3NkdmY2lsSjZuc3I2VjNPdUExWk14cytYUytYTDFBaDJ0V0d1UUM0bHB3aUN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJxcllGRVpFaWRWbW80eWJzTzFCckU3RkNTdFpwZ3o1dDRVWW14TEdEajdqZTdUL3VnOGlyTFNoc2JFSWwyNUlGT3pKc2dWME9kTFIrVzFYTUQ1QzhDQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjQwNzcwODExOTI5OjM3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmI3ejFJVTJNdml1WmtBWlhjeTJVZGRBREMvTGZ5ajhWVmZPY2xRQmVMQjkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1OTM1MjY3NiwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFGdSJ9",
  START_IMG: process.env.START_IMG || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS EDITH-MD*",
  WELCOME: process.env.WELCOME || "false",
  ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
  PREFIX: process.env.PREFIX || ".",
  MENTION_REPLY: process.env.MENTION_REPLY || "false",
  MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  BOT_NAME: process.env.BOT_NAME || "EDITH-MD",
  STICKER_NAME: process.env.STICKER_NAME || "EDITH-MD",
  CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
  CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
  DELETE_LINKS: process.env.DELETE_LINKS || "false",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "40770811929",
  OWNER_NAME: process.env.OWNER_NAME || "cosmin",
  DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Bandaheali*",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *EDITH-MD*⚡",
  READ_MESSAGE: process.env.READ_MESSAGE || "false",
  AUTO_REACT: process.env.AUTO_REACT || "false",
  ANTI_BAD: process.env.ANTI_BAD || "false",
  MODE: process.env.MODE || "public",
 BOTMODE: process.env.BOTMODE || "button",
  ANTI_LINK: process.env.ANTI_LINK || "true",
  ANTI_MEDIA: process.env.ANTI_MEDIA || "false",
  AUTO_VOICE: process.env.AUTO_VOICE || "false",
  AUTO_STICKER: process.env.AUTO_STICKER || "false",
  AUTO_REPLY: process.env.AUTO_REPLY || "false",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
  PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
  AUTO_TYPING: process.env.AUTO_TYPING || "false",
  READ_CMD: process.env.READ_CMD || "false",
  DEV: process.env.DEV || "923253617422",
  ANTI_VV: process.env.ANTI_VV || "false",
  ANTI_CALL: process.env.ANTI_CALL || "false",
  REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
  ANTI_DELETE: process.env.ANTI_DELETE || "true",
  ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
  AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
};
