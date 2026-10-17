import type { Metadata } from "next";
import { FaQuoteLeft, FaWhatsapp } from "react-icons/fa6";
import { Gallery, PageHero } from "@/components/blocks";
import { Button, Section, Title } from "@/components/ui";
import { testimonials, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Student experiences, graduations and ceremonies at Himalayan Babaji Retreats, Bali.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="Student Experiences"
        sub="Graduations, garland ceremonies and the community that grows with every batch."
        image="1-208"
        position="center 45%"
      />

      {testimonials.length > 0 && (
        <Section>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="flex flex-col rounded-[20px] bg-cream p-7">
                <FaQuoteLeft className="size-6 text-tan" aria-hidden />
                <blockquote className="mt-4 flex-1 text-lg text-ink">{t.quote}</blockquote>
                <figcaption className="mt-5 font-heading text-sm font-semibold uppercase tracking-wider text-brown">
                  {t.name} <span className="font-normal text-tan">· {t.course}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>
      )}

      <Section>
        <Title sub="Every training ends in celebration, with garlands, blessings and new friends.">
          Graduation &amp; Ceremonies
        </Title>
        <Gallery
          images={[
            { name: "1-48", alt: "Teacher garlanding graduating students" },
            { name: "1-118", alt: "Student receiving a marigold garland" },
            { name: "wa-2026-06-07-at-23.14.44", alt: "Blessing during the ceremony" },
            { name: "1-115", alt: "Teacher placing a garland on a student" },
            { name: "1-13-2", alt: "Students celebrating together" },
            { name: "wa-2026-06-07-at-23.14.43-3", alt: "Teacher blessing students" },
            { name: "1-34-2", alt: "Students seated in a circle" },
            { name: "1-39", alt: "Students in prayer" },
            { name: "1-11-2-1", alt: "Students practising pranayama" },
          ]}
        />
      </Section>

      <Section tone="cream" className="!py-10">
        <div className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-semibold uppercase tracking-wide text-ink md:text-2xl">Trained with us?</h2>
            <p className="mt-1 text-lg text-brown">Send us your experience and we’ll share it here.</p>
          </div>
          <Button href={waLink("Hello! I'd like to share my experience at Himalayan Babaji Retreats.")}>
            <FaWhatsapp aria-hidden /> Share your story
          </Button>
        </div>
      </Section>
    </>
  );
}
