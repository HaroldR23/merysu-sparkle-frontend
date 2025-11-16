import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-3">
            <Image src="/icono_merysu.png" alt="MerySu Sparkle Logo" width={60} height={60} />
            <span className="font-semibold text-3xl">MerySu Sparkle</span>
          </div>
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#services" className="hover:text-primary">Services</a>
          <Button>
            <Link href="#contact">
              Get a Free Quote
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
