import VerificationEmail from "@/emails/verificationEmail";
import { resend } from "@/lib/resend";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email:string,
    fullName:string,
    verifyCode:string,

): Promise<ApiResponse>  {
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Verification Code | CMS',
            react: VerificationEmail({fullName, otp:verifyCode}) 
          });
          console.log("Verification message sent successfully")
          return {
            success: true,
            message: 'Verification send successfully.'
        }
    } catch (emailError) {
        console.error("error sending verificationEmail", emailError)
        return {
            success: false,
            message: 'Failed to send verification email'
        }
    }
    
}