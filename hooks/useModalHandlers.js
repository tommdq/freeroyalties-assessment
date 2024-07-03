import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export function useModalHandlers() {
  const { toast, dismiss } = useToast();
  const [toggleChoices, setToggleChoices] = useState(false);
  const defaultFormValue = {
    question: "",
    choices: [
      { key: uuid(), text: "", type: "" },
      { key: uuid(), text: "", type: "" },
    ],
  };
  const [form, setForm] = useState(defaultFormValue);

  function handleClick() {
    if (!form.question.length) {
      return dismiss();
    }

    setToggleChoices(true);
    toast({
      title: "Question added!",
    });
  }

  function handleChoiceChange(index, field, value) {
    setForm((prev) => {
      const choices = [...prev.choices];
      // Change specific value using index and field
      choices[index][field] = value;
      return { ...prev, choices };
    });
  }

  function handleChangeQuestion(e) {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, question: value }));
  }

  function handleSave() {
    const formattedChoices = form.choices
      .map((choice) => `- ${choice.text} (${choice.type})`)
      .join("\n");

    const formattedData = `Question: ${form.question}\nChoices:\n${formattedChoices}`;
    toast({
      title: "Form saved",
      description: <pre>{formattedData}</pre>,
    });

    setToggleChoices(false);
    setForm(defaultFormValue);
  }

  return {
    handleClick,
    handleChoiceChange,
    handleSave,
    toggleChoices,
    form,
    handleChangeQuestion,
  };
}
