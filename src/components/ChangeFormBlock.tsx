import { Button } from "./ui/button"
import { ActiveForm, HandleSetActiveForm } from "@/app/auth/layout"

export default function ChangeFormBlock({
  handleSetActiveForm,
  activeForm
}: {
  handleSetActiveForm: HandleSetActiveForm
  activeForm: ActiveForm
}) {
  return (
    <div className='bg-background-secondary px-6 py-10 flex flex-col gap-y-4'>
      <p className='font-semibold'>
        {activeForm === "signin" ? "New Customer?" : "Already have an account?"}
      </p>
      {activeForm === "signin" ? (
        <div className='text-xs flex flex-col gap-y-8'>
          <p>Creating an account has many benefits:</p>
          <ul className='list-disc pl-3 leading-5'>
            <li>Check out faster</li>
            <li>Keep more than one address</li>
            <li>Track orders and more</li>
          </ul>
        </div>
      ) : null}
      <Button onClick={handleSetActiveForm} className='py-4 w-[180px]'>
        {activeForm === "signin" ? "Create An Account" : "Login To Account"}
      </Button>
    </div>
  )
}
