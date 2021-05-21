const { request } = require("express");
const express = require("express");
const app = express();
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

app.get("/", (req, res) => res.send("nodejs week3 homework"));

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
app.get("/calculator/multiply", (req, res) => {
    const values = Object.values(req.query).flat()
    const multiply = values.reduce((acc, val) => acc * val)

    if (isNaN(multiply)) {
        res.status(400).send("values should be integer")

    } else {
        res.send(`Result : ${multiply}`)
    }

});
app.post("/calculator/multiply", (req, res) => {
    const values = Object.values(req.body).flat()
    const multipliedResult = values.reduce((acc, val) => acc * val)
    if (isNaN(multipliedResult)) {
        res.status(400).send("values should be integer")

    } else {
        res.send(`Result :${multipliedResult}`)
    }

});
app.get("/calculator/subtraction", (req, res) => {
    const values = Object.values(req.query).flat()
    const subtraction = values.reduce((acc, val) => acc - val)
    if (isNaN(subtraction)) {
        res.status(400).send("values should be integer")

    } else {
        res.send(`Result :${subtraction}`)
    }

});
app.get("/calculator/addition", (req, res) => {
    const values = Object.values(req.query).flat()
    const addingResult = values.reduce((acc, val) => (Number(acc) + Number(val)), 0)
    if (isNaN(addingResult)) {
        res.status(400).send("values should be integer")

    } else {
        res.send(`Result :${addingResult}`)
    }

});
app.get("/calculator/division", (req, res) => {
    const values = Object.values(req.query).flat()
    const dividedResult = values.reduce((acc, val) => acc / val)
    if (isNaN(dividedResult)) {
        res.status(400).send("values should be integer")

    } else {
        res.send(`Result :${dividedResult}`)
    }

});

