import SigninForm from "@/components/SigninForm"

export default function SigninPage() {
  return (
    <div className='px-6 py-10 flex flex-col gap-y-4'>
      <p className='font-semibold'>Registered Customers</p>
      <p className='text-xs leading-5'>
        If you have an account, sign in with your email address.
      </p>
      <div>
        <SigninForm />
      </div>
    </div>
  )
}
