import express from "express";
import path from "path";

const app = express();
const __dirname = path.resolve();

app.use("/static", express.static(path.resolve(__dirname, "src/frontend", "static")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve("src/frontend", "index.html"));
});

app.listen(process.env.PORT || 3000, () => console.log("Server running ...."));
