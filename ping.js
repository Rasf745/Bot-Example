   if(cmd == "ping"){
        let embed1 = new RichEmbed()
        .setTimestamp()
        .setTitle(`Ping?`)
        .setColor('#ee3434')
        .setFooter(`Ping`, bot.user.displayAvatarURL);
        let msg = await message.channel.send(embed1);

        let embed2 = new RichEmbed()
        .setTimestamp()
        .setTitle(`Pong!`)
        .setColor('#ee3434')
        .setDescription(`A Latência é ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms.\nA Latência da API é ${Math.round(bot.ping)}ms.`)
        .setFooter(`Ping`, bot.user.displayAvatarURL);
        msg.edit(embed2);
    }
