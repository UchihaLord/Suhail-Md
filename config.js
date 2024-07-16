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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_56_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTA2LFxuICAgICAgICA0NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzksXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjIyLFxuICAgICAgICA1NCxcbiAgICAgICAgNjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTYzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDY4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUwLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ1LFxuICAgICAgICA1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTk4LFxuICAgICAgICA5MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjksXG4gICAgICAgIDU3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDM5LFxuICAgICAgICAyMSxcbiAgICAgICAgOTksXG4gICAgICAgIDkzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMyxcbiAgICAgICAgNTksXG4gICAgICAgIDIzLFxuICAgICAgICAxODcsXG4gICAgICAgIDgxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2LFxuICAgICAgICA2NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMSxcbiAgICAgICAgODAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMxLFxuICAgICAgICA0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDM5LFxuICAgICAgICAzNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyLFxuICAgICAgICA4LFxuICAgICAgICA3NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExNSxcbiAgICAgICAgODcsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTk1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTEwLFxuICAgICAgICA4MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDg5LFxuICAgICAgICAyMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjEzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMixcbiAgICAgICAgNzksXG4gICAgICAgIDg4LFxuICAgICAgICAzMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjEyLFxuICAgICAgICAzNyxcbiAgICAgICAgODQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJZMmtjbTc1YnRLSFlqVEcxYWJaRWFlQTl0a1pFckw1UlJxRmFJeENubzk4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI0MUNWVmNheFRIZVN2emtZQjNtQndBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjc5MzkzYjM2LWNjZDEtNDUwYi1hN2FlLWNjMTYwNWRmZjQ0NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOCxcbiAgICAgIDIyLFxuICAgICAgMTQsXG4gICAgICAyNTUsXG4gICAgICAxMzIsXG4gICAgICAyMjIsXG4gICAgICAyNDUsXG4gICAgICA5MCxcbiAgICAgIDk1LFxuICAgICAgMTAzLFxuICAgICAgMTk3LFxuICAgICAgMTgwLFxuICAgICAgMTUwLFxuICAgICAgMTM3LFxuICAgICAgMTAxLFxuICAgICAgMjI3LFxuICAgICAgMTIxLFxuICAgICAgMTg1LFxuICAgICAgMTU0LFxuICAgICAgMjM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMixcbiAgICAgIDIzOSxcbiAgICAgIDU1LFxuICAgICAgODQsXG4gICAgICAxMTcsXG4gICAgICA5NSxcbiAgICAgIDYyLFxuICAgICAgMjEzLFxuICAgICAgMTgxLFxuICAgICAgNzEsXG4gICAgICA2OCxcbiAgICAgIDEwNCxcbiAgICAgIDM0LFxuICAgICAgMjA2LFxuICAgICAgMTc2LFxuICAgICAgNDAsXG4gICAgICAyNDIsXG4gICAgICA3NixcbiAgICAgIDE5NixcbiAgICAgIDIzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3Q0RYNldHRVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzE0ODMwNzE1OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5NjEyMTU5NDk3MDE4Njo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0liMzBwOEVFTjJqMmJRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUFlBOTdpWlVPMkhtTUVnNGMvdFhzbElLM3djdXF4SDdiOEh0ek03VkZIbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ4ZTYreVhPNzduK1ptenhKSVI2bmRFc05RZTlWZ1VhaGlXbWI2MTRLSTU0ZkNOYTBmcFNKQStDaU4ya0dJQ0tBNU5OVDVHdldRQ0JmOU5DbU5iT2NDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJPV2FjdlhSamtweDc5TlFLYVFZWjhkOVFDZFJPbS81eGVGZlBFc2pkSHkzVGFENkZpS2I3d2Y3YlFhWXIzTGR6bTF4NjBYVDkxZEtnWDM5NGxNWG1Bdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3MTQ4MzA3MTU6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjExMjczOTMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCM1hcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUIzWC5qc29uIjogIntcImtleURhdGFcIjpcIjB3SzBFa2ZWaXYxZDduWFVTb01vTjRqbHdvMWp6cmhFemZuaXozcEpQQ1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE0MDExMjI2MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTExODg5OTE1MlwifSIKfQ=="  // PUT your SESSION_ID 


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
