import { UserButton } from '@clerk/nextjs'

import MobileSidebar from '@/components/mobile-sidebar'

export default function NavBar() {
  return (
    <div className="flex items-center sm:bg-[#3b2c57] sm:text-white p-4 ">
      <MobileSidebar />
      <div className="flex w-full justify-end ">
        <UserButton afterSignOutUrl="/"  />
      </div>
    </div>
  );
}
