"use client"

import Breadcrumb from "@/components/Breadcrumb"
import ChangeFormBlock from "@/components/ChangeFormBlock"
import { MouseEventHandler, createContext, useState } from "react"

export type ActiveForm = "signin" | "signup"
export type HandleSetActiveForm =
  | MouseEventHandler<HTMLButtonElement>
  | undefined

export const LoginLayoutContext = createContext<HandleSetActiveForm>(undefined)

export default function AuthLayout({
  children,
  signin,
  signup
}: {
  children: React.ReactNode
  signin: React.ReactNode
  signup: React.ReactNode
}) {
  const [activeForm, setActiveForm] = useState<ActiveForm>("signin")

  const handleSetActiveForm: HandleSetActiveForm = () => {
    setActiveForm(activeForm === "signin" ? "signup" : "signin")
  }

  return (
    <>
      {/* {children} */}
      <LoginLayoutContext.Provider value={handleSetActiveForm}>
        <section className='p-4 flex flex-col gap-y-4'>
          {/* Navigation */}
          <Breadcrumb/>
          <h2 className='font-semibold text-xl'>Customer Authorization</h2>
          {/* Authorization form */}
          <div className='bg-background-secondary'>
            {activeForm === "signin" ? signin : signup}
          </div>
          {/* Block with button to change authorization form above */}
          <ChangeFormBlock
            handleSetActiveForm={handleSetActiveForm}
            activeForm={activeForm}
          />
        </section>
      </LoginLayoutContext.Provider>
    </>
  )
}
