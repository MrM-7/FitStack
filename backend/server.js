import express from 'express';
import dotenv from 'dotenv';
import workoutRoutes from './routes/workouts.js'


// express app
const app = express();

//Dot ENV config
dotenv.config();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.use('/api/workouts', workoutRoutes);


// listen for requests
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Node server is running on port no ${PORT}`);
});