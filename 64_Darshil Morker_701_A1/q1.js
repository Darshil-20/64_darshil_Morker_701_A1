const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("static"));

app.get("/gethello", (req,res) => {
    res.send("Hello! Ajax Message is here");
});

// app.listen("1111", ()=> {
//     console.log("server running at 1111");
// });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});