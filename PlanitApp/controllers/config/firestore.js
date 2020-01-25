const admin = require('firebase-admin');
// service account creds are generated through firebase console and should not be version controlled

admin.initializeApp({
    credential: admin.credential.cert(service_account_creds),
    databaseURL: "https://planit-c2234.firebaseio.com"
});

const db = admin.firestore();

module.exports = db;


// queries below

