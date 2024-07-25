const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="heshanprasad0@gmail.com"
global.location ="Colombo/SriLanka"


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github=process.env.GITHUB|| "https://bit.ly/BeautyCare-Ai-Bot";
global.gurl  =process.env.GURL  || "https://bit.ly/BeautyCare-Ai-Bot";
global.website=process.env.GURL || "https://bit.ly/BeautyCare-Ai-Bot" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/94b2fe5625d229823196d.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption ||  "This is *Allen Bot* 🤖 By BeautyAi" 


global.devs = "94753362699" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94753362699";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/94b2fe5625d229823196d.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_54_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA1NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDY1LFxuICAgICAgICA5MyxcbiAgICAgICAgMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODksXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzLFxuICAgICAgICAxODUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNixcbiAgICAgICAgNjQsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjYsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY0LFxuICAgICAgICAyLFxuICAgICAgICAzMCxcbiAgICAgICAgODIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExMixcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQyLFxuICAgICAgICA3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDc5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDksXG4gICAgICAgIDU1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDU4LFxuICAgICAgICA2MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgNjcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDgsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDU2LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk4LFxuICAgICAgICA5NixcbiAgICAgICAgNDcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDYwLFxuICAgICAgICA3NSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMyxcbiAgICAgICAgODUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTgwLFxuICAgICAgICA5OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDExLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4LFxuICAgICAgICA1MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDY0LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzLFxuICAgICAgICAzMixcbiAgICAgICAgODAsXG4gICAgICAgIDUwLFxuICAgICAgICA3MixcbiAgICAgICAgMTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDcsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTMxLFxuICAgICAgICA1NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidGJqWEJwekpkS3FraDNQeVIzK0JKcXJXSTU2UTh2V0lVSjJZWnBiZjVzUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc2NTg2NTQwN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTc3MDM5NjZCOEEwRDBGMkRGNERCQkE3NjNDNzJEOEJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxODkwNDcxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NjU4NjU0MDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkY3MUMyRjJDMEI5MjFDOThFOTI4RkJEMTJDMkU2NUQ1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTg5MDQ3MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzY1ODY1NDA3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDOTBFMTc2MzYwRkI5QTdDNDNDMEQ3MTRCQTdCQkEwOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE4OTA0NzRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc2NTg2NTQwN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiREEwMTkyNEE1QTI0M0EzQzJGRjFFRjMyOUVGRjY0RkRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxODkwNDc0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIktKalpreHFTUlhlbks0amwyaXpJeGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjU3NjNkZmEtNDFmZi00OTM2LTkxMzUtZmMyNWM2NzYxNWI3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc1LFxuICAgICAgMTM5LFxuICAgICAgMjYsXG4gICAgICAyMTYsXG4gICAgICAxMTUsXG4gICAgICA3MCxcbiAgICAgIDgzLFxuICAgICAgMTU3LFxuICAgICAgMTQ2LFxuICAgICAgNzgsXG4gICAgICAzOSxcbiAgICAgIDI0MyxcbiAgICAgIDcyLFxuICAgICAgMjQsXG4gICAgICAxMTIsXG4gICAgICA3MixcbiAgICAgIDEyLFxuICAgICAgNjAsXG4gICAgICAyNSxcbiAgICAgIDIzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTcsXG4gICAgICA5NyxcbiAgICAgIDI5LFxuICAgICAgMTcxLFxuICAgICAgOTksXG4gICAgICAxODUsXG4gICAgICAyNTIsXG4gICAgICAzMixcbiAgICAgIDE2NCxcbiAgICAgIDExMyxcbiAgICAgIDE0OCxcbiAgICAgIDE2MixcbiAgICAgIDIwNCxcbiAgICAgIDgxLFxuICAgICAgMjA3LFxuICAgICAgODUsXG4gICAgICA2MCxcbiAgICAgIDUzLFxuICAgICAgMjgsXG4gICAgICA3MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3MVFRQUJYRFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NjU4NjU0MDc6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTI0NjEwNDIzMDQ2MjYwOjRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiRFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ00rbXhNc0NFS0h0aDdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwia2tZNEluWm16UUc1WFdHeUcwTktVdEc5T0ppek1BQzFLbyt4Z2dneTlpaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ0eWNuNGpkRnY2T29sanROTVVaZmdrTmVEMzRYRyt4UlBCNlQzbzhtcXpsQlNweGM4cjVXLzRkVnpuV3hTeU1adGFtZjl2Q2RmZjZ4bzVIdG93alVCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJDOHd6ZzJETzVyRER3WTloRHhsd2VJNEpzOGlJT1h1aTVoNDFQUzN3bzFDekZiV25MNzlTRWJVT2hXaUg2TENnQ2tUTjlDcE93TTZUdCtGVjFKTE9Ddz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc2NTg2NTQwNzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTg5MDQ2OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZ5b1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRnlvLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSWEzcHRwYm5DcHM5WkJKRGxmL2hKUUx0M21Hb1hlb1lEOFZPQ3VsMFh4Zz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2OTUyNzYzNjcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTg5MDQ3MDE0MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "Aztec_Md", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "Hello! This is Allen Bot.This bot has lots of useful features. Powered by BeautyAi" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Allen Bot",
  ownername:process.env.OWNER_NAME|| "BeautyAi",


  errorChat : process.env.ERROR_CHAT || "Error ❗",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "AllenBot"  ).toUpperCase(),



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
