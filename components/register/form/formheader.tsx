import React from 'react'
import { Separator } from '@/components/ui/separator'
import {User, Lock, Camera} from 'lucide-react'

type FormHeaderType = {
  step: number
}

export const FormHeader = ({step}: FormHeaderType) => {
  return (
    <div>
        <div className='flex items-center mb-2.5'>
            <div className={`size-8 border border-[#007A55] bg-[#BE94FD] flex justify-center items-center rounded-2xl text-xs text-[#261432] font-bold`}>{step == 0 ? 1 : "✓"}</div>
            <div className="w-50 h-0.5 bg-black overflow-hidden">
              <div className={`h-full bg-[#BE94FD]  transition-all duration-200 ease-in-out origin-left ${step > 0 ? "w-full" : "w-0"}`}></div>
            </div>
            <div className={`size-8 border flex justify-center items-center rounded-2xl transition-color duration-200 ease-in text-xs font-bold ${step > 0 ? "border-[#007A55] bg-[#BE94FD] text-[#261432]" : "border-[#E2E8F0] bg-transparent text-[#FAF5FF]"}`}>{step <= 1 && 2 || step > 1 && "✓"}</div>
            <div className="w-50 h-0.5 bg-black overflow-hidden">
              <div className={`h-full bg-[#BE94FD] transition-all duration-200 ease-in-out origin-left ${step > 1 ? "w-full" : "w-0"}`}></div>
            </div>
            {/* <div className={`w-50 h-0.5 ${step > 1 ? "bg-[#BE94FD]" : "bg-black"}`}></div> */}
            <div className={`size-8 border flex justify-center items-center rounded-2xl transition-color duration-200 ease-in text-xs font-bold ${step > 1 ? "border-[#007A55] bg-[#BE94FD] text-[#261432]" : "border-[#E2E8F0] bg-transparent text-[#FAF5FF]"}`}>{step <= 2 ? 3 : "✓"}</div>
        </div>
        <div className='flex justify-between relative'>
          <div className='flex gap-x-1.5 items-center absolute'>
            <User size={16} color="#45556C" />
            <div className='text-xs text-[#FAF5FF] font-normal'>Persolan info</div>
          </div>
          <div className='flex gap-x-1.5 items-center absolute left-50'>
            <Lock size={16} color="#45556C" />
            <div className='text-xs text-[#FAF5FF] font-normal'>Security</div>
          </div>
          <div className='flex gap-x-1.5 items-center absolute right-0'>
            <Camera size={16} color="#45556C" />
            <div className='text-xs text-[#FAF5FF] font-normal'>Profile</div>
          </div>
        </div>
    </div>
  )
}
