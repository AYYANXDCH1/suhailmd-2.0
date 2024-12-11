const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "92 328 8738955";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_10_12_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDg4LFxuICAgICAgICA1NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ0LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIxLFxuICAgICAgICA4MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODQsXG4gICAgICAgIDY3LFxuICAgICAgICAzNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDQxLFxuICAgICAgICA2OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODUsXG4gICAgICAgIDMwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjAsXG4gICAgICAgIDE5NixcbiAgICAgICAgODQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0LFxuICAgICAgICA2NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDksXG4gICAgICAgIDE4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDg1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDczLFxuICAgICAgICAyNDYsXG4gICAgICAgIDgxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTcwLFxuICAgICAgICA3MixcbiAgICAgICAgNzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjYsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTksXG4gICAgICAgIDg3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNixcbiAgICAgICAgNDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgODQsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzksXG4gICAgICAgIDExOCxcbiAgICAgICAgODgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTc0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE4LFxuICAgICAgICA5LFxuICAgICAgICA1NixcbiAgICAgICAgOTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDM4LFxuICAgICAgICA1NixcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDcxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODMsXG4gICAgICAgIDk3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDExNixcbiAgICAgICAgODksXG4gICAgICAgIDExNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTE5LFxuICAgICAgICA5OCxcbiAgICAgICAgMzksXG4gICAgICAgIDEwNyxcbiAgICAgICAgODAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMyLFxuICAgICAgICA2NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk3LFxuICAgICAgICA4NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIzZWlObGdBR3FiNWxQK0EwUldQT3ErVDg2SzFSRlRENklXRDVNakNpczBFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI4ODczODk1NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMUNDQzY1MDc4OUNBODQ1RjFBMzJENDYyMkI2MjUzMDJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzOTExODIyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkZNYl91Mnh2UUFDa1ZucDR5MEJCaXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWI5NGQ0OTUtMmE2ZS00ZWM0LWIzZWYtYmFlMTFkODNkMmY5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMsXG4gICAgICAyMTgsXG4gICAgICAxNDYsXG4gICAgICA4MCxcbiAgICAgIDMxLFxuICAgICAgMCxcbiAgICAgIDMzLFxuICAgICAgMTEzLFxuICAgICAgMTA3LFxuICAgICAgNDgsXG4gICAgICA4MyxcbiAgICAgIDkzLFxuICAgICAgMTI1LFxuICAgICAgOTksXG4gICAgICAxMjUsXG4gICAgICAxNjksXG4gICAgICA2NSxcbiAgICAgIDEzMCxcbiAgICAgIDU2LFxuICAgICAgMTQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NixcbiAgICAgIDIzOCxcbiAgICAgIDUxLFxuICAgICAgMTM3LFxuICAgICAgMTYsXG4gICAgICAxNDQsXG4gICAgICAxMTksXG4gICAgICAxMTcsXG4gICAgICA1NyxcbiAgICAgIDc1LFxuICAgICAgMTYxLFxuICAgICAgOTksXG4gICAgICAxMjksXG4gICAgICAxMzIsXG4gICAgICAyMSxcbiAgICAgIDEyNyxcbiAgICAgIDQzLFxuICAgICAgMjksXG4gICAgICA4MixcbiAgICAgIDE0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNRzhSREJKUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjg4NzM4OTU1OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQVlZQU4gWERcIixcbiAgICBcImxpZFwiOiBcIjE3MzY5NzU3MDc0MjQ4MzoxM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJYTJ6cmNCRUlQSzVib0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkUrZXFYOTQ2RXVrSWFJRzRmUFJRVVROMklUTVA4RU51eWNxMSt6ZW45ams9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTXVVZGRiM3h6Y2JVK2duSmlubnRQSG9MLzYyeEpSUlpPYmI0YkRZL3dvcEU0OHdOV1ZXUElTVmM1cjdJeHBNRXYvMS9LZEFmakkwR0laRktBNGtURHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNG5XaXdFMmRqMEkxdUJVUXdxQmtaNlVnM3dIb244cmg1NStWNzZsR2NPVGF4WG9Qclc1eDNycjBaTUd3N0FJUmNMZy9OOFhGcnpWZ21wcU42cXhXaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjg4NzM4OTU1OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA1N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzOTExODE3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSUxLXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJTEsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJsVTRmanZCdTJpVm9kV1pnZFc0WlJuSDQ5b2ZsZDVnaWNmWis1N3NKSTdBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM4NTA2MzY4NSxcImN1cnJlbnRJbmRleFwiOjgsXCJkZXZpY2VJbmRleGVzXCI6WzAsN119LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
