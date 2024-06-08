export default ({env}) => ({
    email: {
        config: {
            provider: 'nodemailer',
            providerOptions: {
                host: 'smtp.eu.sparkpostmail.com',
                port: 587,
                auth: {
                    user: 'SMTP_Injection',
                    pass: env('SPARKPOST_API_KEY'),
                },
            },
            settings: {
                defaultFrom: 'no-reply@letters.transutrechtbeyond.nl',
            },
        }
    }
});
