const SupportRequest =
  require(
    "../models/SupportRequest"
  );

const nodemailer =
  require("nodemailer");
const transporter =
  nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 2525,
    secure: false,

    auth: {
      user: process.env.BREVO_USER,
      pass: process.env.BREVO_PASS,
    },
  });

const submitSupportRequest =
  async (
    req,
    res
  ) => {

    try {
console.log("========== SUPPORT REQUEST START ==========");
  console.log(req.body);
      const {
        name,
        email,
        subject,
        message,
      } = req.body;

      const totalTickets =
  await SupportRequest.countDocuments();

const ticketId =
  `MED-${String(
    totalTickets + 1
  ).padStart(6, "0")}`;

      const support =
        await SupportRequest.create(
          {
            ticketId,
            name,
            email,
            subject,
            message,
          }
        );

      // MAIL TO YOU

      await transporter.sendMail({
        from: `"MediRoute AI" <akashalpha55@gmail.com>`,

        to:
          "akashalpha55@gmail.com",
        replyTo: email,
        subject:
          `[${ticketId}] ${subject}`,

        html: `
          <h2>New Support Request</h2>

          <p><b>Ticket:</b> ${ticketId}</p>

          <p><b>Name:</b> ${name}</p>

          <p><b>Email:</b> ${email}</p>

          <p><b>Subject:</b> ${subject}</p>

          <p><b>Message:</b></p>

          <p>${message}</p>
        `,
      });

      // AUTO REPLY

      await transporter.sendMail({
        from: `"MediRoute AI" <akashalpha55@gmail.com>`,

        to: email,

        subject:
          "MediRoute AI Support Request Received",

        html: `
          <h2>Support Request Received</h2>

          <p>Hello ${name},</p>

          <p>
            Thank you for contacting
            MediRoute AI.
          </p>

          <p>
            Your ticket ID:
            <b>${ticketId}</b>
          </p>

          <p>
            Our team will respond
            within 24 hours.
          </p>

          <p>
            Regards,<br/>
            MediRoute AI Support
          </p>
        `,
      });

      res.status(201).json({
        message:
          "Support request submitted successfully",

        ticketId,
      });

    } catch (error) {

  console.log("========== SUPPORT ERROR ==========");
  console.log(error);
  console.log("MESSAGE:", error.message);
  console.log("STACK:", error.stack);

  res.status(500).json({
    message: error.message,
    error: String(error),
  });
}
  };

module.exports = {
  submitSupportRequest,
};