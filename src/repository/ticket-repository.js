const { NotificationTicket } = require("../models/index");

class TicketRepository {
    async create(data) {
        try {
            const response = await NotificationTicket.create(data);
            return response;
        } catch (error) {
            console.log("Something went worng in the repository layer.");
            throw { error };
        }
    }

    async getAll() {
        try {
            const response = await NotificationTicket.findAll();
            return response;
        } catch (error) {
            console.log("Something went worng in the repository layer.");
            throw { error };
        }
    }
}

module.exports = TicketRepository;
