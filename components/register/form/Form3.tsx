import React from 'react'
import { FormHeader } from './formheader'
import { InputField } from './InputField'
import { Button } from '@/components/ui/button'
import '@/app/globals.css';
import { Form } from '@base-ui/react';
import { MouseEvent } from 'react';
import { Lock } from 'lucide-react';
import { CalendarField } from './CalendarField';
import { ProfileField } from './ProfileField';

type formProps = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
  onBackClick: (event: MouseEvent<HTMLButtonElement>) => void
  onSubmit: (event: React.SubmitEvent<HTMLFormElement>) => void
}


export const Form3 = ({onClick, onBackClick, onSubmit}: formProps) => {
  return (
    <Form className='w-full h-full'>
      <div className='text-xs text-(--text-color-white) font-bold pb-2 pt-10'>STEP 3 OF 3</div>
      <div className='text-3xl text-(--text-color-white) font-bold pb-1'>Make yourself at home.</div>
      <div className='text-xs text-(--text-color-white) font-normal pb-6'>The finishing touches. A little personality goes a long way.</div>
      <div className='flex gap-5 pb-4.5'>
        <InputField Type='tel' Label='Phone number' PlaceHolder='99112233' name='phoneNumber'/>
      </div>
      <CalendarField/>
      <div className='pt-4'><ProfileField/></div>
      <div className='flex pt-2.5 gap-3'>
        <Button onClick={onBackClick} size="xs" variant="outline">←   Back</Button>
        <Button onClick={onClick} size="sm">Continue   →</Button>
      </div>
      <div className='w-full flex justify-center items-baseline gap-x-1.5'>
        <Lock size={12} color="#45556C" />
        <div className='text-xs text-(--text-color-white) font-normal pt-3.5'>Progress is saved when you click Continue.</div>
      </div>
    </Form>
  )
}