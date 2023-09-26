import {Client, IntentsBitField, Interaction, Message, userMention} from "discord.js";
import {token} from "./Data";
import commands from "./commands";

const botToken : string = token

const client = new Client({
    intents: [
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages
    ]
});

const startBot = async () => {
    await client.login(botToken);
    console.info("login")

    client.on("ready", async () => {
        if (client.application) {
            await client.application.commands.set(commands);
            console.log("command registered")
        }
    })

    client.on("interactionCreate", async (interaction: Interaction) => {
        if (interaction.isCommand()) {
            const currentCommand = commands.find(({name}) => name === interaction.commandName);

            if(currentCommand){
                await interaction.deferReply();
                currentCommand.execute(client, interaction);
                console.log(`${currentCommand.name} executed`)
            }
        }
    })

    client.on("messageCreate", async (message : Message)=> {
        if (message.author.bot) return

        if (message.content == "<@1155830209837273128>") message.reply({content: "Hello!", allowedMentions: {repliedUser: false}})
    })
}

startBot()