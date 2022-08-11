const http = require("http");
const path = require("path");

const express = require("express");

const app = express();

const port = 8000;

const { executeQuery } = require("./config/db");

app.get("/register", async (req, res) => {
  const sqlQuery = `insert into sptsignin (user_name, user_email, user_id, user_pw, user_ch_pw) values(?,?,?,?,?)`;
  try {
    const { user_name, user_email, user_id, user_pw, user_ch_pw } = req.body;
    let userData = await executeQuery(sqlQuery, [
      user_name,
      user_email,
      user_id,
      user_pw,
      user_ch_pw,
    ]);
    res.status(201).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

app.use(express.static(path.join(__dirname, "build")));

app.get("/api/users", async (req, res) => {
  try {
    let userData = await executeQuery(`select * from sptsignin`);
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.get("/*", (req, res) => {
  res.set({
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Date: Date.now(),
  });
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

http.createServer(app).listen(port, () => {
  console.log(`app listening at ${port}`);
});
