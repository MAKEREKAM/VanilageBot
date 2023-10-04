import {ApplicationCommandOptionType, EmbedBuilder} from "discord.js";
import {SlashCommand} from "../types/slashCommand";
import {dailyRequest, getPoint} from "../pointio";

export const dailyRequestCommand : SlashCommand = {
    name: "일일보상",
    description: "일일 보상을 청구합니다.",
    options:[
    ],
    execute: async (_, interaction) => {
        const result = dailyRequest(interaction.user.id.toString())

        const embed = new EmbedBuilder()
            .setColor(0x000000)
            .setTitle("Result")
            .addFields(
                {name: "Request", value: "Daily Request"},
                {name: "Result", value: (result == 0) ? "성공" : "실패"}
            )
        await interaction.followUp({
            ephemeral: true,
            embeds: [embed]
        });
    }
};

export const getPointCommand : SlashCommand = {
    name: "포인트",
    description: "자신의 포인트를 확인합니다.",
    options:[
    ],
    execute: async (_, interaction) => {
        const result= getPoint(interaction.user.id.toString())

        const embed = new EmbedBuilder()
            .setColor(0x000000)
            .setTitle("Result")
            .addFields(
                {name: "Request", value: `Check Point`},
                {name: "Result", value: result.toString()} // 왠지는 모르겠는데 이거 toString() 넣어야지 작동함
            )
        await interaction.followUp({
            ephemeral: true,
            embeds: [embed]
        });
    }
};