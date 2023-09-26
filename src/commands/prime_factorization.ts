import {SlashCommand} from "../types/slashCommand";
import {ApplicationCommandOptionType, EmbedBuilder} from "discord.js";

export const prime_factorization: SlashCommand = {
    name: "prime_factorization",
    description: "Print Prime Factorization Result.",
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
        const result : number[] = getFactorizationResult(arg as number)

        const embed = new EmbedBuilder()
            .setColor(0x000000)
            .setTitle("Result")
            .addFields(
                {name: "Request", value: `${arg} Prime Factorization`},
                {name: "Result", value: `${result}`}
            )
        await interaction.followUp({
            ephemeral: true,
            embeds: [embed]
        });
    }
};

function getFactorizationResult(x : number) : number[] {
    if (x <= 0) return [-1]
    if (x > 1000) return [-1]

    let result : number[] = []
    let copyX= x

    for (let i= x; i > 1; i--) {
        if (isPrime(i)) {
            while (copyX % i == 0) {
                copyX /= i
                result.push(i)
            }
        }
    }

    result.reverse()

    return result
}

function isPrime(x : number): boolean {
    for (let i = 2, s = Math.sqrt(x);  i <= s; i++) {
        if (x % i === 0) {
            return false;
        }
    }
    return x !== 1 && x !== 0;
}