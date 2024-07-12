const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263714830715";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_12_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0LFxuICAgICAgICA0NixcbiAgICAgICAgMTY1LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDkwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTAwLFxuICAgICAgICA5NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjU1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDksXG4gICAgICAgIDUwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIyLFxuICAgICAgICA5NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE0LFxuICAgICAgICA1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDYxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQwLFxuICAgICAgICA1NixcbiAgICAgICAgMTM2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTAyLFxuICAgICAgICA0MyxcbiAgICAgICAgODMsXG4gICAgICAgIDkwLFxuICAgICAgICA0NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDgyLFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMixcbiAgICAgICAgNTIsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTM1LFxuICAgICAgICA5NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAzMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxODIsXG4gICAgICAgIDcyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjQzLFxuICAgICAgICA0NCxcbiAgICAgICAgODksXG4gICAgICAgIDk0LFxuICAgICAgICA5MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ2LFxuICAgICAgICA2MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTcsXG4gICAgICAgIDQ1LFxuICAgICAgICAzNixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyLFxuICAgICAgICAxMjksXG4gICAgICAgIDEwNixcbiAgICAgICAgNjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTgzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiK0JGZDA1V1NDYWJRVHB3M3JYN0lhV3pHWDM5TW1MRmFZcjgwYjIwYmp3QT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3MTQ4MzA3MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkM3MjcyQUZBREFBOEMyRjU2NDE4NTRCRDk3NUY3NEVCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDgwNzk0MlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQcjlwekY2NFE5eThSMlNEM1NiOHZ3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjRkMWI4NGMxLTU0MjgtNGQyOS1iOTU4LTkzY2U2Y2RlMDE3MFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzksXG4gICAgICAzNCxcbiAgICAgIDQ2LFxuICAgICAgMyxcbiAgICAgIDEwNCxcbiAgICAgIDkxLFxuICAgICAgMjUzLFxuICAgICAgMTg4LFxuICAgICAgMTUxLFxuICAgICAgNjgsXG4gICAgICAxNDIsXG4gICAgICAyMzIsXG4gICAgICAyLFxuICAgICAgODYsXG4gICAgICAxNjIsXG4gICAgICAyMDEsXG4gICAgICAxNjAsXG4gICAgICAyNDgsXG4gICAgICAxMjksXG4gICAgICAyMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODAsXG4gICAgICAxODksXG4gICAgICA1NCxcbiAgICAgIDE0OCxcbiAgICAgIDE3MyxcbiAgICAgIDE4NyxcbiAgICAgIDE3NyxcbiAgICAgIDE2LFxuICAgICAgNTAsXG4gICAgICAyNDEsXG4gICAgICAxMDAsXG4gICAgICA0NSxcbiAgICAgIDYwLFxuICAgICAgMTM3LFxuICAgICAgMTYsXG4gICAgICAxMDksXG4gICAgICAxNjMsXG4gICAgICAxOTEsXG4gICAgICA0NCxcbiAgICAgIDk2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjNSWlMzQzQ2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3MTQ4MzA3MTU6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTk2MTIxNTk0OTcwMTg2OjNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQm9zcyBMYXN0XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGJuakE4US9PUEZ0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSUDVUbGRudWhDTmRBUXUzYW9QQjYzdnJhVWVZVmRkbDNqb3BqZjZ6ZUI0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImZVWmt4VDBrZXVCemhZL1dJeVFFU1FheXNSOFh2QUVRVTBaamZvSWEzODdFVElnNUljS1g5cFZDSHBaZWM2ckxuZkNYRFdLOXNRczdUNzZERVZob0NnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIi96MGRrVU53U2lYbzg3cXc0K2lqbFdWVFNRUXlUdk0xNUNRSmxrellZMVpibVRLZU9VdFNjU1YzZlZNcEM0dU9Xa1hwcGIydlRYbGFOSGptVGY4MWhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MzcxNDgzMDcxNTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAzMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwODA3OTM1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRFZVXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEVlUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJQbnhHN00zZEJPdkNXR3gvYmIya0JMQlV6UjFFT29INXpEWEhTRkdSS0ljPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMxNjY3MTkwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA4MDc5Mzc2MjVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "BOSSLAST",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
