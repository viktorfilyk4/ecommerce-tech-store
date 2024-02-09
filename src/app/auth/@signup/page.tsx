import SignupForm from "@/components/SignupForm"

export default function SignupPage() {
  return (
    <div className='px-6 py-10 flex flex-col gap-y-4'>
      <p className='font-semibold'>Register new account</p>
      <p className='text-xs leading-5'>
        If you don't have an account, register a new one
      </p>
      <div>
        <SignupForm />
      </div>
    </div>
  )
}
