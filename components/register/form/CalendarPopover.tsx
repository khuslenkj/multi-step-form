import React from "react"
import { format } from "date-fns"
import { CalendarBasic } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

export const CalendarPopover = () => {
  const [date, setDate] = React.useState<Date | undefined>()

  return (
    <Popover>
  <PopoverTrigger render={<Button variant="outline" size='lg'/>}>
    <div className="w-full h-11 flex items-center gap-x-2.5 pl-3.5">
      <Calendar size={16} color="#45556C" />
      {date ? format(date, "PPP") : <span>Choose your birthday</span>}
    </div>
  </PopoverTrigger>
  <PopoverContent>
    <CalendarBasic mode="single" className="rounded-lg border" selected={date} onSelect={setDate}/>
    <div className="border-t px-3 py-2 text-sm text-muted-foreground">
          Selected:{" "}
          <span className="font-medium text-foreground">
            {date ? format(date, "PPP") : "None"}
          </span>
        </div>
  </PopoverContent>
</Popover>
  )
}