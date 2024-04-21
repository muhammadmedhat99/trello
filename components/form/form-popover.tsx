"use client";

import { useRef } from "react";
import { toast } from "sonner";
import { X } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverColse,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { createBoard } from "@/actions/create-board";
import { useAction } from "@/hooks/use-action";

import { FormInput } from "./form-input";
import { FormSubmit } from "./form-submit";
import { FormPicker } from "./form-picker";
import { useRouter } from "next/navigation";

interface FormPopoverProps {
  children: React.ReactNode;
  side?: "left" | "right" | "top" | "bottom";
  align?: "start" | "center" | "end";
  sideOffset?: number;
}

export const FormPopover = ({
  children,
  side,
  align,
  sideOffset,
}: FormPopoverProps) => {
  const router = useRouter();
  const closeRef = useRef<React.ElementRef<"button">>(null);

  const { excute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      toast.success("Board Created");
      closeRef.current?.click();
      router.push(`/board/${data.id}`);
    },

    onError: (error) => toast.error(error),
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    const image = formData.get("image") as string;

    excute({ title, image });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent
        align={align}
        className="w-80 pt-3"
        side={side}
        sideOffset={sideOffset}
      >
        <div className="text-sm font-medium text-center text-neutral-600 pb-4">
          Create board
        </div>
        <PopoverColse ref={closeRef} asChild>
          <Button
            variant="ghost"
            className="h-auto w-auto absolute top-1 right-1 text-neutral-600"
          >
            <X className="w-4 h-4" />
          </Button>
        </PopoverColse>

        <form action={onSubmit} className="space-y-4">
          <FormPicker id="image" errors={fieldErrors} />

          <div className="space-y-4">
            <FormInput
              id="title"
              label="Board Title"
              type="text"
              errors={fieldErrors}
            />
            <FormSubmit className="w-full" variant="primary">
              Create
            </FormSubmit>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};
