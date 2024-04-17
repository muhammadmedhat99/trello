"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { Menu } from "lucide-react";
import { Sidebar } from "./sidebar";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";

export const MobileSidebar = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  const onOpen = useMobileSidebar((state) => state.onOpen);
  const onClose = useMobileSidebar((state) => state.onClose);
  const isOpen = useMobileSidebar((state) => state.isOpen);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Button
        onClick={onOpen}
        className="block md:hidden mr-2"
        variant="ghost"
        size="sm"
      >
        <Menu className="h-4 w-4" />
      </Button>

      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="left" className="p-2 pt-10">
          <Sidebar storageKey="t-side-mobile-state" />
        </SheetContent>
      </Sheet>
    </>
  );
};
