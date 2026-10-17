import type { Metadata } from "next";
import { FaBowlFood, FaPersonPraying, FaSpa } from "react-icons/fa6";
import { CheckList, PageHero, Split } from "@/components/blocks";
import FadeIn from "@/components/FadeIn";
import { Button, Section, Title } from "@/components/ui";
import { vipassanaBenefits, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Yoga & Vipassana Retreats in Bali",
  description: "Holistic Vipassana and yoga retreats in Ubud, Bali, in the Himalayan tradition.",
};

const included = [
  { Icon: FaPersonPraying, title: "Yoga Training", text: "Immersive practice rooted in ancient Himalayan traditions." },
  { Icon: FaSpa, title: "Guided Meditation", text: "Sessions to deepen your inner calm and focus." },
  { Icon: FaBowlFood, title: "Nourishing Meals", text: "Food crafted to support your practice and wellbeing." },
];

export default function RetreatsPage() {
  return (
    <>
      <PageHero
        title="Yoga Retreats in Bali"
        sub="Silence, practice and self-discovery in the heart of Ubud."
        image="1-1-2"
        position="center 60%"
      />

      <Split image="1-7-2" alt="Meditation in the open-air pavilion">
        <h2 className="text-2xl font-semibold uppercase tracking-wide text-ink md:text-[2rem]">
          Holistic Vipassana Retreat
        </h2>
        <p className="mt-4 text-lg text-brown">
          Systematic awareness of body, breath, sensation and mind, supported by traditional yoga, to break
          unconscious patterns and see yourself clearly.
        </p>
        <div className="mt-6">
          <CheckList items={vipassanaBenefits} cols={2} />
        </div>
        <div className="mt-6">
          <Button href={waLink("Hello! I'd like to join the Vipassana retreat in Bali.")}>Reserve your place</Button>
        </div>
      </Split>

      <Section tone="cream">
        <Title center sub="Everything you need to step away and turn inward.">
          What Your Retreat Includes
        </Title>
        <div className="grid gap-5 md:grid-cols-3">
          {included.map(({ Icon, title, text }, i) => (
            <FadeIn key={title} delay={i * 80}>
              <div className="flex h-full items-start gap-4 rounded-[20px] bg-white p-6 ring-1 ring-beige md:flex-col md:p-7">
                <span className="grid size-14 shrink-0 place-items-center rounded-full bg-gold">
                  <Icon className="size-6 text-gold-deep" aria-hidden />
                </span>
                <div>
                  <h3 className="text-lg font-semibold uppercase tracking-wide text-ink">{title}</h3>
                  <p className="mt-1.5 text-brown">{text}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Split image="1-25" alt="Students meditating in the bamboo pavilion" reverse imageClass="aspect-[4/3] md:aspect-auto md:min-h-[380px]">
        <h2 className="text-2xl font-semibold uppercase tracking-wide text-ink md:text-[2rem]">Our Story</h2>
        <p className="mt-4 text-lg text-brown">
          Rooted in ancient Himalayan traditions, our retreats offer deep, authentic yoga guided by seasoned
          teachers in nature’s embrace.
        </p>
        <div className="mt-6">
          <Button href="/instructors" variant="outlineDark">
            Meet the teachers
          </Button>
        </div>
      </Split>
    </>
  );
}
