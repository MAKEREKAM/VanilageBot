import {ApplicationCommandOptionType, EmbedBuilder} from "discord.js";
import {SlashCommand} from "../types/slashCommand";

export const factorial: SlashCommand = {
    name: "팩토리얼",
    description: "팩토리얼 출력",
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
        const result : number = getFactorial(arg as number)

        const embed = new EmbedBuilder()
            .setColor(0x000000)
            .setTitle("Result")
            .addFields(
                {name: "Request", value: `${arg}!`},
                {name: "Result", value: `${result}`}
            )
        await interaction.followUp({
            ephemeral: true,
            embeds: [embed]
        });
    }
};

function getFactorial(x: number): number {
    if (x < 0) return -1
    if (x == 0) return 1
    if (x > 170) return -1

    return x * getFactorial(x - 1)
}
