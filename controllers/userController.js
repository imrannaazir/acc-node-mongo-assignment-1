const { getUsers } = require("../utilities/accessData")

// module scaffolding
const controller = {}

controller.randomUser = (req, res) => {
    const users = getUsers()
    const randomUser = users[Math.floor(Math.random() * users.length)]
    res.status(200).json(randomUser)
}

controller.allUser = (req, res) => {
    const limit = req.query.limit
    const users = getUsers()
    if (limit) {
        res.status(200).send(users.slice(0, limit))
    }
    else {
        res.status(200).send(users)
    }

}
module.exports = controller