"use client";

import { MoreHorizontal, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverColse,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useAction } from "@/hooks/use-action";
import { deleteBoard } from "@/actions/leave-board";
import { toast } from "sonner";

interface BoardOptionsProps {
  id: string;
}

export const BoardOptions = ({ id }: BoardOptionsProps) => {
  const { excute, isLoading } = useAction(deleteBoard, {
    onError: (error) => {
      toast.error(error);
    },
  });
  const onDelete = () => {
    excute({ id });
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="h-auto w-auto p-2" variant="transparent">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="px-0 pt-3 pb-3" side="bottom" align="start">
        <div className="text-sm font-medium text-center text-neutral-600 mb-2">
          Board Actions
        </div>

        <PopoverColse asChild>
          <Button
            variant="ghost"
            className="h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600"
          >
            <X className="h-4 w-4" />
          </Button>
        </PopoverColse>

        <Button
          variant="ghost"
          onClick={onDelete}
          disabled={isLoading}
          className="rounded-md w-full h-auto p-2 px-5 justify-start font-normal text-sm"
        >
          Delete This Board
        </Button>
      </PopoverContent>
    </Popover>
  );
};