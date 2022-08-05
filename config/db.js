const mysql = require('serverless-mysql')();
mysql.config({
  host: process.env.REACT_APP_HOST,
  database: process.env.REACT_APP_DATABASE,
  user: process.env.REACT_APP_USER,
  password: process.env.REACT_APP_PWD,
});

// eslint-disable-next-line arrow-body-style
const executeQuery = (query, arraParms) => {
  return new Promise((resolve, reject) => {
    try {
      mysql.query(query, arraParms, (err, data) => {
        if (err) {
          console.log('error in executing the query');
          reject(err);
        }
        resolve(data);
      });
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = { executeQuery };
