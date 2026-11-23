import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

type InputProps = {
    Label: string
    Type: string
    PlaceHolder: string
}

export const InputField = (props: InputProps) => {
    const {Label, Type, PlaceHolder} = props
  return (
    <Field>
      <FieldLabel htmlFor="input-field-username">{Label}</FieldLabel>
      <Input
        id="input-field-username"
        type={Type}
        placeholder={PlaceHolder}
      />
    </Field>
  )
}
