"use client"
import GlassSurface from "./GlassSurface"
import { Form1 } from "../register/form/Form1"
import { Form2 } from "../register/form/Form2"
import { Form3 } from "../register/form/Form3"
import { Success } from "../register/form/Success"
import React, { useState, MouseEvent } from "react"
import { FormHeader } from "../register/form/formheader"


export const GlassTemplate = () => {
  const [forms, setForms] = useState<number>(0)
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setForms((current) => current + 1)
  }
  const handleBackClick = (event: MouseEvent<HTMLButtonElement>) => {
    setForms((current) => current - 1)
  }
  const handleSuccessClick =  (event: MouseEvent<HTMLButtonElement>) => {
    setForms(0)
  }
  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = new FormData(event.target)

    const firstName = form.get("firstName")
    const lastName = form.get("lastName")
    const email = form.get("email")
  }
  const Forms = [<Form1 onClick={handleClick} onSubmit={handleSubmit}/>, <Form2 onClick={handleClick} onBackClick={handleBackClick} onSubmit={handleSubmit}/>, <Form3 onClick={handleClick} onBackClick={handleBackClick}  onSubmit={handleSubmit}/>, <Success onSuccess={handleSuccessClick}/>]
  return (
    <GlassSurface
    width={544}
    height={"auto"}
    borderRadius={20}
    distortionScale={-20}
    displace={30}
    backgroundOpacity={0.1}
    >
      <div>
      <FormHeader step={forms}/>
      {Forms[forms]}
      </div>
    </GlassSurface>
  )
}
