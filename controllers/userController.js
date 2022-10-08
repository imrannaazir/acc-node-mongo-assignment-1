const { getUsers } = require("../utilities/accessData")

// module scaffolding
const controller = {}

controller.randomUser = (req, res) => {
    const users = getUsers()
    const randomUser = users[Math.floor(Math.random() * users.length)]
    res.status(200).json(randomUser)
}
module.exports = controller