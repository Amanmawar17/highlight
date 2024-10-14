import { PiDotsThreeBold } from "react-icons/pi";

export default function page() {
  return (
    <div className='p-8'>
      <h3 className='text-2xl font-raleway font-medium '>Create your project</h3>
      <div className='mt-8 max-w-5xl m-auto'>
        <table className="w-full">
          <thead className="font-raleway text-xl bg-stone-200 rounded-t-md">
            <tr className="flex justify-between item-center gap-x-10 px-8 py-5">
              <td>Name</td>
              <td>Api Key</td>
              <td>Secret</td>
              <td className="flex items-center"><PiDotsThreeBold className="rotate-90 " /></td>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
