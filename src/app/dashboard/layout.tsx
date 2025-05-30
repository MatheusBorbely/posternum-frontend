import React, { type ReactNode } from 'react'
import Logo from "@/assets/logo.svg"
import { NavItems } from '@/components/pages/dashboard/nav-items'
import { UserDropdown } from '@/components/pages/dashboard/user-dropdown'
type DashboardLayoutProps = {
  children: ReactNode
}
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className='w-full h-screen overflow-hidden grid grid-cols-[300px_1fr]'>
      <aside className='w-full h-full flex flex-col items-center border-r border-muted'>
        <div className="w-full p-6 border-b border-muted">
          <Logo className="max-w-[40px] mx-auto" />
        </div>

        <NavItems />

        <div className="w-full mt-auto border-t border-muted px-3 py-4 items-center flex justify-between gap-2">
          <UserDropdown />
        </div>
      </aside>

      <main>
        {children}
      </main>
    </div>
  )
}
