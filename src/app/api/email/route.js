import { NextResponse } from "next/server";
import { Resend } from "resend";
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_EMAIL);

export async function POST(request) {
  const { email, name, message } = await request.json();

  if (!email || !name || !message) {
    return NextResponse.json(
      {
        message: "Please fill all fields",
      },
      {
        status: 400,
      }
    );
  }

  try {
    const res = await resend.emails.send({
      from: "Aman Verma <onboarding@resend.dev>",
      to: ["amanv7404@gmail.com"],
      subject: "Contact Us Query",
      html: `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        <div style="text-align: center; padding: 10px 0; background-color: #4745d2; color: #fff; border-radius: 10px 10px 0 0;">
          <h1 style="margin: 0; font-size: 24px;">Contact Us Query</h1>
        </div>
        <div style="padding: 20px;">
          <p style="font-size: 18px; margin-bottom: 10px;">Hello Aman,</p>
          <p style="margin: 10px 0;">You have received a new contact query. Below are the details:</p>
          <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Message</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${message}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; text-align: center;">
            <a href="mailto:${email}" style="display: inline-block; padding: 10px 20px; background-color: #4745d2; color: #fff; text-decoration: none; border-radius: 5px;">Reply to ${name}</a>
          </p>
        </div>
        <div style="text-align: center; font-size: 12px; color: #999; padding-top: 20px; border-top: 1px solid #ddd;">
          <p>Thank you for contacting us!</p>
          <p>&copy; ${new Date().getFullYear()} Aman Verma. All Rights Reserved.</p>
        </div>
      </div>
    `,
    });

    // one more send mail to user
    const sendToSubmitter = await resend.emails.send({
      from: "Aman Verma <onboarding@resend.dev>",
      to: [email], // Use the user's email
      subject: "We Received Your Query",
      html: `
          <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <div style="text-align: center; padding: 10px 0; background-color: #4745d2; color: #fff; border-radius: 10px 10px 0 0;">
              <h1 style="margin: 0; font-size: 24px;">Thank You for Contacting Us</h1>
            </div>
            <div style="padding: 20px;">
              <p style="font-size: 18px; margin-bottom: 10px;">Hello ${name},</p>
              <p style="margin: 10px 0;">Thank you for reaching out to us. We have received your query and will get back to you as soon as possible. Below are the details of your submission:</p>
              <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name</td>
                  <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td>
                  <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Message</td>
                  <td style="padding: 8px; border: 1px solid #ddd;">${message}</td>
                </tr>
              </table>
              <p style="margin-top: 20px;">We will get back to you at <strong>${email}</strong>. If you have any urgent concerns, feel free to reply to this email.</p>
              <p style="margin-top: 20px;">Thank you again for contacting us!</p>
            </div>
            <div style="text-align: center; font-size: 12px; color: #999; padding-top: 20px; border-top: 1px solid #ddd;">
              <p>We value your time and appreciate your interest.</p>
              <p>&copy; ${new Date().getFullYear()} Aman Verma. All Rights Reserved.</p>
            </div>
          </div>
        `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Query sent successfully!",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log("Error in sending mail", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong! Please try again later.",
      },
      {
        status: 500,
      }
    );
  }
}
