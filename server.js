import express from "express";
import "dotenv/config.js";
import cors from "cors";

const app = express();

//Middleware
app.use(cors());
app.use(express.json()); //all the request pass using the json

//Routes
app.get("/", (req, res) => res.send("api is working")); //home route

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});

export default app;
