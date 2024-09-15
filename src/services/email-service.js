const { transporter } = require("../config/email-config");
const TicketRepository = require("../repository/ticket-repository");
const ticketRepo = new TicketRepository();

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

const fetchPendingEmails = async () => {
    try {
        const response = await ticketRepo.getAll();
        return response;
    } catch (error) {
        console.log("Something went worng in the service layer.");
        throw { error };
    }
};

const createNotification = async (data) => {
    try {
        const response = await ticketRepo.create(data);
        return response;
    } catch (error) {
        console.log("Something went worng in the service layer.");
        throw { error };
    }
};

module.exports = {
    sendBasicMail,
    fetchPendingEmails,
    createNotification,
};
