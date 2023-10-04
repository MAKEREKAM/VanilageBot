import * as fs from "fs";

export function addPoint(userid : string , value : number) {
    if (!isExistAccount(userid)) {
        setupPoint(userid)
    }

    let json = JSON.parse(fs.readFileSync("src/point.json").toString())
    json[userid] = (json[userid] as number) + value
    fs.writeFileSync("src/point.json", JSON.stringify(json))
}

export function getPoint(userid : string) : string {
    const json = JSON.parse(fs.readFileSync("src/point.json").toString())
    return (json.hasOwnProperty(userid)) ? json[userid] : 0
}

function setupPoint(userid : string) {
    let json = JSON.parse(fs.readFileSync("src/point.json").toString())
    json[userid] = 0
    fs.writeFileSync("src/point.json", JSON.stringify(json))
}

export function isExistAccount(userid : string) : boolean {
    const json = JSON.parse(fs.readFileSync("src/point.json").toString())
    return json.hasOwnProperty(userid)
}

export function isRequested(userid : string) : boolean {
    const json = JSON.parse(fs.readFileSync("src/dailyrequest.json").toString())
    if (!json.hasOwnProperty(userid)) return false

    const date = new Date()

    return json[userid] == date.getFullYear().toString() + date.getMonth().toString() + date.getDate().toString();
}

export function dailyRequest(userid : string) : number {
    if (isRequested(userid)) {
        return -1
    }

    let json = JSON.parse(fs.readFileSync("src/dailyrequest.json").toString())

    if (!json.hasOwnProperty(userid)) {
        setupDailyRequest(userid)
    }

    else {
        const date = new Date()

        json[userid] = date.getFullYear().toString() + date.getMonth().toString() + date.getDate().toString();
        fs.writeFileSync("src/dailyrequest.json", JSON.stringify(json))

        addPoint(userid, 1000 + Math.floor(Math.random() * 100))
    }

    return 0
}

function setupDailyRequest(userid : string) {
    let json = JSON.parse(fs.readFileSync("src/dailyrequest.json").toString())

    const date = new Date()

    json[userid] = date.getFullYear().toString() + date.getMonth().toString() + date.getDate().toString();
    fs.writeFileSync("src/dailyrequest.json", JSON.stringify(json))

    addPoint(userid, 1000)
}