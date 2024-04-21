import { auth } from "@clerk/nextjs";
import { HelpCircle, User2 } from "lucide-react";
import { redirect } from "next/navigation";

import { Hint } from "@/components/hint";
import { FormPopover } from "@/components/form/form-popover";
import { db } from "@/lib/db";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {};

export const BoardList = async (props: Props) => {
  const { orgId } = auth();

  if (!orgId) return redirect("/select-org");

  const boards = await db.board.findMany({
    where: {
      orgId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center font-semibold text-lg text-neutral-700">
        <User2 className="h-6 w-6 me-2" />
        Your Boards
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {boards.map((board) => (
          <Link
            key={board.id}
            href={`/board/${board.id}`}
            className="group relative aspect-video bg-no-repeat bg-cover bg-center bg-sky-700 rounded-sm h-full w-full p-2 overflow-hidden"
            style={{ backgroundImage: `url(${board.imageThumbUrl})` }}
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition" />
            <p className="text-white font-semibold relative">{board.title}</p>
          </Link>
        ))}

        <FormPopover sideOffset={10} side="right">
          <div
            role="button"
            className="relative aspect-video h-full w-full bg-white rounded-sm flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition"
          >
            <p className="text-sm">Create New Board</p>
            <span className="text-xs">5 remaining</span>

            <Hint
              sideOffset={40}
              description="Free Workspaces can have up to 15 open boards. for unlimited boards upgrade this workspace"
            >
              <HelpCircle className="absolute bottom-2 right-2 h-[14px] w-[14px]" />
            </Hint>
          </div>
        </FormPopover>
      </div>
    </div>
  );
};

BoardList.Skeleton = function SkeletonBoardList() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      <Skeleton className="aspect-video h-full w-full p-2 rounded-sm" />
      <Skeleton className="aspect-video h-full w-full p-2 rounded-sm" />
      <Skeleton className="aspect-video h-full w-full p-2 rounded-sm" />
      <Skeleton className="aspect-video h-full w-full p-2 rounded-sm" />
      <Skeleton className="aspect-video h-full w-full p-2 rounded-sm" />
      <Skeleton className="aspect-video h-full w-full p-2 rounded-sm" />
      <Skeleton className="aspect-video h-full w-full p-2 rounded-sm" />
      <Skeleton className="aspect-video h-full w-full p-2 rounded-sm" />
    </div>
  );
};
