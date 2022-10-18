import fs from "fs"
import express from "express"
import path from 'path';
const PORT = process.env.PORT || 5000
const app = express()
const file = path.join(process.cwd(), 'users.json');

// Middleware
app.use(express.json())

// utilities function
const writeUser = (data) => {
    fs.writeFileSync(file, JSON.stringify(data))
}

const getUsers = () => {
    const data = fs.readFileSync(file)
    return JSON.parse(data)
}
// function for get random user api
const randomUser = (req, res) => {
    const users = getUsers()
    const randomUser = users[Math.floor(Math.random() * users.length)]
    res.status(200).json(randomUser)
}

// function for get all user api
const allUser = (req, res) => {
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
const saveNewUser = (req, res) => {
    const existingUsers = getUsers()
    console.log(existingUsers);
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

// function for patch(update) a user
const updateAUser = (req, res) => {
    const { id, name, gender, address, contact, photoURL } = req.body
    const existingUsers = getUsers()
    const targetedUser = existingUsers.find((user) => Number(user.id) === Number(id))

    if (!id) {
        res.status(404).send({
            message: `id is missing! Please provide a id.`
        })
    }
    else {

        if (!targetedUser) {
            res.status(404).send({
                message: `user does not exist!`
            })
        }
        else {
            const newUser = {
                id: id,
                name: name || targetedUser.name,
                gender: gender || targetedUser.gender,
                address: address || targetedUser.address,
                contact: contact || targetedUser.contact,
                photoURL: photoURL || targetedUser.photoURL
            }

            const finalUsers = existingUsers.map(user => Number(user.id) !== Number(id) ? user : newUser)
            writeUser(finalUsers)
            res.status(200).send({
                message: `user data updated successfully!`
            })
        }
    }
}

// function for patch(bulk update) users
const bulkUpdate = (req, res) => {
    const data = req.body
    const existingUsers = getUsers()
    const userId = []
    const updateUser = []
    data.forEach(element => {
        userId.push(element.id)
        let targetedUser = existingUsers.find(user => Number(user.id) === Number(element.id))
        if (targetedUser) {
            targetedUser = {
                id: element.id,
                name: element.name || targetedUser.name,
                gender: element.gender || targetedUser.gender,
                contact: element.contact || targetedUser.contact,
                address: element.address || targetedUser.address,
                photoURL: element.photoURL || targetedUser.photoURL
            }
            updateUser.push(targetedUser)
        }
        else {
            res.status(404).send({
                message: `user for ${element.id} id was not founded!. Please provide valid ids`
            })
        }
    })
    const filteredUser = existingUsers.filter(user => !userId.find(id => Number(id) === Number(user.id)))
    const finalUsers = ([...filteredUser, ...updateUser]);
    writeUser(finalUsers)
    res.status(200).send({
        message: `successfully updated!`,
        result: finalUsers
    })
}

// function for delete user 
const deleteUser = (req, res) => {
    const existingUsers = getUsers()
    const id = req.body.id
    const targetedUser = existingUsers.find(user => Number(user.id) === id)
    if (targetedUser) {
        const finalUsers = existingUsers.filter(user => Number(user.id) !== Number(id))
        writeUser(finalUsers);
        res.status(200).send({
            message: `user deleted successfully!`,
            deletedUser: targetedUser
        })
    }
    else {
        res.status(404).send({
            message: `invalid id! Please provide valid id!`
        })
    }
}

app.get("/user/random", randomUser)
app.get("/user/all", allUser)
app.post("/user/save", saveNewUser)
app.patch("/user/update", updateAUser)
app.patch("/user/bulk-update", bulkUpdate)
app.delete("/user/delete", deleteUser)


// root api
app.get("/", (req, res) => {
    res.status(200).send({
        message: `Random user app is running!`
    })
})

// Listen to PORT
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
})