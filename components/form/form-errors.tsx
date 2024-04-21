import { XCircle } from "lucide-react";

interface FormErrorsProps {
  id: string;
  errors?: Record<string, string[] | undefined>;
}

export const FormErrors = ({ id, errors }: FormErrorsProps) => {
  if (!errors) {
    return null;
  } else {
    return (
      <div
        id={`${id}-error`}
        aria-live="polite"
        className="mt-2 text-xs text-rose-600"
      >
        {errors?.[id]?.map((error: string) => (
          <div
            className="flex items-center font-semibold p-2 border border-rose-600/60 bg-rose-600/10 rounded-xl"
            key={error}
          >
            <XCircle className="w-4 h-4 me-2" />
            {error}
          </div>
        ))}
      </div>
    );
  }
};
