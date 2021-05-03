const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reservations = require("./data/reservations");
const reviews = require("./data/reviews");
const mealsWithReview = meals.map(meal => {
  meal.reviews = reviews.filter(review => meal.id === review.mealId)
  return meal;
});
const cheapMealsWithReview = mealsWithReview.filter(meal => meal.price < 100);
const largeMealsWithReview = mealsWithReview.filter(meal => meal.maxNumberOfGuests > 10);
const randomNumber = Math.floor(Math.random() * mealsWithReview.length);

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});
app.get("/meals", async (request, response) => {
  response.send(mealsWithReview);
});
app.get("/cheap-meals", async (request, response) => {
  response.send(cheapMealsWithReview);
});
app.get("/large-meals", async (request, response) => {
  response.send(largeMealsWithReview);
});
app.get("/meal", async (request, response) => {
  response.send(mealsWithReview[randomNumber]);
});
app.get("/reservations", async (request, response) => {
  response.send(reservations);
});
app.get("/reservation", async (request, response) => {
  response.send(reservations[randomNumber]);
});
module.exports = app;
