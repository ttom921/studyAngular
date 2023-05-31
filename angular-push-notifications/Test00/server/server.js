const express = require("express");
const webpush = require("web-push");
const cors = require("cors");
const bodyParser = require("body-parser");

const PUBLIC_VAPID = 'BKonVhFkna44GaFkmgMn58C9rCjOTjaDn9tNUwqCyW0SNf7ccI_Bq8m1YcbDFNNAEe-0pODKmpc9RGk-_SmRJ-c';

const PRIVATE_VAPID = 'cegzar4maSarYk1PE9SaZ5rX3aHpGIsBjAPbzim2jgo';

const fakeDataBase = [];

const app = express();

app.use(cors());
app.use(bodyParser.json());

webpush.setVapidDetails("mailto:you@domain.com", PUBLIC_VAPID, PRIVATE_VAPID);


app.post("/subscription", (req, res) => {
    const subscription = req.body;
    console.log("/subscription->" + subscription);
    fakeDataBase.push(subscription);
});

app.post("/sendNotification", (req, res) => {
    //內容
    const notificationPayload = {
        notification: {
            title: 'New Notification',
            body: 'This is the body of the notification',
            icon: 'assets/icons/icon-512x512.png',
        },
    }
    const promises = [];
    fakeDataBase.forEach(subscription => {
        promises.push(
            webpush.sendNotification(
                subscription,
                JSON.stringify(notificationPayload)
            )
        )
    });
    Promise.all(promises).then(() => res.sendStatus(200));
});
app.listen(3000, () => {
    console.log('Server started on port 3000')
});