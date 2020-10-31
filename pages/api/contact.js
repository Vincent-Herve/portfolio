import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    }
});

const mailer = ({ senderMail, content, recipientMail }) => {
    const mail = {
        from: 'Contact form Portfolio',
        to: `${recipientMail}`,
        subject: `New mail from ${senderMail}`,
        text: content,
    };
    
    return new Promise((resolve, reject) => {
        transporter.sendMail(mail, (error, info) =>
            error ? reject(error) : resolve(info)
        )
    });
};

export default async (req, res) => {
    const { senderMail, message, recipientMail } = req.body;

    if (senderMail === "" || recipientMail === "") {
        res.status(403).send("");
        return;
    }

    const content = `email: ${senderMail} \n message: ${message} `;
    const mailerRes = await mailer({ senderMail, content, recipientMail });
    res.send(mailerRes);
}