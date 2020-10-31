import axios from "axios";

export const sendContactMail = async (recipientMail, senderMail, message) => {
    const data = {
        recipientMail,
        senderMail,
        message
    };

    try {
        const res = await axios({
            method: "post",
            url: "/api/contact",
            headers: {
                "Content-Type": "application/json"
            },
            data
        })
        return res;

    } catch (error) {
        return error;
    }
}