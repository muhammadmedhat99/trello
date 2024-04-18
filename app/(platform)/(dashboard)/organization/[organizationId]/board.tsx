import { deleteBoard } from "@/actions/delete-board";
import { Button } from "@/components/ui/button";

interface BoardProps {
  title: string;
  id: string;
}

export const Board = ({ title, id }: BoardProps) => {
  return (
    <form className="flex items-center gap-x-2" action={deleteBoard.bind(null,id)}>
      <p>Board Title : {title}</p>

      <Button variant="destructive" size="sm" type="submit">
        Delete
      </Button>
    </form>
  );
};
