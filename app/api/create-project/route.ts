import { prisma } from '@/prisma/prisma';
import { NextResponse } from 'next/server';
import { randomBytes } from 'crypto';

export default async function POST(request: Request) {
    
    try {
        const { projectName } = await await request.json();
        const User = await prisma.user.update({
            where: { id: user.id },
            data: {
                isUsingCMS: true
            }
        });
    } catch (error) {
        console.error('Error creating blog post', error);
        return new Response(
            JSON.stringify({
                success: false,
                message: "Error creating blog post",
            }),
            { status: 500 }
        );
    }
}