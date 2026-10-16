import type { Metadata } from "next";
import { FaWhatsapp } from "react-icons/fa6";
import { CtaBand, OverlayCards, PageHero, Split } from "@/components/blocks";
import FadeIn from "@/components/FadeIn";
import { Button, Section, Title, cn } from "@/components/ui";
import { monthlyEvents, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Events & Pricing",
  description: "Monthly yoga teacher trainings in Ubud, Bali, with session, full program and early-bird pricing.",
};

const pricing = [
  { name: "Basic Access", price: "150", unit: "USD per session", featured: false },
  { name: "Full Program", price: "1200", unit: "USD full course", featured: true },
  { name: "Early Bird", price: "1000", unit: "USD when booked early", featured: false },
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="Upcoming Events"
        sub="Authentic Himalayan yoga trainings, starting every month."
        image="wa-2026-06-10-at-17.21.08-3"
        position="center 30%"
      />

      <Section>
        <Title sub="Join the next batch in Ubud.">Trainings Every Month</Title>
        <OverlayCards items={monthlyEvents} />
      </Section>

      <Section tone="cream">
        <Title center sub="Simple pricing, with a reduced rate for early bookings.">
          Pricing
        </Title>
        <div className="grid gap-5 md:grid-cols-3">
          {pricing.map((p, i) => (
            <FadeIn key={p.name} delay={i * 80}>
              <div
                className={cn(
                  "flex h-full flex-col items-center rounded-[20px] p-7 text-center",
                  p.featured ? "bg-brown text-white" : "bg-white ring-1 ring-beige",
                )}
              >
                <h3 className={cn("text-sm font-semibold uppercase tracking-[0.2em]", p.featured ? "text-gold" : "text-tan")}>
                  {p.name}
                </h3>
                <p className="mt-3 font-heading text-5xl font-semibold">${p.price}</p>
                <p className={cn("mt-1", p.featured ? "text-white/75" : "text-brown")}>{p.unit}</p>
                <Button
                  href={waLink(`Hello! I'd like to reserve a spot (${p.name}).`)}
                  variant={p.featured ? "light" : "solid"}
                  className="mt-6"
                >
                  <FaWhatsapp aria-hidden /> Reserve spot
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Split image="1-34-2" alt="Students in white sitting in a circle" position="center 30%">
        <h2 className="text-2xl font-semibold uppercase tracking-wide text-ink md:text-[2rem]">Our Roots</h2>
        <p className="mt-4 text-lg text-brown">
          Step into the timeless tradition of Himalayan Babaji, where ancient yoga wisdom meets heartfelt teaching.
        </p>
        <div className="mt-6">
          <Button href="/courses" variant="outlineDark">
            View courses
          </Button>
        </div>
      </Split>

      <CtaBand />
    </>
  );
}
