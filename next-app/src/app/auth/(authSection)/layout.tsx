'use client'

import { usePathname } from "next/navigation"

export default function AuthSectionLayout({
  children
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="flex flex-col gap-y-6">
      <h2 className='font-semibold text-xl'>Customer {pathname.split('/')[2]}</h2>
      <div className="flex justify-center">{children}</div>
    </div>
  )
}
