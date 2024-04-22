"use client";

import { Plus } from "lucide-react";
import { ListWrapper } from "./list-wrapper";

type ListFormProps = {};

export const ListForm = ({}: ListFormProps) => {
  return (
    <ListWrapper>
      {/* <form className="w-full p-3 rounded-md bg-white space-y-4 shadow-md"> */}
      <button className="w-full rounded-md bg-white/80 transition p-3 flex items-center font-medium text-sm hover:bg-white/50">
        <Plus className="w-4 h-4 mr-2" />
        Add A List
      </button>
      {/* </form> */}
    </ListWrapper>
  );
};
