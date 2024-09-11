import VerificationEmail from "@/emails/verificationEmail";
import { resend } from "@/lib/resend";

export async function sendVerificationEmail(
    email:string,
    fullName:string,
    verifyCode:string,

) {
    try {
        await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['delivered@resend.dev'],
            subject: 'Verification Code | CMS',
            react: VerificationEmail({fullName, otp:verifyCode}) 
          })
        console.log("Verification message sent successfully")
    } catch (emailError) {
        console.error("error sending verificationEmail", emailError)
    }
    
}