const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workouts = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
      },
      name: {
        type: String,
        trim: true,
      },
      duration: {
        type: Number,
      },
      weight: {
        type: Number,
        default: 0
      },
      reps: {
        type: Number,
        default: 0
      },
      sets: {
        type: Number,
        default: 0
      },
      distance: {
        type: Number,
        default: 0
      },
    },
  ],
  totalDuration: {
    type: Number,
  },
});

const Workout = mongoose.model("Workout", workouts);

module.exports = Workout;