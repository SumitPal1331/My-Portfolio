"use server"

export async function sendEmail(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Construct the email content
    const emailContent = `
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      Message: ${message}
    `

    // In a real implementation, you would use a service like Nodemailer, SendGrid, etc.
    // For now, we'll just log the data and simulate a successful submission
    console.log("Email would be sent to sumitpal1331@gmail.com with content:", emailContent)

    // Return success status
    return { success: true, message: "Message sent successfully!" }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, message: "Failed to send message. Please try again." }
  }
}
