import type { Metadata } from "next";
import { Gallery, PageHero, Split } from "@/components/blocks";
import { Chip, Section, Title } from "@/components/ui";
import { teachers } from "@/lib/site";

export const metadata: Metadata = {
  title: "Instructors",
  description: "Meet 18 Siddha Yogi Raj and Kshatriya Yogi Shaktivel, teachers of the Himalayan Siddha tradition.",
};

export default function InstructorsPage() {
  return (
    <>
      <PageHero
        title="Our Instructors"
        sub="Rooted in the ancient Himalayan lineage, blending tradition with heartfelt teaching."
        image="1-10-2"
        position="center 25%"
      />

      {teachers.map((t, i) => (
        <Split
          key={t.name}
          image={t.image}
          alt={t.name}
          reverse={i % 2 === 1}
          tone={i % 2 === 1 ? "cream" : "white"}
          position="center 20%"
        >
          <h2 className="text-2xl font-semibold uppercase tracking-wide text-ink md:text-[2rem]">{t.name}</h2>
          <p className="mt-2 font-heading text-xs font-semibold uppercase tracking-wider text-tan">{t.role}</p>
          {t.bio.map((para) => (
            <p key={para.slice(0, 20)} className="mt-4 text-lg text-brown">
              {para}
            </p>
          ))}
          <div className="mt-6 flex flex-wrap gap-2">
            {t.focus.map((f) => (
              <Chip key={f}>{f}</Chip>
            ))}
          </div>
        </Split>
      ))}

      <Section>
        <Title sub="Satsang, practice and ceremony with our teachers.">Teaching Moments</Title>
        <Gallery
          images={[
            { name: "1-73", alt: "Teacher smiling during a fire ceremony" },
            { name: "1-4", alt: "Teacher guiding students in the bamboo shala" },
            { name: "1-6-1", alt: "Teacher leading a seated meditation" },
            { name: "1-72-1", alt: "Teacher speaking with students" },
            { name: "wa-2026-06-10-at-17.21.08-2-1", alt: "Teacher seated with students" },
          ]}
        />
      </Section>
    </>
  );
}
