//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：4.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░                                           
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 4.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
    SESSION_ID: process.env.SESSION_ID || "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0VIWmM1NUFqSjM5YmZldklqUThiWnVCamc4NVUvR2tpRkZNdTBiT0EzMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU3A1eTlSYjgrdzR5aVRlSlVBU0cxNmY1WnpSKytFZVdMWUJyczREcHR5ST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIySEE5bkJXRmExcjdPbVBRd2gzYUpkT3hnSjliZ2dxZ3lMQWJqcWlEV1ZRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuWEJtUmNTMTErUnJvcEkrdFhaL1hUZThWVDJ1QmJUT1VnNDBTOWd1eHc4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndFb0pHMzlTbGV4QXE4TnJKU0UrSHFPc09ZTnFyWFhha0oxcHU5ZFpEa0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNXSUhhbzVxRG5XaFI2bERmR1hmbFdVUllTWHhCcVhHMm4yQmw3MXFxVkU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUs3N0Y5UGhpVGNQYlc3TDZUTWw4eUNEaExBSjZvUWpqTVRGU2VUMk9Ibz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZnlQNnZ6VlhoZy9VVjhCY3NERXNYT2ZGU1JjMVUwWDB0eFgyUGREbENDTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpiK25TQTRHRllGZnJMb2ZnM1pUcW5LbkR4WGNLWEJsTFE0ckYwRVhQQTBpRFh5cENzRU9SUURLd25mSUxlUG1MSm5PcTlHSk1JaGFLYlRNVXRVZkRRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQyLCJhZHZTZWNyZXRLZXkiOiJXVFljM3V4dkN4bXVDMHFXS2Q3UVVvc2c5R0FkS3o2WFZyalA5bHVjTTBrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ5ZEJDbW12ZVNpeTJKWTN1U1RmejlBIiwicGhvbmVJZCI6IjdlZTg0ZDk4LTg3YTgtNGU3YS05YTQ2LTA3OGM1YjIwNTE1NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0WmZ3TjFRRXlqS1g1bXZpRkFFNjd3L3VlYm89In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZkRFJrbXVIaHpZbVpFeUJVUDdYNk9aVHRlND0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01DcGt1QUNFUHZMdE1JR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlpCOEF1Ulp5aTVOTldwNXZvWHRrbGpselE3WEdHQ2tuRktKVlErc2pWblk9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik5RUGwzZ1QyRjh0M0kvTTJhemVSS3h4NUF5RE1kYUdOSnpXWUFrNlptblJ3ZjRXcVpVSk1IMjc2RHoxekExSVphemE4c0phOGZRQ2x2UkxVUy9kd0R3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJtY2g4QXNrOVBQVXZ3djhPSnkyOHRDaklEbmt2RDJjNHZ5OHlpWWE0dWdWY3RXenpFTXVuc2JzL0ZHcS9EMHllUXhNeWFQRythSTQ5R2ZIazNIMWZDZz09In0sIm1lIjp7ImlkIjoiOTQ3NDIzMDkyMjc6NjlAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxMTY4MzIzMDQzODYxMjI6NjlAbGlkIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzQyMzA5MjI3OjY5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldRZkFMa1djb3VUVFZxZWI2RjdaSlk1YzBPMXhoZ3BKeFNpVlVQckkxWjIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ1FBeEFBIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0OTg4NjQ2MiwibGFzdFByb3BIYXNoIjoiMUs0aEg0In0=",
    GITHUB_TOKEN: process.env.GITHUB_TOKEN || "github token without ghp_",
    GITHUB_USERNAME: process.env.GITHUB_USERNAME || "github username",
    SUDO: process.env.SUDO ? process.env.SUDO.split(",") : ["94717775628", "94758775628"],
    PORT: process.env.PORT || "8000",
    SESSION_DIR: process.env.SESSION_DIR || "session",
    FOOTER: process.env.FOOTER || "> QUEEN ANJU XPRO\n> Developed by Mr. Rashmika\n> GitHub Repository: github.com/Mrrashmika/QUEEN_ANJU_xPro\n\ud83c\udf1f Premium Version | Advanced Features | Secure & Reliable \ud83c\udf1f\n\u00a9 2025 QUEEN ANJU XPRO. All rights reserved." 
  };
  
