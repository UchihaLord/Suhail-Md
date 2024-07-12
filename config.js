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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_54_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDQsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODcsXG4gICAgICAgIDY1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAzOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDExMixcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTgzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQxLFxuICAgICAgICA4MixcbiAgICAgICAgNDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM3LFxuICAgICAgICA0NyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI1LFxuICAgICAgICA0MixcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyLFxuICAgICAgICAzLFxuICAgICAgICAyMDksXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk4LFxuICAgICAgICA2NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTUsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTksXG4gICAgICAgIDMxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjIzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDg0LFxuICAgICAgICA1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ0LFxuICAgICAgICAzLFxuICAgICAgICA2NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzNixcbiAgICAgICAgODgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDksXG4gICAgICAgIDE5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI2LFxuICAgICAgICAxNixcbiAgICAgICAgMTk0LFxuICAgICAgICA5MixcbiAgICAgICAgNjEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2NSxcbiAgICAgICAgOTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5MixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTA0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMxLFxuICAgICAgICA3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDYsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDg5LFxuICAgICAgICA2NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDgyLFxuICAgICAgICAxODMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDksXG4gICAgICAgIDMxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIzaDcwakhuSjZjRVNFa1VRYWI0dm4vL0h2SXQ1SCtzVUJhVVhva3cyUk9jPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJIZ2ZHd3pMT1JYV2lLUWZrVXBFaHBRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU2YzAzNzExLTA2NjktNGNlYi04Y2JhLWY5ZGE3ZGM1ZTQ5NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOSxcbiAgICAgIDE1MSxcbiAgICAgIDEwNixcbiAgICAgIDcxLFxuICAgICAgMSxcbiAgICAgIDUxLFxuICAgICAgMjA4LFxuICAgICAgMTU0LFxuICAgICAgNDgsXG4gICAgICA3MCxcbiAgICAgIDM1LFxuICAgICAgMTE1LFxuICAgICAgMjE2LFxuICAgICAgNTUsXG4gICAgICAxNDIsXG4gICAgICA0MixcbiAgICAgIDEyMCxcbiAgICAgIDE4MixcbiAgICAgIDE5NCxcbiAgICAgIDExMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDUsXG4gICAgICAyMjMsXG4gICAgICAyNDksXG4gICAgICAzMyxcbiAgICAgIDEzMyxcbiAgICAgIDU5LFxuICAgICAgMjEsXG4gICAgICAyMTAsXG4gICAgICAxMTYsXG4gICAgICA4MyxcbiAgICAgIDI0NCxcbiAgICAgIDE1OCxcbiAgICAgIDExMixcbiAgICAgIDExMSxcbiAgICAgIDI2LFxuICAgICAgMjQzLFxuICAgICAgMTMwLFxuICAgICAgNDUsXG4gICAgICAxNDUsXG4gICAgICAyMDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOTJZSFNTQ05cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MzcxNDgzMDcxNToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTYxMjE1OTQ5NzAxODY6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQWG5qQThRdk1MRHRBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlJQNVRsZG51aENOZEFRdTNhb1BCNjN2cmFVZVlWZGRsM2pvcGpmNnplQjQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUUthVjhuMklERFd6UVk3R3JpdmlSM29yV0Uwejl1dFdGUEZRbmMyTDVMNno4bWcvRW1WamRVakpFdWZ3b21LNzRHdTRhcjIwa29ibkx3OFBERmlpQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTVVSRElwWGhZdWdVaU85bUxNR3RoZFFldjBWSW9UdXFneUJyMjBLWEsyWmZNMEdIK1VHK2ZzSGlSYWxnbUs0bEtmTnFvUDZhQ2lyMkx4VFJndEFGaWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzE0ODMwNzE1OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDMwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA3NzA4ODEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHSmxcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdKbC5qc29uIjogIntcImtleURhdGFcIjpcIjdlTTFJWjZFRE91TmJSOGlGWm5vMFdPTGJ6bmkxc1M5K2ZFUzlZUmVabGc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzE2NjcxODksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDc3MDg4NTgyMFwifSIKfQ=="  // PUT your SESSION_ID 


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
