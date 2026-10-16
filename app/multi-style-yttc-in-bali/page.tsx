import type { Metadata } from "next";
import { FaWhatsapp } from "react-icons/fa6";
import { CheckList, CtaBand, Split } from "@/components/blocks";
import FadeIn from "@/components/FadeIn";
import { Button, Chip, Photo, Section, Title } from "@/components/ui";
import type { ImageName } from "@/lib/images";
import { ttcLevels, waLink, yogaStyles } from "@/lib/site";

export const metadata: Metadata = {
  title: "Multi-Style YTTC in Bali",
  description: "100, 200 and 300 hour Multi-Style Yoga Teacher Training at Avasthanam, Bali.",
};

const heroImages: { name: ImageName; alt: string }[] = [
  { name: "1-214", alt: "Student in a wild thing pose" },
  { name: "1-244", alt: "Student balancing in crow pose" },
  { name: "1-220-1", alt: "Student in tree pose" },
  { name: "1-228-1", alt: "Student stretching on the mat" },
];

const journey = [
  { title: "Practice", text: "Discipline and awareness through daily practice." },
  { title: "Study", text: "Philosophy, anatomy, pranayama and meditation." },
  { title: "Teach", text: "Real teaching practice with feedback." },
  { title: "Connect", text: "Practitioners from around the world." },
  { title: "Reflect", text: "Space for self-discovery and change." },
  { title: "Grow", text: "Confidence to continue beyond the course." },
];

const whoCanJoin = [
  "Beginners building a strong foundation",
  "Regular practitioners wanting deeper knowledge",
  "Aspiring professional yoga teachers",
  "Teachers expanding their repertoire",
  "Wellness professionals",
  "Anyone seeking personal growth through yoga",
];

const methodology = [
  "Class structure and sequencing",
  "Clear verbal instruction",
  "Demonstration techniques",
  "Breath and cueing",
  "Alignment principles",
  "Modifications and variations",
  "Teaching different levels",
  "Your authentic teaching voice",
];

export default function MultiStylePage() {
  return (
    <>
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-4 pb-6 pt-10 md:px-6 md:pt-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h1 className="text-3xl font-semibold uppercase tracking-wide md:text-5xl">Multi-Style YTTC in Bali</h1>
              <p className="mt-3 text-lg text-white/80 md:text-xl">
                Transform your practice. Deepen your knowledge. Become a confident yoga teacher.
              </p>
            </div>
            <Button href={waLink("Hello! I'm interested in the Multi-Style YTTC in Bali.")} variant="light" className="shrink-0">
              <FaWhatsapp aria-hidden /> Apply now
            </Button>
          </div>
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 pb-10 md:grid-cols-4 md:px-6 md:pb-12">
          {heroImages.map((im, i) => (
            <Photo
              key={im.name}
              name={im.name}
              alt={im.alt}
              priority={i < 2}
              sizes="(min-width: 768px) 25vw, 50vw"
              className="aspect-[3/4] rounded-[16px]"
            />
          ))}
        </div>
      </section>

      <Split image="1-215" alt="Students in warrior pose in the shala" position="center 30%">
        <h2 className="text-2xl font-semibold uppercase tracking-wide text-ink md:text-[2rem]">
          What Is Multi-Style Yoga Teacher Training?
        </h2>
        <p className="mt-4 text-lg text-brown">
          Several major yoga traditions in one immersive training at Avasthanam Bali, so you understand how they
          complement each other and find the approach that resonates with you.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {yogaStyles.map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
        </div>
      </Split>

      <Section tone="cream">
        <Title center sub="Choose the program that matches your journey.">
          100, 200 &amp; 300 Hour Programs
        </Title>
        <div className="grid gap-5 md:grid-cols-3">
          {ttcLevels.map((lvl, i) => (
            <FadeIn key={lvl.hours} delay={i * 80}>
              <div className="flex h-full flex-col rounded-[20px] bg-white p-7 ring-1 ring-beige">
                <span className="font-heading text-5xl font-semibold text-tan">
                  {lvl.hours}
                  <span className="ml-1 text-base font-medium uppercase tracking-wider text-brown">hrs</span>
                </span>
                <h3 className="mt-4 text-lg font-semibold uppercase tracking-wide text-ink">{lvl.title}</h3>
                <p className="mt-2 flex-1 text-brown">{lvl.text}</p>
                <Button
                  href={waLink(`Hello! I'd like details on the ${lvl.title} in Bali.`)}
                  variant="outlineDark"
                  className="mt-6 self-start"
                >
                  Enquire
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <Title light sub="More than a certification, a journey from practitioner to teacher.">
          Your Journey at Avasthanam Bali
        </Title>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[20px] bg-white/10 md:grid-cols-3">
          {journey.map((step, i) => (
            <div key={step.title} className="bg-ink p-5 md:p-7">
              <span className="font-heading text-sm font-semibold text-gold">0{i + 1}</span>
              <h3 className="mt-2 text-lg font-semibold uppercase tracking-wide">{step.title}</h3>
              <p className="mt-1.5 text-white/75">{step.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Split image="1-8" alt="Student in a low lunge with arms raised" reverse>
        <h2 className="text-2xl font-semibold uppercase tracking-wide text-ink md:text-[2rem]">Who Can Join?</h2>
        <p className="mt-4 text-lg text-brown">
          You don’t need to be flexible or advanced. Teacher training is about learning, discipline and awareness.
        </p>
        <div className="mt-6">
          <CheckList items={whoCanJoin} />
        </div>
      </Split>

      <Section tone="beige">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-12">
          <div>
            <h2 className="text-2xl font-semibold uppercase tracking-wide text-ink md:text-[2rem]">
              Become a Well-Rounded Teacher
            </h2>
            <p className="mt-4 text-lg text-brown">
              Learn by practising, observing, teaching fellow students and receiving feedback.
            </p>
          </div>
          <div className="rounded-[20px] bg-white p-6 md:p-8">
            <CheckList items={methodology} cols={2} />
          </div>
        </div>
      </Section>

      <CtaBand title="Start Your Journey in Bali" image="1-220" />
    </>
  );
}
