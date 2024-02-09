import Breadcrumb from "@/components/Breadcrumb"

export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <section className='p-4 flex flex-col gap-y-4'>
        <Breadcrumb />
        {children}
      </section>
    </>
  )
}
