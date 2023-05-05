import express from 'express';
import dotenv from 'dotenv';
import workoutRoutes from './routes/workouts.js'
import mongoose from 'mongoose';


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

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        const PORT = process.env.PORT;

        app.listen(PORT, () => {
            console.log(`Node server is running on port no ${PORT}`);
        });
    })
    .catch(err => console.log(err));