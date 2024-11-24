'use server'
import sgMail from "@sendgrid/client";

export async function addToContact(formData: FormData) {
    const sendgridApiKey = process.env.SENDGRID_API_KEY;
    sgMail.setApiKey(sendgridApiKey as string);

  let response;
  
  const email = formData.get("email");

  const data = {
    contacts: [
      {
        email: JSON.parse(email! as string),
      },
    ],
    list_ids: [process.env.SENDGRID_CONTACT_ID],
  };

  const request = {
    url: `/v3/marketing/contacts`,
    method: "PUT",
    body: data,
    headers: { Authorization: `Bearer ${sendgridApiKey}` },
  };

  await sgMail
    //@ts-expect-error:lenistwo
    .request(request)
    .catch((error) => {
      console.error(error?.response.body);
      response = {
        status: "error",
        message: "Ups, wystąpił jakiś błąd.",
      };
    })
    .finally(() => {
      response = {
        status: "success",
        message: "Sukces!",
      };
    });

  return { response };
}
