const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("static/q2.html"));

// app.listen("1111" , ()=>{
//     console.log("server port : 1111");
// });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});