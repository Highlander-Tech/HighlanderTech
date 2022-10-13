import sendgridMail from '@sendgrid/mail';

export async function sendEmail(data: FormValues) {
  sendgridMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY || '');

  const { nome, service, telefone, email, mensagem } = data;
  const msg = {
    to: 'comercial@highlandertech.com.br',
    from: 'comercial@highlandertech.com.br',
    cc: 'giovanifranz151@gmail.com',
    subject: `Nome: ${nome} / Serviço: ${service}`,
    html: `Telefone: ${telefone} <br> E-mail: ${email} <br> Mensagem: ${mensagem}`,
  };

  return sendgridMail.send(msg).then(
    () => ({ error: null }),
    (error: Error) => ({
      error: error.message,
    }),
  );
}
