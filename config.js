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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263788521064";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_26_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTk1LFxuICAgICAgICA4NixcbiAgICAgICAgMTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY2LFxuICAgICAgICA4MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTksXG4gICAgICAgIDExLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI3LFxuICAgICAgICAyMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjksXG4gICAgICAgIDY2LFxuICAgICAgICA5NixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM5LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDY2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDk2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAzNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDkyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTAsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjksXG4gICAgICAgIDM1LFxuICAgICAgICA5NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDk4LFxuICAgICAgICAyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODYsXG4gICAgICAgIDg4LFxuICAgICAgICA2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDU3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDM3LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODIsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDc4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzLFxuICAgICAgICAzOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDU3LFxuICAgICAgICAxNCxcbiAgICAgICAgNSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTgzLFxuICAgICAgICA4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjE5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDc2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTc0LFxuICAgICAgICA5NCxcbiAgICAgICAgODIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIzK1hzdjFPMUs4YzhTZXBBYVgzeVVsL0ZlcW5kT0xETDV0SEJ0ZDQxano0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2Mzc3NjgzNDg0N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDEwMDNCQUM3N0VENkNEMzUyMUEwMURDNjlFMUY3NUFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMzAxOTc0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzc2ODM0ODQ3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3QzNGN0IyQjNDN0FDMjU1RDVCQjFGMUNDM0U4REUzRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEzMDE5NzRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3NzY4MzQ4NDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkM2QjQ5REU0NEExNTdBN0VGRDBFMDM0NzBFQzEyRjY5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTMwMTk3NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2Mzc3NjgzNDg0N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNDNFQUU1RTBERUZBRkJENjIzMzlGMTI2NDU5MDkyOTlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMzAxOTc2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImpLZVVCcjJOVFRhYm1Kb05mZFJsMndcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTZiOTc0N2EtOGFmNC00NjE4LWE2NTYtOGE3NzI3NGRlNWZmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MyxcbiAgICAgIDI3LFxuICAgICAgNzMsXG4gICAgICA3MCxcbiAgICAgIDE1NCxcbiAgICAgIDE2NyxcbiAgICAgIDk4LFxuICAgICAgMzksXG4gICAgICAyMjMsXG4gICAgICAxMzUsXG4gICAgICAyMTAsXG4gICAgICAyMzAsXG4gICAgICA0OSxcbiAgICAgIDE3MSxcbiAgICAgIDE0NyxcbiAgICAgIDI3LFxuICAgICAgMTIyLFxuICAgICAgMzgsXG4gICAgICA2MCxcbiAgICAgIDE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNSxcbiAgICAgIDk0LFxuICAgICAgODgsXG4gICAgICA4MixcbiAgICAgIDcsXG4gICAgICAxOSxcbiAgICAgIDE1NyxcbiAgICAgIDQwLFxuICAgICAgMTYyLFxuICAgICAgMjU0LFxuICAgICAgMTY0LFxuICAgICAgMTQ5LFxuICAgICAgMjAyLFxuICAgICAgMjQsXG4gICAgICAyMyxcbiAgICAgIDE5MyxcbiAgICAgIDExLFxuICAgICAgMjUsXG4gICAgICA3NSxcbiAgICAgIDI0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4WjFLSzZSM1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzc2ODM0ODQ3OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0ODI3OTkzNzUwNzUyMTo0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCdk6PwnZOy8J2TvfCdk6rwnZO3IDFcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOK1NxdkFGRU5IMzQ3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjBLWU02N0ZSdFNlSzdnMlR0Y25HcENodHREaTlZUFpEd3ZkYnhHUmt3U289XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiR0NDN0JrNUd0UkFtN0FlMU1ZUlZ4SkJ1WkxScmlkcTJ0b0Rtbzg1cy80Ui9GWlJidXJac0NiWWZ1bHpRcEdKWGdwVWtTbXBPSEF4YkxJamkvL05WQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSTNFTFRMS29WWmxYVCtUZlQyQlQxaisyaHpWQlVpNXlaREFxVlBIbnBmbVlvelNneGpnZXIydnA5UEIxZWorV0Vhb0lmOHRlTFRzNDdNRkVmSTVJQ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzc2ODM0ODQ3OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTMwMTk3MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUx3Y1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTHdjLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaE9reXJkT082bHdiTk1yY1dTU1d0RkpwaVhOV1h2VDBqZURnQmcrNkFwOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTc3NzQ4ODMxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjEzMDE5NzI2MDlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "TTC-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "TTC😎",


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
