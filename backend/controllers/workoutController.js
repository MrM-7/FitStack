import mongoose from 'mongoose';
import Workout from '../model/workoutModel.js';

// Get all workouts
const getWorkouts = async (req, res) => {

    try {
        const workouts = await Workout.find({}).sort({createdAt : -1});
        
        res.status(200).json({workouts});
    } catch (error) {
        console.log(error);
    }
}


// Get a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params;

    // checking id is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "No such workout"});
    }
    
    const workout = await Workout.findById(id);
    if(!workout){
        return res.status(404).json({error : "No such workout"});
    }

    res.status(200).send(workout);
}


// Create new workout
const createWorkout = async (req, res) => {
    const {title, reps, load} = req.body;

    // add doc to db
    try {
        const workout = await Workout.create({title, reps, load});
        res.status(200).json(workout);
    }catch(err){
        res.status(400).json({error : err.message});
    }
}


// Delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params;

    // checking id is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "No such workout"});
    }

    const workout = await Workout.findOneAndDelete({_id : id});

    if(!workout){
        return res.status(404).json({error : "No such workout"});
    }

    res.status(200).send(workout);
}


// Update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params;

    // checking id is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "No such workout"});
    }

    const workout = await Workout.findOneAndUpdate({_id : id}, {...req.body});

    if(!workout){
        return res.status(404).json({error : "No such workout"});
    }

    res.status(404).send(workout);
}




export{
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}