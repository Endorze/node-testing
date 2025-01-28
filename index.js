import getPosts, { getPostLength } from "./postController.js";

// const express = require("express");

// const { generateRandomNumber, addTwoNumbers } = require("./util
// const fs = require("fs");

// const app = express();

// const { readFile } = fs.promises;

// app.get("/", async (request, response) => {
//     try {
//         const html = await readFile("home.html", "utf-8");
//         response.status(200).send(html);
//     } catch (err) {
//         response.status(500).send("Sorry, something went wrong.");
//     }
// });

// app.listen(process.env.PORT || 3000, () => console.log("App available on http://localhost:3000"));

console.log(getPosts());

console.log("postlength", getPostLength());

