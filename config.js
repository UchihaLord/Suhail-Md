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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263714763600";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_22_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjEyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTQwLFxuICAgICAgICA1MixcbiAgICAgICAgMTI4LFxuICAgICAgICA2OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjM1LFxuICAgICAgICA2NixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE1LFxuICAgICAgICAyNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA0LFxuICAgICAgICA3MixcbiAgICAgICAgMzQsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ5LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NCxcbiAgICAgICAgMTQxLFxuICAgICAgICA4NixcbiAgICAgICAgMjM4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDksXG4gICAgICAgIDc4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI2LFxuICAgICAgICA0NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI3LFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTIyLFxuICAgICAgICA2MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE5LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDgsXG4gICAgICAgIDkxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDgxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1LFxuICAgICAgICAzMixcbiAgICAgICAgNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyOSxcbiAgICAgICAgODYsXG4gICAgICAgIDIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDIyNixcbiAgICAgICAgOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTk2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTE4LFxuICAgICAgICA4NixcbiAgICAgICAgMjE1LFxuICAgICAgICA0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDMyLFxuICAgICAgICA4MixcbiAgICAgICAgMTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDMyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExMixcbiAgICAgICAgOTQsXG4gICAgICAgIDUyLFxuICAgICAgICA2NyxcbiAgICAgICAgNixcbiAgICAgICAgMTc5LFxuICAgICAgICA5NixcbiAgICAgICAgNTksXG4gICAgICAgIDM3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTAwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjM0LFxuICAgICAgICA3MixcbiAgICAgICAgOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgODcsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNixcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDMzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDgyLFxuICAgICAgICAxODgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDc0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTIsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODUsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDM2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQyLFxuICAgICAgICA2NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJHWDFjcnVYOWdlZUF0ZnV5TjE0T016Uk91V0tzbVNSYXBDbUpyclA1YklBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJBR182cTNvZlFRLTZjSWRwYzJtcEJ3XCIsXG4gIFwicGhvbmVJZFwiOiBcImMyMDA2YTYzLWUyNzMtNGMyNi1iMjljLTE1ZWY3NWU2ZWY0YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzEsXG4gICAgICA5NyxcbiAgICAgIDE4MCxcbiAgICAgIDgyLFxuICAgICAgMTg1LFxuICAgICAgMTU1LFxuICAgICAgMTk0LFxuICAgICAgOSxcbiAgICAgIDUsXG4gICAgICAxMTUsXG4gICAgICAxMDAsXG4gICAgICAyNDAsXG4gICAgICA1NCxcbiAgICAgIDE1NSxcbiAgICAgIDE5NSxcbiAgICAgIDI1MSxcbiAgICAgIDE5LFxuICAgICAgMTg5LFxuICAgICAgMzQsXG4gICAgICA2MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMixcbiAgICAgIDEzNCxcbiAgICAgIDY5LFxuICAgICAgMjM0LFxuICAgICAgMTMzLFxuICAgICAgMjE3LFxuICAgICAgMjUzLFxuICAgICAgMTUyLFxuICAgICAgMTM3LFxuICAgICAgOTcsXG4gICAgICA0NCxcbiAgICAgIDEzNyxcbiAgICAgIDI1MCxcbiAgICAgIDE1MyxcbiAgICAgIDEyMixcbiAgICAgIDEzMixcbiAgICAgIDE4MyxcbiAgICAgIDIzOSxcbiAgICAgIDIwNSxcbiAgICAgIDE1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxQUMyQVBIMlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzE0NzYzNjAwOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJJTU5JR0VMUVVPVEVTXCIsXG4gICAgXCJsaWRcIjogXCIzNjIxOTk3OTMwNTIxNDo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0s3emtHb1F6c0x6dEFZWUF5QUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQjBPblNOL1NSYmF0Yml6Sm1vRUhjK3Q5ZkVzWVlzbjc5Mk1Obk1ma3V4dz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJLQkxuTzl1UzJCalB3NFN3QnArazJlSFZkZ1RNY2VWR2NaNld5Yko1THVFSnhBRTR1QTM5bzZ5OXNpQnNwTis3NGprYWJ1bzIwVDVuUmN1MVJ5RlZCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJVWUtrQ2lNMVFYNmozbE9yN2xwb3hkNnM4dWpyeFV1UDZQSmJvN2EzbTJ6dTdSZkszR0s3V0hpM0gzeEdtMzhjTE1yd0MvRU8vV0lBY1FsWWhjZlNoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3MTQ3NjM2MDA6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE1NTczMzFcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "TTC-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "IMNIGELQUOTES",


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
