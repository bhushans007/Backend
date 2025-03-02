import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./DB/Database.js";
import transactionRoutes from "./Routers/Transactions.js";
import userRoutes from "./Routers/userRouter.js";

const app = express();
const port = 4000;

connectDB();

app.use(cors());


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use("/api/v1", transactionRoutes);
app.use("/api/auth", userRoutes);

app.get("/", (req, res) => {
  res.send("FinManager Server is working");
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
