import notFound from "@/public/img/notfound.png"
import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="grid place-content-center h-screen">
      <div className="grid place-content-center gap-y-5 max-w-3xl m-auto">
        <Image src={notFound} alt="img" width={400} height={300} className="w-full" />
        <p className="text-2xl font-mono font-medium text-blue">You were on the wrong url, kindly go to the home.</p>
          <Link href="/" className="place-self-center bg-black text-green text-2xl font-semibold rounded py-3 px-6">
          Go to Home
          </Link>
      </div>
    </div>
  )
}
