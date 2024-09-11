

import { useForm, SubmitHandler } from "react-hook-form"
import Contact from "@/public/img/contact.svg"

type Inputs = {
    email: string
    para: string
}



export default function ContactForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
    return (
        <div className="flex flex-col justify-center items-center gap-y-5 p-4">
            <div className="grid gap-y-4">
            <h3 className="text-3xl font-raleway font-semibold text-center">Share your Story and Experience</h3>
            <p className="text-xl font-nunito font-medium text-center text-wrap">We will feature your response as our valuable review in the review section.</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-y-10 gap-x-40 mt-10">
                <form onSubmit={handleSubmit(onSubmit)} className='grid justify-start gap-y-8'>
                    <label className="grid gap-y-3 font-raleway font-medium text-lg"> Email
                    <input type="email" placeholder='email' {...register("email", { required: true })} className='outline outline-1 p-2 w-72 lg:w-96' />
                    </label>
                    <label className="grid gap-y-3 font-raleway font-medium text-lg">Tell us more!
                    <textarea placeholder='Tell us more!' rows={5} {...register("para", { required: true })} className='outline outline-1 p-2 w-72 md:w-96' />
                    </label>
                    <button type='submit' className='bg-blue text-white text-xl font-nunito py-2 px-8 w-fit place-self-center rounded-sm' >Submit</button>
                </form>
                <div className="">
                    <Contact className="w-72 h-72 md:w-full md:h-full"/>
                </div>
            </div>
        </div>
    )
}
