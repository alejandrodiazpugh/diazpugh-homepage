import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "")

const msg = {
    to: 'redes@diazpugh.com',
    from: 'contacto@diazpugh.com',
    subject: 'Sendgrid Test',
    text: 'Test Testy',
}

sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent')
    })
    .catch((err) => {
        throw new Error(err);
    })