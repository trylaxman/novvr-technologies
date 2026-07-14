import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="logo" aria-label="Novvr Technologies home">
      <Image src="/novvr-logo.png" alt="Novvr Technologies" width={206} height={40} priority />
    </Link>
  );
}
