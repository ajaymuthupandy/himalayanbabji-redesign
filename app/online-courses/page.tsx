import type { Metadata } from "next";
import { PageHero, Split } from "@/components/blocks";
import FadeIn from "@/components/FadeIn";
import { Button, Photo, Section, Title } from "@/components/ui";
import type { ImageName } from "@/lib/images";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Online Courses",
  description: "Learn Himalayan yoga, meditation and philosophy online with Himalayan Babaji Retreats.",
};

const courses: { title: string; text: string; image: ImageName }[] = [
  {
    title: "Himalayan Yoga Traditions",
    text: "Dive deep into ancient Himalayan yoga traditions guided by experienced teachers.",
    image: "1-20-2-1",
  },
  {
    title: "Body & Mind Training",
    text: "Hands-on training designed to connect body, mind and the Himalayan spirit.",
    image: "1-220-1",
  },
  {
    title: "Guided Meditation",
    text: "Transformative meditation practices to bring into your daily life.",
    image: "1-16",
  },
];

export default function OnlineCoursesPage() {
  return (
    <>
      <PageHero title="Online Courses" sub="Learn the Himalayan tradition from anywhere in the world." image="1-6" />

      <Section>
        <Title sub="Study with our teachers, wherever you are.">Our Courses</Title>
        <div className="grid gap-5 md:grid-cols-3">
          {courses.map((c, i) => (
            <FadeIn key={c.title} delay={i * 80}>
              <article className="flex h-full flex-col overflow-hidden rounded-[20px] bg-cream">
                <Photo name={c.image} alt={c.title} sizes="(min-width: 768px) 33vw, 100vw" className="aspect-square" />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold uppercase tracking-wide text-ink">{c.title}</h3>
                  <p className="mt-2 flex-1 text-brown">{c.text}</p>
                  <Button
                    href={waLink(`Hello! I'm interested in the online course: ${c.title}.`)}
                    variant="outlineDark"
                    className="mt-5 self-start"
                  >
                    Ask about batches
                  </Button>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Split image="1-10" alt="Student standing on the mat in black and white" tone="cream" reverse position="center 30%">
        <h2 className="text-2xl font-semibold uppercase tracking-wide text-ink md:text-[2rem]">Our Story</h2>
        <p className="mt-4 text-lg text-brown">
          Rooted deep in Himalayan tradition, our training honors ancient yoga wisdom passed down through
          generations.
        </p>
        <div className="mt-6">
          <Button href="/courses">In-person courses in Bali</Button>
        </div>
      </Split>
    </>
  );
}
