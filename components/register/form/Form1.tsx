import React from 'react'
import { FormHeader } from './formheader'
import { InputField } from './InputField'
import { Button } from '@/components/ui/button'
import '@/app/globals.css';
import { Form } from '@base-ui/react';
import { MouseEvent } from 'react';
import { Lock } from 'lucide-react';

type formProps = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void,
  onSubmit: (event: React.SubmitEvent<HTMLFormElement>) => void
}

export const Form1 = ({onClick, onSubmit}: formProps) => {
  return (
    <Form onSubmit={onSubmit} className='w-full h-full'>
      <div className='text-xs text-(--text-color-white) font-bold pb-2 pt-10'>STEP 1 OF 3</div>
      <div className='text-3xl text-(--text-color-white) font-bold pb-1'>Let’s start with you.</div>
      <div className='text-xs text-(--text-color-white) font-normal pb-6'>A few details to make this space your own.</div>
      <div className='flex gap-5 pb-2.5'>
        <InputField Type='text' Label='First Name' PlaceHolder='e.g. Alex' name='firstName'/>
        <InputField Type='text' Label='Last Name' PlaceHolder='e.g. Morgan' name='lastName'/>
      </div>
      <InputField Type='email' Label='Email address' PlaceHolder='you@example.com' name='email'/>
      <div className='text-xs text-(--text-color-white) font-normal pt-6  '>A little connection starts with the right address.</div>
      <Button onClick={onClick} size="lg">Continue   →</Button>
      <div className='w-full flex justify-center items-baseline gap-x-1.5'>
        <Lock size={12} color="#45556C" />
        <div className='text-xs text-(--text-color-white) font-normal pt-3.5'>Progress is saved when you click Continue.</div>
      </div>
    </Form>
  )
}
