"use server"
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";

export async function deleteBoard(id: string) {
  await db.board.delete({
    where: {
      id
    }
  });

  revalidatePath("/organization/org_2fDgVdcDXDv1Q55v5Wl9QlhhJNX")
}