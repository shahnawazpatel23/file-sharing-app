import { NextResponse } from 'next/server';
import { EmailTemplate } from '../../_components/email-template';
import { Resend } from 'resend';




const resend = new Resend(process.env.RESEND_API_KEY);



export async function POST(req: any) {
    const response = await req.json();
    console.log("ye hai response",response);
    console.log(response.emailToSend);
    
  try {
    if (response && response.emailToSend) {
      console.log(response.emailToSend);

      const result = await resend.emails.send({
          from: 'ShareMe@resend.dev',
          to: response.emailToSend,
          subject: response?.userName + " shared file with you",
          react: EmailTemplate({ response }),
      });
      console.log("result is:",result);
      
      return NextResponse.json({ message: "email sent successfully" });
  } else {
      throw new Error("Invalid or missing 'emailToSend' property in the request body");
  }} catch (error) {
    return NextResponse.json({ error:error.message+"dikkat hai re bhai" });
  }
}
