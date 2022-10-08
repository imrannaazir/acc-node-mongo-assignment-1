// dependencies
const fs = require('fs')

module.exports.writeUser = (data) => {
    fs.writeFileSync("users.json", JSON.stringify(data))
}

module.exports.getUsers = () => {
    const data = fs.readFileSync("users.json")
    return JSON.parse(data)
}