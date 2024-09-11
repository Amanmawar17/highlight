import dbConnect from "@/lib/dbConnect";
import { UserModel } from "@/app/models/user.models";
import bcrypt from "bcryptjs"
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail"

export async function POST(request: Request) {
    await dbConnect()
    
    try {
        const {fullName,password,email,phone} = await request.json()

        //Check if user is already registered?
        const existingUserVerifiedByEmail = await UserModel.findOne({
            email,
            isVerified:true
        })

        if(existingUserVerifiedByEmail){
            return Response.json({
                success:false,
                message:"this Email is already registered!"
            },{status:400})
        }

        //generate verifyCode
        const verifyCode = Math.floor(100000 + Math.random() * 900000).toString()

        //now user is not registered, let's register him
        const hashedPassword = bcrypt.hash(password, 10)
        const expiryDate = new Date()
        expiryDate.setHours(expiryDate.getHours() + 6 )

        const newUser = new UserModel({
            fullName,
            password: hashedPassword,
            email,
            phone,
            verifyCode,
            verifyCodeExpiry:expiryDate,
            isVerified:false
        })

        await newUser.save()

        //send verification email
        const emailResponse = await sendVerificationEmail(
            email,
            fullName,
            verifyCode
        )


        
    } catch (error) {
        console.error('Error registering user', error)
        return Response.json(
            {
                success:"false",
                message:"Error registering user"
            },
            {
                status:500
            }
        )
    }
    
} 