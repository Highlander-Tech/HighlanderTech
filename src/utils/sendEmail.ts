import nodemailer from 'nodemailer';
import type { EmailSchema } from 'pages/contato/Formulario';

export async function sendEmail({
  nome,
  service,
  telefone,
  email,
  mensagem,
}: EmailSchema) {
  const transporter = nodemailer.createTransport({
    port: 587,
    host: 'smtp.umbler.com',
    auth: {
      user: 'comercial@highlandertech.com.br',
      pass: process.env.UMBLER_PASSWORD,
    },
    tls: {
      rejectUnauthorized: true,
      minVersion: 'TLSv1.2',
    },
  });

  await new Promise((resolve, reject) => {
    transporter.verify(function (error, success) {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        console.log('Server is ready to take our messages');
        resolve(success);
      }
    });
  });

  const mailData = {
    to: 'comercial@highlandertech.com.br',
    from: 'comercial@highlandertech.com.br',
    cc: 'giovanifranz151@gmail.com',
    subject: `Nome: ${nome} / Serviço: ${service}`,
    html: `Telefone: ${telefone} <br> E-mail: ${email} <br> Mensagem: ${mensagem}`,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });
}
