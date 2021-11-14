const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workouts = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    extercises: [
        {
            type: {
                type: String
            },
            name: {
                type: String
            },
            duration: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            }
        }
    ]

})

const Workout = mongoose.model("Workout", workouts)

module.exports = Workout