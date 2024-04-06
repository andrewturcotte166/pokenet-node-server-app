import express from 'express';
import session from "express-session";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import UserRoutes from "./Users/routes.js";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/pokenet'
mongoose.connect(CONNECTION_STRING);
const app = express()
app.use(
    cors({
        credentials: true,
        origin: process.env.FRONTEND_URL,
    })
);
const sessionOptions = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}
app.use(session(sessionOptions));
app.use(express.json());
UserRoutes(app);
app.listen(process.env.PORT || 4000)