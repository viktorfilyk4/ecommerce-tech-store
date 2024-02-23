import RegisterForm from "@/components/RegisterForm"
import Link from "next/link"

export default function RegisterPage() {
  return (
    <div className='px-6 py-10 flex flex-col gap-y-4 bg-background-secondary'>
      <p className='font-semibold'>Register new account</p>
      <p className='text-xs leading-5'>
        If you don&apos;t have an account, register a new one
      </p>
      <div>
        <RegisterForm />
      </div>
      <Link href='/auth/login'>
        Back to login
      </Link>
    </div>
  )
}
