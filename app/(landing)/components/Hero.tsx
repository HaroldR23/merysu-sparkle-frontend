import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-primary">
          A Sparkling Clean You Can Trust ✨
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Professional cleaning services for homes, offices, and vacation rentals — reliable, thorough, and always with a smile.
        </p>

        <div className="mt-6 flex gap-3">
          <Link href="#contact">
            <Button>
              Get a Free Quote
            </Button>
          </Link>
        </div>
      </div>

      <Image src="/cleaning_img.png" alt="cleaning" width={600} height={600} />
    </section>
  );
}
