import express from "express";
import "dotenv/config.js";
import cors from "cors";
import connectDB from "./config/db.js";
import adminRouter from "./routes/adminRoutes.js";

const app = express();

await connectDB();

//Middleware
app.use(cors());
app.use(express.json()); //all the request pass using the json

//Routes
app.get("/", (req, res) => res.send("api is working")); //home route

app.use("/api/admin", adminRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});

export default app;
