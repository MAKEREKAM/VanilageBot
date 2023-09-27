import {SlashCommand} from "../types/slashCommand";
import {ApplicationCommandOptionType, EmbedBuilder} from "discord.js";

export const dex_to_hex: SlashCommand = {
    name: "dec_to_hex",
    description: "Print Dec->Hex",
    options:[
        {
            required:true,
            name:"x",
            description:"Integer value.",
            type:ApplicationCommandOptionType.Integer
        }
    ],
    execute: async (_, interaction) => {
        const arg = (interaction.options.get("x")?.value);

        const embed = new EmbedBuilder()
            .setColor(0x000000)
            .setTitle("Result")
            .addFields(
                {name: "Request", value: `${arg} -> Hex`},
                {name: "Result", value: `${(arg as number).toString(16)}`}
            )
        await interaction.followUp({
            ephemeral: true,
            embeds: [embed]
        });
    }
};

export const dex_to_bin: SlashCommand = {
    name: "dec_to_bin",
    description: "Print Dec->Bin",
    options:[
        {
            required:true,
            name:"x",
            description:"Integer value.",
            type:ApplicationCommandOptionType.Integer
        }
    ],
    execute: async (_, interaction) => {
        const arg = (interaction.options.get("x")?.value);

        const embed = new EmbedBuilder()
            .setColor(0x000000)
            .setTitle("Result")
            .addFields(
                {name: "Request", value: `${arg} -> Bin`},
                {name: "Result", value: `${(arg as number).toString(2)}`}
            )
        await interaction.followUp({
            ephemeral: true,
            embeds: [embed]
        });
    }
};

export const hex_to_dec: SlashCommand = {
    name: "hex_to_dec",
    description: "Print Hex->Dec",
    options:[
        {
            required:true,
            name:"x",
            description:"String value.",
            type:ApplicationCommandOptionType.String
        }
    ],
    execute: async (_, interaction) => {
        const arg = (interaction.options.get("x")?.value);

        const embed = new EmbedBuilder()
            .setColor(0x000000)
            .setTitle("Result")
            .addFields(
                {name: "Request", value: `${arg} -> Dec`},
                {name: "Result", value: `${parseInt(arg as string, 16)}`}
            )
        await interaction.followUp({
            ephemeral: true,
            embeds: [embed]
        });
    }
};

export const hex_to_bin: SlashCommand = {
    name: "hex_to_bin",
    description: "Print Hex->Bin",
    options:[
        {
            required:true,
            name:"x",
            description:"String value.",
            type:ApplicationCommandOptionType.String
        }
    ],
    execute: async (_, interaction) => {
        const arg = (interaction.options.get("x")?.value);

        const embed = new EmbedBuilder()
            .setColor(0x000000)
            .setTitle("Result")
            .addFields(
                {name: "Request", value: `${arg} -> Bin`},
                {name: "Result", value: `${parseInt(arg as string, 16).toString(2)}`}
            )
        await interaction.followUp({
            ephemeral: true,
            embeds: [embed]
        });
    }
};

export const bin_to_dec: SlashCommand = {
    name: "bin_to_dec",
    description: "Print Bin->Dec",
    options:[
        {
            required:true,
            name:"x",
            description:"String value.",
            type:ApplicationCommandOptionType.String
        }
    ],
    execute: async (_, interaction) => {
        const arg = (interaction.options.get("x")?.value);

        const embed = new EmbedBuilder()
            .setColor(0x000000)
            .setTitle("Result")
            .addFields(
                {name: "Request", value: `${arg} -> Dec`},
                {name: "Result", value: `${parseInt(arg as string, 2)}`}
            )
        await interaction.followUp({
            ephemeral: true,
            embeds: [embed]
        });
    }
};

export const bin_to_hex: SlashCommand = {
    name: "bin_to_hex",
    description: "Print Bin->Hex",
    options:[
        {
            required:true,
            name:"x",
            description:"String value.",
            type:ApplicationCommandOptionType.String
        }
    ],
    execute: async (_, interaction) => {
        const arg = (interaction.options.get("x")?.value);

        const embed = new EmbedBuilder()
            .setColor(0x000000)
            .setTitle("Result")
            .addFields(
                {name: "Request", value: `${arg} -> Hex`},
                {name: "Result", value: `${parseInt(arg as string, 2).toString(16)}`}
            )
        await interaction.followUp({
            ephemeral: true,
            embeds: [embed]
        });
    }
};