import { resend } from "../../config/resendEmail";

export async function sendEmailForQuery(data) {
  try {
    const res = await resend.emails.send({
      from: "<onboarding@resend.dev>",
      to: [data.email],
      subject: "Query Received",
      html: `<div> ${data.name}</div>
      <div>${data.message}</div>
      `,
    });

    console.log("Aman", res);
    return {
      success: true,
      message: "Query sent successfully!",
    };
  } catch (error) {
    console.log("Error in sending mail", error);
    return {
      success: false,
      message: "Something went wrong! Please try again later.",
    };
  }
}
