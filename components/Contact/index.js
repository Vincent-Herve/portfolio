import React, { useState } from 'react';
import { sendContactMail } from '../../selectors/networking/mail-api';
import { Alert, Form } from 'react-bootstrap';

const Contact = () => {
    const [valueForm, setValueForm] = useState({ email: '', message: '' });
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false);
    const [fail, setFail] = useState(false);

    const onEmailChange = (evt) => {
        setValueForm({ ...valueForm, email: evt.target.value });
    };

    const onMessageChange = (evt) => {
        setValueForm({ ...valueForm, message: evt.target.value });
    };

    const handleSubmitForm = async (evt) => {
        evt.preventDefault();
        const recipientMail = 'vincent.herve2012@laposte.net';

        if (valueForm.email !== '' && valueForm.message !== '') {
            const res = await sendContactMail(recipientMail, valueForm.email, valueForm.message);

            if (res.status < 300) {
                setOpen(true);
                setError(false);
            }
            else {
                setFail(true);
            }
        }
        else {
            setError(true);
        }
    };

    return (
        <div className="contact">
            <h1>Contact</h1>
            <div>
                <Form onSubmit={handleSubmitForm}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Votre Email</Form.Label>
                        <Form.Control onChange={onEmailChange} size="lg" type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Votre message</Form.Label>
                        <Form.Control onChange={onMessageChange} size="lg" as="textarea" rows="3" />
                    </Form.Group>
                    {error && <div className="form-helpertext">Veuillez remplir tout les champs</div>} 
                    <button className="form-btn" type="submit">Envoyer</button>
                </Form>
                {open && <Alert variant="success">Message envoyé avec succès.</Alert>}
                {fail && <Alert variant="danger">Une erreur est survenue.</Alert>}
            </div>
        </div>
    );
};

export default Contact;