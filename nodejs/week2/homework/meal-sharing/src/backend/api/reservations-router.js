const express = require("express");
const router = express.Router();

const reservations = require("./../data/reservations.json");

router.get("/", async (request, response) => {
  try {
    console.log(reservations);
    console.log("in /api/reservations");
  } catch (error) {
    throw error;
  }
});
router.get("/:id", async (request, response) => {
  try {
    console.log(reservations);
    console.log("in /api/reservations");
    const id = parseInt(request.params.id);
    const selected = reservations.filter(reservation => reservation.id === id);
    response.send(selected);
  } catch (error) {
    response.status(500).send({ error: "internal server error" });

  }

});


module.exports = router;
