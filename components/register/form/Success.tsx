import React from 'react'
import { FormHeader } from './formheader'
import {CircleCheck} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { MouseEvent } from 'react'

type successProps = {
  onSuccess:  (event: MouseEvent<HTMLButtonElement>) => void
}

export const Success = ({onSuccess}: successProps) => {
  return (
    <div className='flex flex-col items-center'>
        <div className='pt-17.5'><CircleCheck size={36} color="#45556C" strokeWidth={3}/></div>
        <div className='pt-5.5 text-3xl text-[#F6F2FF] font-normal'>You’re all set!</div>
        <div className='pt-3 pb-6.5 text-sm text-[#FAF5FF] font-normal'>Your profile has been created.</div>
        <Button onClick={onSuccess} size='lg'>Start over   →</Button>
    </div>
  )
}
