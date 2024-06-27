import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/userRoute.js";

const app = express();
mongoose.connect('mongodb://172.17.0.2:27017/mern_db',{
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to db');
});

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(5000,()=> console.log('server running'))