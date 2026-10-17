import type { Metadata } from "next";
import { PageHero, PracticeGrid, ProgramCards, Split } from "@/components/blocks";
import { Button, Chip, Section, Title } from "@/components/ui";
import { programs, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Yoga Teacher Training Courses",
  description: "Multi-Style, Kundalini and Meditation Yoga Teacher Training in Ubud, Bali.",
};

export default function CoursesPage() {
  return (
    <>
      <PageHero
        title="Yoga Courses"
        sub="Transform your practice into a path of teaching. Internationally recognized programs for beginners, practitioners and teachers."
        image="1-11-2-2"
        position="center 40%"
      />

      <Section>
        <Title sub="Internationally recognized programs for beginners, practitioners and teachers.">
          Teacher Training Programs
        </Title>
        <ProgramCards items={programs} />
      </Section>

      <Section tone="cream">
        <Title center sub="Every course balances practice, theory and teaching skills.">
          What You Will Study
        </Title>
        <PracticeGrid cols={3} />
      </Section>

      <Split image="1-20-2" alt="Teacher explaining yoga philosophy at the whiteboard" position="center 30%">
        <h2 className="text-2xl font-semibold uppercase tracking-wide text-ink md:text-[2rem]">Our Story</h2>
        <p className="mt-4 text-lg text-brown">
          Rooted in ancient Himalayan traditions, our training nurtures both body and spirit through authentic,
          lineage-based teaching.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {["100 Hr", "200 Hr", "300 Hr", "500 Hr Holistic"].map((h) => (
            <Chip key={h}>{h}</Chip>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href={waLink("Hello! Could you share the upcoming course dates?")}>Ask for dates</Button>
          <Button href="/multi-style-yttc-in-bali" variant="outlineDark">
            Multi-Style YTTC
          </Button>
        </div>
      </Split>
    </>
  );
}
