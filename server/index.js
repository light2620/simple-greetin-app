import express from "express"; // Importing Express framework
import cors from "cors"; // Importing CORS to handle cross-origin requests
import dotenv from "dotenv"; // Importing dotenv to manage environment variables
import { greetTheUser } from "./controller/greetingController.js"; // Importing the greeting controller

const app = express(); // Creating an instance of Express

dotenv.config(); // Loading environment variables from .env file

app.use(express.json()); // Middleware to parse incoming JSON requests
app.use(cors()); // Enabling CORS for handling cross-origin requests

const PORT = process.env.PORT; // Defining the server port from environment variables

// Default route to check if the server is running
app.get("/", (req, res) => {
    res.send("Server is running");
});

// API endpoint to handle greeting requests
app.get("/api/greet", greetTheUser);

// Starting the server on the defined port
app.listen(PORT, () => {
    console.log("Server is running on", PORT);
});
