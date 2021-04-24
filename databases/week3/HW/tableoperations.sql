USE meal_sharing;
#meal-table
#Get all meals
SELECT * FROM meal;
#Add a new meal
INSERT INTO meal (title, description, location,`when`, max_reservations, price, created_date) 
VALUES('Butter Chicken ', 'creamy tasty curry for rice', 'Hellurup', '2021-04-24 18:00:00', 7, 200.50, '2021-04-24' );
#Get a meal with any id
SELECT id,title,description,location,`when`,max_reservations,price,created_date
FROM meal 
WHERE id = 5;
#Update a meal with any id
UPDATE meal 
SET 
	location = 'Husum',
	max_reservations = 20
WHERE id = 2;
#Delete a meal with any id
DELETE FROM meal 
WHERE id = 5;

#reservation table
#Get all reservations
SELECT * FROM  reservation;
#Add a new reservation
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (2, 3, NOW(), '6787767', 'naja', 'naja@mail.com' );
#Get a reservation with any id
SELECT id,number_of_guests,meal_id,created_date,contact_phonenumber,contact_name,contact_email
 FROM reservation 
WHERE id = 2;
#Update a reservation with any id
UPDATE reservation 
SET	number_of_guests = 5,
contact_email = 'naja13@mail.com'
WHERE id = 6;
#Delete a reservation with any id
DELETE FROM reservation 
WHERE id = 4;

#Review table operations
#Get all reviews
SELECT * FROM review;
#Add a new review
INSERT INTO review (title, description, meal_id, stars)
VALUES ('not well cooked', 'got sick,row taste',1,2);
#Get a review with any id
SELECT id,title,description,meal_id,stars,created_date
FROM review
WHERE id = 3;
#Update a review with any id
UPDATE review 
SET	description = "we were hospitalised,bad food,not well cooked",
	stars = 1
WHERE id = 6;
#Delete a review with any id
DELETE FROM review 
WHERE id = 1;
 

