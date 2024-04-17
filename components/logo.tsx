import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hidden md:flex items-center gap-x-2 transition hover:opacity-85">
        <Image
          className="object-cover"
          src="/logo.png"
          alt="Logo"
          height={60}
          width={120}
        />
      </div>
    </Link>
  );
};
