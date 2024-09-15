# ReminderService

Part of a personal airline management system project, **ReminderService** is responsible for sending email reminders to users about their upcoming flights via Gmail. This service uses **Node-Cron** to schedule and manage automated reminders and **Nodemailer** to send the emails via Gmail.

### Key Features:
- Sends automated email reminders for flight bookings using **Nodemailer**.
- Uses **Node-Cron** for scheduling reminders at the appropriate time.
- Integrates with **BookingService** to retrieve relevant booking details.
- Works with **AuthService** to authenticate users before sending reminders.
- Implemented using **MVC architecture** for a clear, maintainable, and scalable backend.

### Technologies Used:
- **Node.js** for server-side scripting.
- **MySQL** for data management.
- **Node-Cron** for scheduling reminder tasks.
- **Nodemailer** for sending reminder emails via Gmail.

### Installation:
To set up this service locally, clone the repository and run the following commands:

```bash
npm install

npm start

- Don't forget to setup your .env file.
```
## TODO
- Update the notification ticket model as per the changes in the migrations.