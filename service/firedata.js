// 輸入 database 網址


var admin = require("firebase-admin");

var serviceAccount = require("./project-7f7b7-firebase-adminsdk-6c4nu-3fb314896b.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://project-7f7b7.firebaseio.com"
});

module.exports = admin.database();