import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="relative h-[90vh] flex items-center justify-center text-center">
        <Image
          src="/hero.jpg"
          alt="Luxury Fashion"
          fill
          className="object-cover -z-10"
        />

        <div className="bg-black/40 absolute inset-0 -z-10" />

        <div className="text-white px-4">
          <h1 className="text-5xl md:text-7xl font-light tracking-wide">
            SHARQ LABEL
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Where Elegance Meets Identity
          </p>

          <button className="mt-8 px-8 py-3 border border-white hover:bg-white hover:text-black transition-all duration-500">
            Shop Now
          </button>
        </div>
      </section>
    </main>
  );
}
