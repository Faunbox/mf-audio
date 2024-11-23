"use server";
import sgMail from "@sendgrid/mail";

interface mail {
  to: string|string[];
  from: string;
  subject: string;
  text: string;
  html: string;
}

type ResponseData = {
  status?: string;
  message?: string;
};

export async function sendContactEmail(formData: FormData) {
  sgMail.setApiKey(process.env.SENDGRID_EMAIL1_API_KEY || "");
  const name = formData.get("name");
  const email = formData.get("email");
  const description = formData.get("description");

  let response: ResponseData = {};

  const msgToCompany: mail = {
    to: "produkcja.mfaudio@gmail.com", // Change to your recipient
    from: process.env.SENDGRID_EMAIL!, // Change to your verified sender
    subject: `Wiadomośc z formularza kontaktowego od ${name}`,
    text: "data?.message",
    html: `<div>
    <h1>Wiadomość od: ${name}</h1>
    <h2>Adres email: ${email}</h2>
    <h2>Wiadomość:${description} </h2>
    </div>`,
  };

 
  await sgMail
    .send(msgToCompany)
    .then(() => {
      response = {
        status: "success",
        message: "Message send",
      };
    })
    .catch((error) => {
      response = {
        status: "error",
        message: `Wstąpił błąd podczas wysyłania maila do firmy. Spróbuj ponownie później, ${error}`,
      };
    })
  return { response };
}
