"use server";
import sgMail, { MailDataRequired } from "@sendgrid/mail";

interface mail {
  to: string | string[];
  from: string;
  subject: string;
  text: string;
  html: string;
}

type ResponseData = {
  status?: string;
  message?: string;
};

export type TemplateIdEmail = {
  personalizations: {
    to: string | string[];
    dynamic_template_data: unknown;
  };
  from: {
    email: string | string[];
    name: string;
  };
  reply_to: { email: string | string[]; name: string };
  template_id: string;
};

type Template = MailDataRequired | MailDataRequired[] | TemplateIdEmail;

export async function sendContactEmail(formData: FormData) {
  sgMail.setApiKey(process.env.SENDGRID_EMAIL1_API_KEY || "");
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
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

  const customerEmail = email?.replace(/"/g, "");
  const customerName = name?.replace(/"/g, "");
  console.log(customerEmail);

  const emailToCustomer: Template = {
    //@ts-expect-error:Jebac to maczetami
    personalizations: [
      {
        to: customerEmail,
        dynamic_template_data: {
          name: customerName,
        },
      },
    ],
    from: {
      email: process.env.SENDGRID_EMAIL!,
      name: "MF Audio",
    },
    reply_to: {
      email: process.env.SENDGRID_EMAIL!,
      name: "MF Audio",
    },
    template_id: "d-6631ef651ed14dd2a924d1d296896f96",
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
    });

  await sgMail
    //@ts-expect-error:nie chce mi sie szukac typu - jest dobrze
    .send(emailToCustomer)
    .then(() => console.log("wysłano maila do klienta"));
  return { response };
}
