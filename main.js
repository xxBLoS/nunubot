const Discord = require('discord.js')

const fs = require('fs')

const config = JSON.parse(fs.readFileSync('config.json','utf8'))


var client = new Discord.Client ()

client.on('ready', () => {
    console.log(`Logged in as ${client.user.username}`)
})


client.on(`mesage`, (msg) => {
    var cont = msg.content,
    author   = msg.member,
    chan     = msg.guild

    if (author.id != client.user.id && cont.startsWith(config.prefix)) {

        //  ?say hello world!
        var invoke = cont.split(' ') [0].substr(config.prefix.lenght),
            args   = cont.split(' ').slice(1)

    }

})

client.login(config.token)
