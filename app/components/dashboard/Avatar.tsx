import Image from 'next/image'
import Link from 'next/link'

import LogoutButton from '../auth/LogoutButton'
import profile from '@/public/img/chainsaw.jpg'

export default function Avatar() {
  return (
    <div className='group'>
      <Image src={profile} alt="" height={40} width={40} className='rounded-full cursor-pointer' />
      <ul className='absolute hidden group-hover:flex flex-col gap-y-4 top-14 right-2 rounded-sm border-2 border-solid p-4 bg-white text-black'>
        <li><Link href="profile" className='text-base font-medium hover:underline'>Profile</Link></li>
        <li><LogoutButton /></li>
      </ul>
    </div>
  )
}
