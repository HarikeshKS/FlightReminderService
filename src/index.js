const express = require("express");
const { PORT } = require("./config/server-config");
const bodyParser = require("body-parser");
const { sendBasicMail } = require("./services/email-service");
const app = express();

function setupAndStartServer() {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(PORT, () => {
        console.log(`Server started at port: ${PORT}`);
        // sendBasicMail(
        //     "PookieBro<support@admin.com>",
        //     "dummytestbrother@gmail.com",
        //     "Test mail brother",
        //     "Hi, this is HKS, I hope you find this mail well lit!"
        // );
    });
}

setupAndStartServer();
