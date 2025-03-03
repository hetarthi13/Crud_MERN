import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/userRoute.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
dotenv.config();


const Port = process.env.PORT || 5000;
const URL = process.env.MONGOURL;

mongoose.connect(URL).then(()=> {
console.log("Connected to DB");
app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
})

}).catch((err) => console.log(err)
)


app.use("/api",router)