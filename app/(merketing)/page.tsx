import { Medal } from "lucide-react";
import { IBM_Plex_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col">
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 me-2" />
          No 1 task managemant
        </div>

        <h1
          className={cn(
            "text-3xl md:text-6xl text-center text-neutral-800 mb-6 font-semibold",
            textFont.className
          )}
        >
          To Help Team To Move
        </h1>

        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 pb-4 rounded-md w-fit">
          The Work Forward
        </div>
      </div>

      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        Collaborate, Manage Projects, and reach new productavity peaks. From
        hight rises to the home office, the way your team work is unique -
        accomplish it all with trello
      </div>

      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">Get Trello For Free</Link>
      </Button>
    </div>
  );
}
