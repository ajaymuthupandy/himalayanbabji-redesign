import type { Metadata } from "next";
import { FaArrowRight } from "react-icons/fa6";
import { PageHero, Split } from "@/components/blocks";
import FadeIn from "@/components/FadeIn";
import { Button, Photo, Section, Title } from "@/components/ui";
import { posts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resources",
  description: "Articles on meditation teacher training and Kundalini awakening in the Himalayan tradition.",
};

const dateFormat = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" });

export default function ResourcesPage() {
  return (
    <>
      <PageHero title="Yoga Insights" sub="Articles on meditation, Kundalini and the Himalayan tradition." image="1-11-3" />

      <Section>
        <Title sub="Read the latest from our teachers.">Latest Articles</Title>
        <div className="grid gap-5 md:grid-cols-2">
          {posts.map((post, i) => (
            <FadeIn key={post.href} delay={i * 80}>
              <a
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid h-full overflow-hidden rounded-[20px] bg-cream sm:grid-cols-[0.9fr_1.1fr]"
              >
                <Photo
                  name={post.image}
                  alt=""
                  sizes="(min-width: 768px) 25vw, 100vw"
                  className="aspect-[4/3] sm:aspect-auto sm:min-h-[260px]"
                />
                <div className="flex flex-col p-6">
                  <time dateTime={post.date} className="font-heading text-xs uppercase tracking-wider text-tan">
                    {dateFormat.format(new Date(post.date))}
                  </time>
                  <h3 className="mt-2 text-lg font-semibold text-ink group-hover:text-brown">{post.title}</h3>
                  <p className="mt-2 flex-1 text-brown">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-wider text-ink group-hover:text-tan">
                    Read article <FaArrowRight aria-hidden />
                  </span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Split image="1-21-2" alt="Teacher speaking to students" tone="cream" reverse position="center 25%">
        <h2 className="text-2xl font-semibold uppercase tracking-wide text-ink md:text-[2rem]">Our Story</h2>
        <p className="mt-4 text-lg text-brown">
          Rooted in ancient Himalayan traditions, our retreats guide you through authentic yoga teachings passed
          down for generations.
        </p>
        <div className="mt-6">
          <Button href="/courses">Explore courses</Button>
        </div>
      </Split>
    </>
  );
}
