import express from "express"
import dotenv from "dotenv"
dotenv.config();
// const connectDB = require("./db/connect");
import connect from "./db/connect"
const app = express();
var cors = require("cors");
// const authRouter = require("./routes/auth");
import auth from "./routes/auth"
app.use(cors());
app.use(express.json());
app.use("/api", auth);
//Port and Connect to DB
const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connect(process.env.MONGO_URL);
    app.listen(port, () => {
         console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
      console.log("error =>", error);
  }
};
start();