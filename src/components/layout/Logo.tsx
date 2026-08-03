import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  inverted?: boolean;
}

export function Logo({ inverted }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/brand/logo.svg"
        alt="Cairn"
        width={42}
        height={58}
        priority
      />

      <span
        className={`text-xl font-semibold tracking-tight ${
          inverted ? "text-white" : "text-black"
        }`}
      >
        Cairn
      </span>
    </Link>
  );
}