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


export const Form3 = ({onClick}: formProps) => {
  return (
    <Form className='w-full h-full'>
      <FormHeader/>
      <div className='text-xs text-(--text-color-white) font-bold pb-2 pt-10'>STEP 3 OF 3</div>
      <div className='text-3xl text-(--text-color-white) font-bold pb-1'>Make yourself at home.</div>
      <div className='text-xs text-(--text-color-white) font-normal pb-6'>The finishing touches. A little personality goes a long way.</div>
      <div className='flex gap-5 pb-4.5'>
        <InputField Type='password' Label='Phone number' PlaceHolder='99112233'/>
      </div>
      <InputField Type='password' Label='Confirm password' PlaceHolder='Enter your password again'/>
      <div className='flex pt-2.5 gap-3'>
        <Button size="xs" variant="outline">←   Back</Button>
        <Button onClick={onClick} size="sm">Continue   →</Button>
      </div>
      <div className='w-full flex justify-center'>
        <div className='text-xs text-(--text-color-white) font-normal pt-3.5'>Progress is saved when you click Continue.</div>
      </div>
    </Form>
  )
}