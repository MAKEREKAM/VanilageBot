import {ApplicationCommandOptionType, EmbedBuilder} from "discord.js";
import {SlashCommand} from "../types/slashCommand";
import {addValue, getValue} from "../keyvalueio";

export const writekey: SlashCommand = {
    name: "writekey",
    description: "Write text in database.",
    options:[
        {
            required:true,
            name:"key",
            description:"String value.",
            type:ApplicationCommandOptionType.String
        },
        {
            required:true,
            name:"value",
            description:"String value.",
            type:ApplicationCommandOptionType.String
        }
    ],
    execute: async (_, interaction) => {
        const key = (interaction.options.get("key")?.value);
        const value = (interaction.options.get("value")?.value);

        addValue(key, value)

        const embed = new EmbedBuilder()
            .setColor(0x000000)
            .setTitle("Result")
            .addFields(
                {name: "Request", value: `Save Key : ${key}, Value : ${value}`},
                {name: "Result", value: "Success!"}
            )
        await interaction.followUp({
            ephemeral: false,
            embeds: [embed]
        });
    }
};

export const readkey: SlashCommand = {
    name: "readkey",
    description: "Get text in database.",
    options:[
        {
            required:true,
            name:"key",
            description:"String value.",
            type:ApplicationCommandOptionType.String
        }
    ],
    execute: async (_, interaction) => {
        const key = (interaction.options.get("key")?.value);

        const result = getValue(key)

        const embed = new EmbedBuilder()
            .setColor(0x000000)
            .setTitle("Result")
            .addFields(
                {name: "Request", value: `Load Key : ${key}`},
                {name: "Result", value: `${result}`}
            )
        await interaction.followUp({
            ephemeral: false,
            embeds: [embed]
        });
    }
};