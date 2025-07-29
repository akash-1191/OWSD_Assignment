
const express = require("express");
const app = express();
const path= require("path");

app.use(express.static(path.join(__dirname, './Program1')));


app.get("/", (req, res) => {
    res.send(`
        <h2>Program1 Click on the button</h2>
        <form action="/gethello" method="get">
            <button type="submit">GetHello</button>
        </form>
    `);
});

app.get("/gethello",(req, res)=>{
  res.send("<h2>Hello NodeJs!!</h2>");

})

app.listen(8000, () => {
  console.log("listing http://localhost:8000/")
})
