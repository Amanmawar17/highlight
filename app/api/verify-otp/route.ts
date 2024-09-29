import { prisma } from '@/prisma/prisma';

export async function POST(request: Request) {
    try {
        const { fullName, code } = await request.json();

        // Decoding the username
        const decodedUsername = decodeURIComponent(fullName);

        // Finding user by fullName
        const user = await prisma.user.findFirst({
            where: { fullName: decodedUsername },
        });

        // If the user is not found
        if (!user) {
            return new Response(
                JSON.stringify({
                    success: false,
                    message: "User Not found",
                }),
                { status: 500 }
            );
        }

        // Verifying the code and checking expiry
        const isCodeValid = user.verifyCode === code;
        const isCodeNotExpired = new Date(user.verifyCodeExpiry) > new Date();

        if (isCodeValid && isCodeNotExpired) {
            // Update user to mark as verified
            await prisma.user.update({
                where: { id: user.id },
                data: { isVerified: true },
            });

            return new Response(
                JSON.stringify({
                    success: true,
                    message: 'Account verified successfully',
                }),
                { status: 200 }
            );
        } else if (!isCodeNotExpired) {
            return new Response(
                JSON.stringify({
                    success: false,
                    message: 'Verification code is expired, please signup again to get a new code',
                }),
                { status: 400 }
            );
        } else {
            return new Response(
                JSON.stringify({
                    success: false,
                    message: 'Incorrect verification code',
                }),
                { status: 400 }
            );
        }
    } catch (error) {
        console.error('Error Verifying user', error);
        return new Response(
            JSON.stringify({
                success: false,
                message: "Error verifying user",
            }),
            { status: 500 }
        );
    }
}
