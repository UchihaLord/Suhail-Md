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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "263714763600";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263712962419";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_44_08_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDk2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjM5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjM0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTY1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDU4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDU5LFxuICAgICAgICAyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTksXG4gICAgICAgIDYsXG4gICAgICAgIDU2LFxuICAgICAgICAyOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyNSxcbiAgICAgICAgODksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTkwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDExLFxuICAgICAgICAyMixcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTI0LFxuICAgICAgICA0OSxcbiAgICAgICAgODgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTA3LFxuICAgICAgICA2NSxcbiAgICAgICAgMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjYsXG4gICAgICAgIDExLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTYwLFxuICAgICAgICA1NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTczLFxuICAgICAgICAzNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMxLFxuICAgICAgICA1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDcwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODEsXG4gICAgICAgIDM0LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDkxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTgsXG4gICAgICAgIDk5LFxuICAgICAgICA4NixcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDU1LFxuICAgICAgICA1LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDcsXG4gICAgICAgIDExLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODcsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjEsXG4gICAgICAgIDEzNixcbiAgICAgICAgOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTczLFxuICAgICAgICA2MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxODgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA3LFxuICAgICAgICA5LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMixcbiAgICAgICAgNDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI5VTNPNGJNOHRUZ3hFZFAwcTBURHI4RnpaVW1ra2JkUzFqTFpicjU2UjEwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJSU0xpd1JfMVFwMnc3aGI3ZnY3aGZnXCIsXG4gIFwicGhvbmVJZFwiOiBcImI4ZWMyMjJhLTNhZmUtNDE0MC05OTM0LTZkYWE0MDhlZjNjNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjksXG4gICAgICAyNDYsXG4gICAgICA1NSxcbiAgICAgIDEyOCxcbiAgICAgIDcyLFxuICAgICAgNzAsXG4gICAgICAxMzQsXG4gICAgICAxNDAsXG4gICAgICAxNzYsXG4gICAgICAxNjEsXG4gICAgICAzMCxcbiAgICAgIDk1LFxuICAgICAgNzIsXG4gICAgICA0OSxcbiAgICAgIDIyLFxuICAgICAgNjAsXG4gICAgICAxMDQsXG4gICAgICA5NyxcbiAgICAgIDM5LFxuICAgICAgODZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzIsXG4gICAgICAxMTIsXG4gICAgICA0NyxcbiAgICAgIDYyLFxuICAgICAgMTk1LFxuICAgICAgMTM1LFxuICAgICAgMzMsXG4gICAgICAyMjUsXG4gICAgICAyMDAsXG4gICAgICAxNjUsXG4gICAgICA0OSxcbiAgICAgIDUsXG4gICAgICAxNzQsXG4gICAgICAyMjEsXG4gICAgICAxMzYsXG4gICAgICA0NyxcbiAgICAgIDMzLFxuICAgICAgMTU1LFxuICAgICAgMTg0LFxuICAgICAgMTAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlRGMjlGR1FBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3MTI5NjI0MTk6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJhcmxpY29fMDZcIixcbiAgICBcImxpZFwiOiBcIjUxOTUyMzk0MjAzMTk4OjI3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xHditQZ0NFUGF0MTdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQmJYcTFocyttWjBsS3Q4YWNIdHpkSE03T1FOU3p6Tmt6NnBwaVNRQ1N4cz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXbW16WmMvU0VWcDJLRWRwNlhWRnlpVnh5VUpDZW0zeFdYUFk0SnJHbjFzYmRPRFR1djllREJGSTk4N05oYTc4eGJkc3hqbDloL0Z1VXh0RFoyRHBEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJMemd3M2cyYjIvSlJrWUxOOG9MazdHeVlnb2Z4RGQ1RWRvYVBZMTc3RFNHLzArYk1CNkZZT2NFcUVUbi9ieDRvODNtQ21ndEtXbmVGTEZabmY4SnlCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3MTI5NjI0MTk6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMxOTMwODIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNdWtcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU11ay5qc29uIjogIntcImtleURhdGFcIjpcInQxN2RlQjBnMFF0RmovQ3FCV2xpQ2VDN0NPQkNmMk11eEw4VUxkQ1lUQmM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzkwNTAxMjk2LFwiY3VycmVudEluZGV4XCI6MTAsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiw2XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ARLICO_06-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "ARLICO",


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
