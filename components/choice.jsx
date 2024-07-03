import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function Choice({ choice, index, handleChoiceChange }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <Input
        placeholder={`Choice ${index + 1}`}
        value={choice.text}
        onChange={(e) => handleChoiceChange(index, "text", e.target.value)}
      />
      <Select
        className={"w-full"}
        onValueChange={(type) => handleChoiceChange(index, "type", type)}
      >
        <SelectTrigger>
          <SelectValue placeholder={"Select a type"} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="dollar">dollar</SelectItem>
          <SelectItem value="number">number</SelectItem>
          <SelectItem value="string">string</SelectItem>
          <SelectItem value="boolean">boolean</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
