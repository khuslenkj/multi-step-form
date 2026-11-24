import { useRef, useState, useEffect, type ChangeEvent, MouseEventHandler  } from 'react';
import {
  Field,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { CloudUpload, X } from "lucide-react"

export const ProfileField = () => {
    const InputRef = useRef<HTMLInputElement>(null);
    const [picture, setPicture] = useState<string | null>(null);
    const [fileName, setFileName] = useState('');

    const handleDivClick = () => {
    InputRef.current?.click();
  };
  const handlePictureChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPicture(objectUrl);
      setFileName(file.name)
    }
  }
  const handleRemovePicture = (event: MouseEventHandler<HTMLButtonElement>) => {
    setPicture((current) => current = null)
  }
 
  useEffect(() => {
    return () => {
      if (picture) {
        URL.revokeObjectURL(picture);
      }
    };
  }, [picture]);

  return (
    <Field>
      <FieldLabel htmlFor="picture">Profile photo</FieldLabel>
      <Input id="picture" type="file" accept='image/*' ref={InputRef} onChange={handlePictureChange} hidden />
      <div className="w-full h-22.5 rounded-xl">
        {picture ? (
          <div className='w-full h-full flex items-center justify-between border-2 border-[#E2E8F0] rounded-xl'>
            <div className='flex'>
                <div className='size-16 rounded-full overflow-hidden ml-4'>
                    <img
                    src={picture}
                    alt="Profile"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
                <div className='m-3 flex flex-col gap-y-1.5'>
                    <span className='text-sm text-[#FAF5FF] font-normal'>{fileName}</span>
                    <span className='text-xs text-[#FAF5FF] font-bold cursor-pointer' onClick={handleDivClick}>Choose another photo</span>
                </div>
            </div>
                <button onClick={handleRemovePicture} className='mr-8 cursor-pointer'><X size={16} color="#45556C" /></button>
        </div>
        ) : (
            <div onClick={handleDivClick} className='w-full h-full flex flex-col items-center justify-center border-2 border-dashed border-[#E2E8F0] rounded-xl'>
                <CloudUpload size={18} color="#C5A6FF" />
                <div className="text-xs text-[#FAF5FF] font-bold cursor-default">Choose a photo</div>
                <div className="text-[10px] text-[#FAF5FF] font-normal cursor-default">JPG, PNG or WebP · Up to 5 MB</div>
            </div>
        )}
      </div>
    </Field>
  )
}