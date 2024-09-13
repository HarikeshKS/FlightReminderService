const { transporter } = require("../config/email-config");

const sendBasicMail = (mailFrom, mailTo, mailSubject, mailBody) => {
    try {
        transporter.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody,
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports = {
    sendBasicMail,
};
