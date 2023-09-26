import * as fs from "fs";

export function addValue(key: string | number | undefined | boolean, value: string | number | undefined | boolean) {
    let json = JSON.parse(fs.readFileSync("src/keyvalue.json").toString())
    json[key as string] = value
    fs.writeFileSync("src/keyvalue.json", JSON.stringify(json))
}

export function getValue(key: string | number | undefined | boolean) : string {
    const json = JSON.parse(fs.readFileSync("src/keyvalue.json").toString())
    const result = json[key as string]

    return result
}