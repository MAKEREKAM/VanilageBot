import {Client} from "discord.js";

const botToken : string = token

const client = new Client({
    intents:  []
});

const startBot = async () => {
    await client.login(botToken);
    console.info("info: login success!")
}

startBot()