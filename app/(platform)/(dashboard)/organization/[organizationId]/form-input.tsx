"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormStatus } from "react-dom";

interface FormInputProps {
  errors?: {
    title?: string[];
  };
}

export const FormInput = ({ errors }: FormInputProps) => {
  const { pending } = useFormStatus();
  return (
    <>
      <div className="flex flex-col space-y-2">
        <Input
          type="text"
          id="title"
          name="title"
          required
          placeholder="Enter a board title"
          className="border border-black p-1"
          disabled={pending}
        />

        {errors?.title ? (
          <div>
            {errors?.title?.map((error) => (
              <p key={error} className="text-red-600 text-xs font-semibold">
                {error}
              </p>
            ))}
          </div>
        ) : null}
      </div>

      <Button type="submit" disabled={pending}>
        Submit
      </Button>
    </>
  );
};
