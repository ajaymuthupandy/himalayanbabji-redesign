import Link from "next/link";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa6";
import { CheckList, Gallery, OverlayCards, PracticeGrid, ProgramCards, Split } from "@/components/blocks";
import FadeIn from "@/components/FadeIn";
import { Button, Photo, Section, Title } from "@/components/ui";
import { monthlyEvents, programs, teachers, vipassanaBenefits, waLink } from "@/lib/site";

const facts = [
  { value: "100–500 Hr", label: "Teacher trainings" },
  { value: "Monthly", label: "New batches" },
  { value: "Siddha", label: "Himalayan lineage" },
  { value: "Ubud", label: "Bali, Indonesia" },
];

export default function Home() {
  return (
    <>
      {/* Hero — the original black & white cover */}
      <section className="relative isolate flex min-h-[calc(100svh-64px)] flex-col overflow-hidden bg-black text-white">
        <Photo name="dsc07488" alt="" priority sizes="100vw" position="center 22%" className="absolute inset-0 -z-10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/45 to-black/80" />
        <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-4 py-16 text-center">
          <h1 className="text-4xl font-medium md:text-6xl lg:text-7xl">Yoga Teacher Training Bali</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85 md:text-xl">
            Internationally recognized Kundalini, Hatha and Meditation teacher training, rooted in the Himalayan
            Siddha tradition.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={waLink()} variant="solid">
              <FaWhatsapp aria-hidden /> Join now
            </Button>
            <Button href="/courses" variant="outline">
              Explore courses
            </Button>
          </div>
        </div>
        <div className="border-t border-white/15 bg-black/40 backdrop-blur-sm">
          <dl className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
            {facts.map((f) => (
              <div key={f.label} className="border-white/15 px-4 py-4 text-center odd:border-r md:border-r md:last:border-r-0">
                <dt className="sr-only">{f.label}</dt>
                <dd className="font-heading text-lg font-semibold uppercase tracking-wide md:text-xl">{f.value}</dd>
                <dd className="text-sm text-white/70">{f.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Intro + practice cards */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <FadeIn className="flex flex-col">
            <h2 className="text-2xl font-semibold uppercase tracking-wide text-ink md:text-[2rem]">
              Yoga Teacher Training &amp; Spiritual Retreats
            </h2>
            <p className="mt-4 text-lg text-brown">
              A sacred space in the serene landscapes of Bali for authentic yogic transformation, where ancient
              Himalayan wisdom meets modern teaching methods.
            </p>
            <Photo
              name="1-17-1"
              alt="Students meditating in the open-air shala in Bali"
              className="mt-6 aspect-[4/3] flex-1 rounded-[20px] lg:aspect-auto lg:min-h-[260px]"
            />
          </FadeIn>
          <PracticeGrid />
        </div>
      </Section>

      {/* Programs */}
      <Section tone="cream">
        <Title sub="Three paths into the Himalayan yogic tradition, for beginners and teachers alike.">
          Our Yoga Training Programs
        </Title>
        <ProgramCards items={programs} />
      </Section>

      {/* Vipassana retreat */}
      <Split image="1-21" alt="Group meditation in a Bali garden" tone="ink">
        <h2 className="text-2xl font-semibold uppercase tracking-wide md:text-[2rem]">
          Himalayan Holistic Vipassana Retreats
        </h2>
        <p className="mt-4 text-lg text-white/80">
          Vipassana means “to see things as they truly are.” Combined with traditional yoga, it becomes a complete
          journey of healing, awareness and transformation.
        </p>
        <div className="mt-6">
          <CheckList items={vipassanaBenefits} light cols={2} />
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/retreats" variant="light">
            Explore retreats
          </Button>
        </div>
      </Split>

      {/* Monthly events */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Title flush sub="New batches begin every month in Ubud.">
            Top Events
          </Title>
          <Button href="/events" variant="outlineDark">
            All events
          </Button>
        </div>
        <div className="mt-6">
          <OverlayCards items={monthlyEvents} />
        </div>
      </Section>

      {/* Teachers */}
      <Section tone="beige">
        <Title sub="Guided by the Himalayan Kriya Yoga tradition.">Our Teachers</Title>
        <div className="grid gap-5 md:grid-cols-2">
          {teachers.map((t, i) => (
            <FadeIn key={t.name} delay={i * 80}>
              <Link
                href="/instructors"
                className="group grid h-full grid-cols-[120px_1fr] overflow-hidden rounded-[20px] bg-white sm:grid-cols-[180px_1fr]"
              >
                <Photo name={t.image} alt={t.name} sizes="180px" position="center 20%" className="min-h-[180px]" />
                <div className="flex flex-col justify-center p-5 sm:p-6">
                  <h3 className="text-lg font-semibold uppercase tracking-wide text-ink">{t.name}</h3>
                  <p className="mt-1 font-heading text-xs uppercase tracking-wider text-tan">{t.role}</p>
                  <p className="mt-3 text-brown">{t.short}</p>
                  <span className="mt-4 inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-wider text-ink group-hover:text-tan">
                    Read more <FaArrowRight aria-hidden />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Gallery */}
      <Section tone="cream">
        <Title sub="Moments from our trainings and ceremonies in Bali.">Life at the Retreat</Title>
        <Gallery
          images={[
            { name: "1-48", alt: "Garland ceremony for graduating students" },
            { name: "1-18-1", alt: "Teacher leading a seated session" },
            { name: "1-5", alt: "Student practising in the curtained shala" },
            { name: "1-50", alt: "Students listening during philosophy class" },
            { name: "1-118-1", alt: "Students receiving marigold garlands" },
          ]}
        />
      </Section>
    </>
  );
}
