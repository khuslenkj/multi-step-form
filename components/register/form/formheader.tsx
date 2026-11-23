import React from 'react'
import { Separator } from '@/components/ui/separator'

export const FormHeader = () => {
  return (
    <div>
        <div className='flex items-center'>
            <div className='size-8 border border-[#007A55] bg-[#BE94FD] flex justify-center items-center rounded-2xl'>1</div>
            <Separator/>
            <div className='size-8 border border-[#007A55] bg-[#BE94FD] flex justify-center items-center rounded-2xl'>2</div>
            <Separator/>
            <div className='size-8 border border-[#007A55] bg-[#BE94FD] flex justify-center items-center rounded-2xl'>3</div>
        </div>
        <div></div>
    </div>
  )
}
