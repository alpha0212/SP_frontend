const http = require('http');
const path = require('path');

const express = require('express');

const { executeQuery } = require('./config/db');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.Port || 8000;

app.get('/register', (req, res) => {
  const sqlQuery = `INSERT INTO sptsign (user_name, user_email, user_id, user_pw, user_ch_pw) VALUES(?,?,?,?,?)`;
  executeQuery(sqlQuery, (err, result) => {
    res.send('success');
    console.log(err);
  });
});

app.get('/input', (req, res) => {
  const sqlQuery = `INSERT INTO sptsign(user_name, user_email, user_id, user_pw, user_ch_pw) VALUES('박준희', 'qkrcjfgml321@naver.com', 'qkrwnsgml', 'wnsgml6628', 'wnsgml6628')`;
  executeQuery(sqlQuery, (err, result) => {
    res.send('SignIn Success');
    console.log(err);
  });
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    Pragma: 'no-cache',
    Date: Date.now(),
  });
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

http.createServer(app).listen(port, () => {
  console.log(`app listening at ${port}`);
});
