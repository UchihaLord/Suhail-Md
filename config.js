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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "263788521064";
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_02_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDk5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjE2LFxuICAgICAgICA0NCxcbiAgICAgICAgODcsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTksXG4gICAgICAgIDQ2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNixcbiAgICAgICAgMjQ2LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NCxcbiAgICAgICAgODQsXG4gICAgICAgIDc0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTksXG4gICAgICAgIDk0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTYyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgOCxcbiAgICAgICAgODUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjIyLFxuICAgICAgICA4LFxuICAgICAgICA1MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDkyLFxuICAgICAgICAxOCxcbiAgICAgICAgODcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEzLFxuICAgICAgICA2MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI1LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDMsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTYzLFxuICAgICAgICA2NSxcbiAgICAgICAgMyxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMixcbiAgICAgICAgMjExLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI4LFxuICAgICAgICA5OCxcbiAgICAgICAgNTksXG4gICAgICAgIDY2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTkxLFxuICAgICAgICA2NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjUsXG4gICAgICAgIDg0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTk1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTkwLFxuICAgICAgICA5NixcbiAgICAgICAgMjEwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjksXG4gICAgICAgIDg1LFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzksXG4gICAgICAgIDM0LFxuICAgICAgICAxODMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTUzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjksXG4gICAgICAgIDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDM0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI2LFxuICAgICAgICAxMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDg2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDksXG4gICAgICAgIDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDg3LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSjA1M2hqdnV3MVNPNFdxVTVVWXdqdkpOU3Z4TCtCRmlhdDN4aGNEZE1Qdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3Nzg2Njg1MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkZGQUQwMjNERDgxMTUxN0NDMDc5NkY4QTM1MkY2NUJCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTA3MDE1M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2Mzc3ODY2ODUyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTIzQjM5MjIzNjdDRkUyREYzMkYyNEZDQkZCODk2QkRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMDcwMTUzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzc4NjY4NTI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCODZENDJBNzUyNzk0RjRDMEMwMDcyNENDNjlGREE0MFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEwNzAxNTVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3Nzg2Njg1MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjlCRkE3NUQxQzQ1QThDM0U4ODFDNUJCNTY0ODEwQjU1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTA3MDE1NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQVGRXcG1kU1JCMkpXZmlkRDhRdm9RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjExMzc2NGNjLTNiNjUtNDM1OS05MDhjLWJkMDRiNzBjNjk2M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDUsXG4gICAgICAzMCxcbiAgICAgIDI4LFxuICAgICAgMTAyLFxuICAgICAgMTAxLFxuICAgICAgMjE5LFxuICAgICAgMTAxLFxuICAgICAgNTcsXG4gICAgICAyNTAsXG4gICAgICA5NSxcbiAgICAgIDE1NyxcbiAgICAgIDEzOSxcbiAgICAgIDk0LFxuICAgICAgMjI0LFxuICAgICAgMjQ2LFxuICAgICAgMzEsXG4gICAgICA1OCxcbiAgICAgIDE0MixcbiAgICAgIDIxNSxcbiAgICAgIDg0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MSxcbiAgICAgIDE3MCxcbiAgICAgIDEzMCxcbiAgICAgIDExNyxcbiAgICAgIDM2LFxuICAgICAgNjcsXG4gICAgICAxNTIsXG4gICAgICA4MCxcbiAgICAgIDQxLFxuICAgICAgMTIxLFxuICAgICAgMTA5LFxuICAgICAgMjI0LFxuICAgICAgMTgsXG4gICAgICA5MyxcbiAgICAgIDE3OCxcbiAgICAgIDEzMixcbiAgICAgIDEzMyxcbiAgICAgIDEwMCxcbiAgICAgIDI5LFxuICAgICAgMTk4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlNFQTYzN1ZGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3Nzg2Njg1Mjg6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjY0ODQ5NjQ0ODU5NTU5OjNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQm9zcyBMYXN0XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2kxa3JFRkVNSGsxYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0dkRuYmRvNkw2OFdkLy9xMTk3UG53TnlJYzlwZEdUSkFrbEpQN3FBMWhZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInlLYU5LTUdiaTBpSUdIcTA5RWw2MFBBbFRMUFM4bUxhUnVqQW0wSGQzekNXemFGdmRtanRwbnlmSlhZMHYzdm9ES1loeS9RUjJDTTRtaHNXNFZwcEN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInBpeTV6N1BtaDJvVyt4aFhPQjFMUkdZNXJvbnluczk5blBDT3JqZnl0cDRheWsyYjgzdWo1MGRQNjdkQ2NXcmNWOUp0WnhWZFkzRG1wTmk1RmgvcENRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2Mzc3ODY2ODUyODozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMDcwMTQ5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUDM3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQMzcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ2YzQ2V1NzSlBvTXJkSXVyN0x0T1N2UTljZk8vUUc2N0hBU1poVVZkTFNFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NDUyMzk1MjgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTA3MDE1MDc0OVwifSIKfQ=="  // PUT your SESSION_ID 


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
