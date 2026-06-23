import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return Response.json({ error: 'All fields are required.' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: 'snehakv161@gmail.com',
      replyTo: email,
      subject: `Portfolio Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #050510; color: #fff; padding: 32px; border-radius: 12px; border: 1px solid #1e3a8a;">
          <h2 style="color: #3b82f6; margin-bottom: 24px; font-size: 24px;">New Portfolio Message</h2>
          <div style="background: #0a0a1a; padding: 20px; border-radius: 8px; margin-bottom: 16px;">
            <p style="color: #94a3b8; font-size: 12px; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 1px;">From</p>
            <p style="color: #fff; font-size: 18px; font-weight: bold;">${name}</p>
          </div>
          <div style="background: #0a0a1a; padding: 20px; border-radius: 8px; margin-bottom: 16px;">
            <p style="color: #94a3b8; font-size: 12px; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 1px;">Email</p>
            <p style="color: #3b82f6;">${email}</p>
          </div>
          <div style="background: #0a0a1a; padding: 20px; border-radius: 8px;">
            <p style="color: #94a3b8; font-size: 12px; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
            <p style="color: #e2e8f0; line-height: 1.8;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <p style="color: #475569; font-size: 12px; margin-top: 24px; text-align: center;">Sent from Sneha K V Portfolio</p>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)
    return Response.json({ success: true, message: 'Email sent successfully!' })

  } catch (error) {
    console.error('Email error:', error)
    return Response.json({ error: 'Failed to send email. Please try again.' }, { status: 500 })
  }
}
