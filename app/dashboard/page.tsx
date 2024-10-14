




export default function Dashboard() {
  return (
    <div className="grid place-content-start gap-y-10 gap-x-6 lg:grid-cols-1 xl:grid-cols-2 px-16 py-20 w-full max-h-[calc(100vh-80px)]">
      <div className="place-self-center bg-gradient-to-tl from-[#FDC830] to-[#F37335] py-6 px-12 text-white w-96 min-h-56 rounded-sm grid gap-y-3">
        <h1 className="text-3xl font-raleway font-semibold">Hello, Amigos</h1>
        <p className="text-lg font-nunito">Lets start our journey of stories and experience and knowledge sharing.</p>
        <p>What you say!</p>
      </div>
      <div className="place-self-center border-2 border-solid py-6 px-12 w-96 min-h-56 rounded-sm grid gap-y-3">
        <h3 className="text-lg font-mono text-gray-500">Overall Earnings</h3>
        <p className="text-3xl font-raleway font-semibold">&#8377; 1,021</p>
        <p className="text-base font-nunito">Read more about, how you can increase your earnings through ads and subscriptions.
        </p>
      </div>
      <div className="place-self-center border-2 border-solid py-6 px-12 w-96 min-h-56 rounded-sm grid gap-y-3">
        <h1 className="text-3xl font-raleway font-semibold">Blogs Published</h1>
        <p className="text-base font-nunito">You have publish Zero blogs, show your amazing creativity and story telling to world.</p>
      </div>
      <div className="place-self-center border-2 border-solid py-6 px-12 w-96 min-h-56 rounded-sm grid gap-y-3">
        <h1 className="text-3xl font-raleway font-semibold">Blogs Sechduled</h1>
        <p className="text-base font-nunito">You have Zero blogs to Sechduled, show your amazing creativity and story telling to world.</p>
      </div>
    </div>
  )
}
