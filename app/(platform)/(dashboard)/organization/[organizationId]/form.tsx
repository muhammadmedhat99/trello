"use client";

import { createBoard } from "@/actions/create-board";
import { FormInput } from "./form-input";
import { useAction } from "@/hooks/use-action";

export const Form = () => {
  const { excute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data, "SUCCESS");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;

    excute({ title });
  };
  return (
    <form action={onSubmit}>
      <FormInput errors={fieldErrors} />
    </form>
  );
};
