"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendInquiry(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  try {
    const { data, error } = await resend.emails.send({
      from: "JB Labs Terminal <system@brianjamiel.dev>", 
      to: ["briantjamiel@gmail.com", "blaximusprime@gmail.com"],
      subject: `[INQUIRY] New Message from ${name}`,
      replyTo: email,
      text: `Sender: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) return { success: false, error };
    return { success: true };
  } catch (err) {
    return { success: false, error: err };
  }
}