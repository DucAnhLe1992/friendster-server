const admin = require('firebase-admin');
admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    storageBucket: "gs://socialapp-94090.appspot.com/",
    databaseURL: "https://socialapp-94090.firebaseio.com"
});
const db = admin.firestore();

module.exports = { admin, db };