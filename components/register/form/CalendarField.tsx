import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { CalendarPopover } from "./CalendarPopover"

export const CalendarField = () => {
     return (
    <Field>
      <FieldLabel htmlFor="input-field-username">Date of birth</FieldLabel>
      <CalendarPopover/>
      <FieldDescription>You must be 13 or older to join.</FieldDescription>
    </Field>
  )
}