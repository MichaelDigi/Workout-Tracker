const router = require("express").Router();
const db = require("../models");
const { all } = require("./html");

// Get Workout
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((allWorkouts) => {
      allWorkouts.forEach((workout) => {
        var time = 0;
        workout.exercises.forEach((ex) => {
          time += ex.duration;
        });
        workout.totalDur = time;
      });

      res.json(allWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Add an exercise
router.put("/api/workouts:id", (req, res) => {
  db.Workout.findOneAndUpdate(
    { id: req.params.id },
    {
      $inc: { totalDur: req.body.duration },
      $push: { exercises: req.body },
    },
    { new: true }
  )
    .then((allWorkouts) => {
      res.json(allWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Post workout
router.post("/api/workouts", (req, res) => {
  db.Workout.create(body)
    .then((allWorkouts) => {
      res.json(allWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Workout range
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .then((allWorkouts) => {
      res.json(allWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;


// ========= Resources =========
// https://docs.mongodb.com/manual/reference/operator/update/inc/
// https://docs.mongodb.com/manual/reference/operator/update/push/
