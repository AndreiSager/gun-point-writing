import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="flex-col flex justify-center items-center h-full max-w-[600px] w-full gap-20 py-16">
      <h1 className="font-bold">Welcome to Gunpoint Writer!</h1>
      <div className="flex flex-col gap-2">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Choose a gamemode" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="3secondrush">3 Second Rush</SelectItem>
              <SelectItem value="timelimit">Time Limit</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <Progress value={10.5} />
        <Textarea
          placeholder="Type to start..."
          className="resize-none min-h-[700px]"
        />
      </div>
    </div>
  );
}
