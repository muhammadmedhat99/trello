"use client";

import { toast } from "sonner";

import { updateBoard } from "@/actions/update-board";
import { FormInput } from "@/components/form/form-input";
import { Button } from "@/components/ui/button";
import { useAction } from "@/hooks/use-action";
import { Board } from "@prisma/client";
import { ElementRef, useRef, useState } from "react";

interface BoardTitleFormProps {
  data: Board;
}

export const BoardTitleForm = ({ data }: BoardTitleFormProps) => {
  const { excute } = useAction(updateBoard, {
    onSuccess: (data) => {
      toast.success(`Board "${data.title}" Updated`);
      setTitle(data.title);
      disableEditing();
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);

  const [title, setTitle] = useState(data.title);
  const [editing, setEditing] = useState(false);

  const enableEditing = () => {
    setEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    });
  };

  const disableEditing = () => {
    setEditing(false);
  };

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    excute({
      title,
      id: data.id,
    });
  };

  const onBlur = () => {
    formRef.current?.requestSubmit();
  };

  if (editing) {
    return (
      <form
        ref={formRef}
        className="flex items-center gap-x-2"
        action={onSubmit}
      >
        <FormInput
          ref={inputRef}
          id="title"
          onBlur={onBlur}
          defaultValue={title}
          className="text-lg font-bold px-[7px] py-1 h-7 bg-transparent 
          focus-visible:outline-none focus-visible:ring-transparent border-none"
        />
      </form>
    );
  }

  return (
    <Button
      onClick={enableEditing}
      variant="transparent"
      className="font-bold text-lg h-auto w-auto p-1 px-2"
    >
      {title}
    </Button>
  );
};
