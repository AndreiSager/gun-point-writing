import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="flex-col flex justify-center items-center h-full max-w-[600px] w-full gap-20 py-16">
      <h1 className="font-bold">Welcome to Gunpoint Writer!</h1>
      <Textarea
        placeholder="Type to start..."
        className="resize-none min-h-[700px]"
      />
    </div>
  );
}
