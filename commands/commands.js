exports.run = (client, message, Discord) => {
    const embed = new Discord.RichEmbed()
        .setAuthor("Commands", client.user.displayAvatarURL)
        .setDescription(`Use \`~help <command name>\` or \`~help <category name>\` for more details.`)
        .setColor('727293')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter("Any message from me can be removed by reacting with a 🎴 emoji.")
        .addField("__Info:__", "`commands` `help` `support`")
        .addField("__Utility:__", "`color` `time` `translate` `weather`", true)
        .addField("__Search:__", "`img` `osu` `wiki` `urban` `youtube`", true)
        .addField("__Moderation:__", "`ban` `kick` `prune` `warn`")
        .addField("__Fun:__", "`8ball` `cat` `dog` `f` `horoscope` `meme` `rate` `rightthere` `say` `saytts` `talk`")
        .addField("__Memes:__", "`bonzi` `byemom` `disabled` `retarded` `shit` `shits` `thesearch` `triggered` `walk`")
        .addField("__Anime:__", "`anime` `catgirl` `moe` `safebooru` `smug` `zr`")
        .addField("__Action:__", "`cuddle` `grope` `hand` `hug` `kiss` `lewd` `pat` `slap` `smug`")
        .addField("__2D NSFW:__", "`ahegao` `danbooru` `futa` `hentai` `hentaiirl` `neko` `rule34` `trap`", true)
        .addField("__3D NSFW:__", "`ass` `boobs` `nsfw` `nsfwgif`", true)
    return message.channel.send({embed}).then(m=>m.react("🎴"))
}