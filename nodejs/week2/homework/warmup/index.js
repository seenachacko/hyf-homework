const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));
app.get("/numbers/add", (req, res) => {
    const firstNum = parseInt(req.query.first);
    const secondNum = parseInt(req.query.second);
    res.send(`sum:${firstNum + secondNum}`)
});
app.get("/numbers/multiply/:first/:second", (req, res) => {
    const firstNum = parseInt(req.params.first);
    const secondNum = parseInt(req.params.second);
    res.send(`multiply: ${firstNum * secondNum}`)
});


app.listen(3000, () => console.log(`Calculator:listening on port 3000`));