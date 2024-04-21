import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <div>
        {children}
        <Toaster position="top-right" />
      </div>
    </ClerkProvider>
  );
};

export default PlatformLayout;
