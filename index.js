// dependencies
const express = require('express');
const cors = require('cors');
const usersRoutes = require('./routers/userRoute');

// config
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
app.use("/user", usersRoutes)

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Hello world!',
    });
});

// create server
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
