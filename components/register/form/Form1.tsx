import React from 'react'
import { FormHeader } from './formheader'
import { InputField } from './InputField'
import { Button } from '@/components/ui/button'
import '@/app/globals.css';
import { Form } from '@base-ui/react';
import { MouseEvent } from 'react';

type formProps = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

export const Form1 = ({onClick}: formProps) => {
  return (
    <Form className='w-full h-full'>
      <FormHeader/>
      <div className='text-xs text-(--text-color-white) font-bold pb-2 pt-10'>STEP 1 OF 3</div>
      <div className='text-3xl text-(--text-color-white) font-bold pb-1'>Let’s start with you.</div>
      <div className='text-xs text-(--text-color-white) font-normal pb-6'>A few details to make this space your own.</div>
      <div className='flex gap-5 pb-2.5'>
        <InputField Type='text' Label='First Name' PlaceHolder='e.g. Alex'/>
        <InputField Type='text' Label='Last Name' PlaceHolder='e.g. Morgan'/>
      </div>
      <InputField Type='email' Label='Email address' PlaceHolder='you@example.com'/>
      <div className='text-xs text-(--text-color-white) font-normal pt-6  '>A little connection starts with the right address.</div>
      <Button onClick={onClick} size="lg">Continue   →</Button>
      <div className='w-full flex justify-center'>
        <div className='text-xs text-(--text-color-white) font-normal pt-3.5'>Progress is saved when you click Continue.</div>
      </div>
    </Form>
  )
}
