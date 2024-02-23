import LoginForm from "@/components/LoginForm"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className='max-w-6xl flex flex-col gap-y-4 md:flex-row md:gap-x-4'>
      <div className='px-6 py-10 flex flex-col gap-y-4 bg-background-secondary md:flex-1'>
        <p className='font-semibold'>Registered Customers</p>
        <p className='text-xs leading-5'>
          If you have an account, sign in with your email address.
        </p>
        <div>
          <LoginForm />
        </div>
      </div>
      <div className='bg-background-secondary px-6 py-10 flex flex-col gap-y-4 md:flex-1'>
        <p className='font-semibold'>New Customer?</p>
        <div className='text-xs flex flex-col gap-y-8'>
          <p>Creating an account has many benefits:</p>
          <ul className='list-disc pl-3 leading-5'>
            <li>Check out faster</li>
            <li>Keep more than one address</li>
            <li>Track orders and more</li>
          </ul>
        </div>
        <Link href='/auth/register' className='py-4 w-[180px]'>
          <Button variant='default' type='submit'>
            Create an account
          </Button>
        </Link>
      </div>
    </div>
  )
}
