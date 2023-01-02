const fs = require('fs')
const aoi = require("aoi.js")

const bot = new aoi.AoiClient({
  token: process.env["BOT_TOKEN"],
  prefix: ".",
  intents: ["MessageContent", "GuildMessages", "Guilds", "GuildMembers"]
})

bot.onMessage()

const dir = fs.readdirSync("commands")

dir.forEach(category => {
  const dir2 = fs.readdirSync(`./commands/${category}`)
  dir2.forEach(cmd => {
    const command = require(`./commands/${category}/${cmd}`)
    console.log(cmd)
    bot.command({
      ...command
    })
  })
})