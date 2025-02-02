import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";
const PORTKEY = process.env.PORT || 3000;

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

console.log(__filename);
console.log(__dirname);

const server = http.createServer(async (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const query = parsedUrl.query
    try {
        if (req.method === "GET") {
            let filePath;
            if (req.url === "/") {
                filePath = path.join(__dirname, "public", "index.html");
            } else if (parsedUrl.pathname === "/greet") {
                const name = query.name || "Stranger";
                res.setHeader("Content-Type", "text/html");
                res.end(`<h1>Hello, ${name}!</h1>`);
                return;
            } else if (parsedUrl.pathname === "/message") {

                const messagesFile = path.join(__dirname, "data.json");
                const messages = await fs.readFile(messagesFile, "utf-8");
                const messageList = JSON.parse(messages);
                const messageId = query.id || "default";
                const message = messageList[messageId] || "Message not found";

                res.setHeader("Content-Type", "text/html");
                res.end(`<h1>${message}</h1>`);
                return;
            }

            else if (req.url === "/about") {
                filePath = path.join(__dirname, "public", "about.html");
            } else if (req.url === "/contact") {
                filePath = path.join(__dirname, "public", "contact.html");
            } else if (req.url === "/blog") {
                filePath = path.join(__dirname, "public", "blog.html");
            }

            else if (req.url === "/test") {
                res.setHeader("Content-Type", "text/html");
                res.write(`
                    <h1>Welcome to the testpage</h1>
                        <div>
                            <a href="..">Homepage</a>
                            <a href="about">About us</a>
                            <a href="contact">Contact us</a>
                            <a href="blog">Blog</a>
                            <a href="test1">Second test</a>
                        </div>
                    <p>I LOVE CATS</p>
                    <img src="https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                    `);
                res.end();
                return;
            } else if (req.url === "/test1") {
                res.setHeader("Content-Type", "text/html");
                res.write(`
                    <h1>Welcome to the second testpage</h1>
                        <div>
                            <a href="..">Homepage</a>
                            <a href="about">About us</a>
                            <a href="contact">Contact us</a>
                            <a href="blog">Blog</a>
                            <a href="test">First test</a>
                        </div>
                    <p>I LOVE DOGS</p>
                    <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg">
                    `);
                res.end();
                return;
            }
            else {
                throw new error("Not found");
            }

            const data = await fs.readFile(filePath);
            res.setHeader("Content-Type", "text/html");
            res.write(data);
            res.end;
        } else {
            throw new Error("Method not allowed")
        }
    } catch (err) {
        res.writeHead(404, { "Content-Type": "text/plain" })
        res.end("Server Error");
    }
    console.log(req.url);
    console.log(req.method);
});






server.listen(PORTKEY, () => {
    console.log(`Server running on port ${PORTKEY}`)
});