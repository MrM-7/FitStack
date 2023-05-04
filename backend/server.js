import express from 'express';
import dotenv from 'dotenv';


// express app
const app = express();

//Dot ENV config
dotenv.config();

// Middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.get('/', (req, res) => {
    res.json({mssg : 'Welcome to the app'});
});


// listen for requests
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Node server is running on port no ${PORT}`);
});