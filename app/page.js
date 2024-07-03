"use client";
import { Choice } from "@/components/choice";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useModalHandlers } from "@/hooks/useModalHandlers";

export default function Home() {
  const {
    handleSave,
    handleChoiceChange,
    handleClick,
    toggleChoices,
    form: { choices, question },
    handleChangeQuestion,
  } = useModalHandlers();

  return (
    <section className={"flex justify-center items-center h-screen"}>
      <Dialog defaultOpen>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent
          className={"flex flex-col justify-center items-center gap-4 h-1/3"}
        >
          <DialogTitle>
            <Input
              placeholder={"Write your question..."}
              value={question}
              className={"focus-visible: none"}
              onChange={handleChangeQuestion}
            />
          </DialogTitle>
          <DialogDescription>
            <Button variant={"secondary"} onClick={handleClick}>
              Add a question!
            </Button>
          </DialogDescription>

          {toggleChoices && (
            <div className={"flex gap-4 items-center mt-4"}>
              {choices.map((choice, index) => (
                <Choice
                  key={choice.key}
                  choice={choice}
                  index={index}
                  handleChoiceChange={handleChoiceChange}
                />
              ))}
            </div>
          )}

          {question &&
            choices.every((choice) => choice.text && choice.type) && (
              <DialogClose asChild>
                <Button variant={"secondary"} onClick={handleSave}>
                  Save
                </Button>
              </DialogClose>
            )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
