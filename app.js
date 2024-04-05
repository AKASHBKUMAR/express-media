const express = require("express");
const app = express();
const PORT = 3500

app.get("/",(request,response)=> {
  response.status(200).send({message:`Server is running`})
})

app.listen(PORT,console.log(`Server started at localhost:${PORT}`))