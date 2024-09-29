import bcrypt from 'bcryptjs';
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";
import { prisma } from '@/prisma/prisma';

export async function POST(request: Request) {
    try {
        const { fullName, password, email, phone } = await request.json();

        // Check if email is already registered and verified
        const existingUserVerifiedByEmail = await prisma.user.findFirst({
            where: {
                email: email,
                isVerified: true,
            },
        });

        if (existingUserVerifiedByEmail) {
            return new Response(
                JSON.stringify({
                    success: false,
                    message: "This email is already registered!",
                }),
                { status: 400 }
            );
        }

        // Generate verification code
        const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Set verification code expiry time (6 hours from now)
        const expiryDate = new Date();
        expiryDate.setHours(expiryDate.getHours() + 6);

        // Register new user
        const newUser = await prisma.user.create({
            data: {
                fullName: fullName,
                password: hashedPassword,
                email: email,
                phone: phone,
                verifyCode: verifyCode,
                verifyCodeExpiry: expiryDate,
                isVerified: false,
            },
        });

        // Send verification email
        const emailResponse = await sendVerificationEmail(
            email,
            fullName,
            verifyCode
        );
        
        if (!emailResponse.success) {
            return new Response(
                JSON.stringify({
                    success: false,
                    message: emailResponse.message,
                }),
                { status: 500 }
            );
        }

        return new Response(
            JSON.stringify({
                success: true,
                message: "User registered successfully. Please verify your email.",
            }),
            { status: 201 }
        );
        
    } catch (error) {
        console.error('Error registering user', error);
        return new Response(
            JSON.stringify({
                success: false,
                message: "Error registering user",
            }),
            { status: 500 }
        );
    }
}
