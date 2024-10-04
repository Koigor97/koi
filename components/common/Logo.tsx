import Link from "next/link";
import Image from "next/image";

function Logo({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Link href="/">
        <Image
          src="/images/koi-logo.png"
          alt="Koi's logo"
          width={234}
          height={150}
        />
      </Link>
    </div>
  );
}

export default Logo;
