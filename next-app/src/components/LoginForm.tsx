'use client'

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  FormField
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const formSchema = z
  .object({
    email: z.string().email("Must be email"),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters"
    })
  })

type FormSchema = z.infer<typeof formSchema>

export default function SigninForm() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ''
    }
  })

  const onSubmit = (data: FormSchema) => {
    console.log("SUCCESS", data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-y-4">
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Your Email <span className="text-red-600">*</span></FormLabel>
                <FormControl>
                  <Input placeholder='Email' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Your Password <span className="text-red-600">*</span></FormLabel>
                <FormControl>
                  <Input placeholder='Password' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="pt-5">
          <Button variant='default' type='submit' className="">Submit</Button>
          <Button variant='ghost' type='button' className="">Forgot Your Password?</Button>
        </div>
      </form>
    </Form>
  )
}