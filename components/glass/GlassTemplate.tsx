"use client"
import GlassSurface from "./GlassSurface"
import { Form1 } from "../register/form/Form1"
import { Form2 } from "../register/form/Form2"
import { Form3 } from "../register/form/Form3"
import { useState, MouseEvent } from "react"


export const GlassTemplate = () => {
  const [forms, setForms] = useState<number>(0)
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setForms((current) => current + 1)
  }
  let h = forms == 0 && 470 || forms == 1 && 444 || forms == 2 ? 599 : 344
  const Forms = [<Form1 onClick={handleClick}/>, <Form2 onClick={handleClick}/>, <Form3 onClick={handleClick}/>]
  return (
    <GlassSurface
    width={544}
    height={h}
    borderRadius={20}
    distortionScale={-20}
    displace={0}
    backgroundOpacity={0.3}
    >
      {Forms[forms]}
    </GlassSurface>
  )
}
