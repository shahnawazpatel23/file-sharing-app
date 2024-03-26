import { NextResponse } from 'next/server';
import { EmailTemplate } from '../../_components/email-template';
import { Resend } from 'resend';




const resend = new Resend("e_AcYse7mY_6dNmZM6ZjPx84mTP2utdMvAY");



export async function POST(req: { json: () => any; }) {
    const response = await req.json();
    console.log("ye hai response",response);
    console.log(response.emailToSend);
    
  try {
    const result = await resend.emails.send({
      from: 'lavdapav@resend.dev',
      to: [response.emailToSend],
      subject: response?.userName+" shared file with you",
      react: EmailTemplate({ response }),
    })

    return NextResponse.json({ message: "email sent successfully" });
  } catch (error) {
    return NextResponse.json({ error:error.message+"dikkat hai re bhai" });
  }
}
