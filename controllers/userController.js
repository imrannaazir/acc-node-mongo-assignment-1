const { getUsers, writeUser } = require("../utilities/accessData")

// module scaffolding
const controller = {}

// function for get random user api
controller.randomUser = (req, res) => {
    const users = getUsers()
    const randomUser = users[Math.floor(Math.random() * users.length)]
    res.status(200).json(randomUser)
}

// function for get all user api
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

// function for post a  new user
controller.saveNewUser = (req, res) => {
    const existingUsers = getUsers()
    const { id, name, gender, contact, address, photoURL } = req.body
    if (id && name && gender && contact && address && photoURL) {
        const isIdExit = existingUsers.findIndex((user) => Number(user.id) === Number(id))

        if (typeof (id) !== "number") {
            res.status(404).send({
                message: `Something went wrong! Id should be a number!`
            })
        }
        else if (id.toString().length !== 4) {
            res.status(404).send({
                message: `Something went wrong! Id should be four digit!`
            })
        }
        else if (isIdExit !== -1) {
            res.status(404).send({
                message: `user id is already exit!  Please use unique id.`
            })
        }
        else {
            const newUser = req.body
            existingUsers.push(newUser)
            writeUser(existingUsers)
            res.status(200).send({
                message: `successfully added new user!`
            })
        }
    }
    else {

        res.status(404).send({
            message: "some info is missing!"
        })
    }
}
module.exports = controller