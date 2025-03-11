import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface JumbotronProps {
  title: string;
  description: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export function Jumbotron({
  title,
  description,
  backgroundImage = "/jumbopic.jpeg",
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
}: JumbotronProps) {
  return (
    <section
      className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative px-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          {title}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          {description}
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          {ctaText && ctaLink && (
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              <Link href={ctaLink}>{ctaText}</Link>
            </Button>
          )}
          {secondaryCtaText && secondaryCtaLink && (
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-800 transition">
              <Link href={secondaryCtaLink}>{secondaryCtaText}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
