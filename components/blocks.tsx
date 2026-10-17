import Link from "next/link";
import type { ReactNode } from "react";
import {
  FaArrowRight,
  FaBookOpen,
  FaChalkboardUser,
  FaCheck,
  FaFire,
  FaPersonPraying,
  FaSpa,
  FaWind,
} from "react-icons/fa6";
import { PiFlowerLotusLight, PiLeafLight, PiUsersLight } from "react-icons/pi";
import type { ImageName } from "@/lib/images";
import { practices, type Program, waLink } from "@/lib/site";
import FadeIn from "./FadeIn";
import { Photo, Section, Title, cn, type Tone } from "./ui";

const heroBadges = [
  { Icon: PiFlowerLotusLight, lines: ["Internationally", "Recognized"] },
  { Icon: PiLeafLight, lines: ["Authentic", "Himalayan Lineage"] },
  { Icon: PiUsersLight, lines: ["Experienced", "Teachers"] },
];

/* Light editorial hero for inner pages: serif title on linen, photo fading in from the right */
export function PageHero({
  title,
  sub,
  image,
  position = "center 35%",
}: {
  title: string;
  sub: string;
  image: ImageName;
  position?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-linen">
      <div className="relative h-60 sm:h-80 md:absolute md:inset-y-0 md:right-0 md:h-auto md:w-[60%]">
        <Photo
          name={image}
          alt=""
          priority
          sizes="(min-width: 768px) 60vw, 100vw"
          position={position}
          className="absolute inset-0"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-linen to-transparent md:hidden" />
        <div className="absolute inset-y-0 left-0 hidden w-3/4 bg-gradient-to-r from-linen via-linen/70 to-transparent md:block" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-10 md:px-6 md:py-20 lg:py-24">
        <div className="max-w-xl">
          <h1 className="text-3xl font-semibold uppercase tracking-wide text-ink md:text-5xl">{title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-brown md:text-xl">{sub}</p>
          <ul className="mt-8 flex md:mt-10">
            {heroBadges.map(({ Icon, lines }) => (
              <li
                key={lines[0]}
                className="flex flex-col gap-2 border-l border-beige px-3 first:border-l-0 first:pl-0 sm:flex-row sm:items-center sm:gap-2.5 sm:px-5"
              >
                <Icon className="size-8 shrink-0 text-tan sm:size-9" aria-hidden />
                <span className="font-heading text-[0.78rem] leading-snug text-brown">
                  {lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const practiceIcons = {
  asana: FaPersonPraying,
  pranayama: FaWind,
  meditation: FaSpa,
  kundalini: FaFire,
  philosophy: FaBookOpen,
  teaching: FaChalkboardUser,
};

/* The original cream/gold practice cards */
export function PracticeGrid({ cols = 2 }: { cols?: 2 | 3 }) {
  return (
    <div className={cn("grid grid-cols-2 gap-3 sm:gap-5", cols === 3 && "lg:grid-cols-3")}>
      {practices.map((p, i) => {
        const Icon = practiceIcons[p.icon];
        return (
          <FadeIn key={p.title} delay={i * 60}>
            <div className="h-full rounded-[20px] bg-cream p-5 text-center shadow-[0_8px_25px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-1.5 sm:p-7">
              <span className="mx-auto mb-4 grid size-14 place-items-center rounded-full bg-gold sm:size-16">
                <Icon className="size-6 text-gold-deep sm:size-7" aria-hidden />
              </span>
              <h3 className="text-base font-medium text-ink sm:text-lg">{p.title}</h3>
              <p className="mt-1.5 text-[0.95rem] leading-snug text-brown">{p.text}</p>
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}

/* Tall image cards with text underneath */
export function ProgramCards({ items }: { items: Program[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {items.map((p, i) => (
        <FadeIn key={p.slug} delay={i * 80}>
          <article className="group flex h-full flex-col overflow-hidden rounded-[20px] bg-white ring-1 ring-beige">
            <div className="relative">
              <Photo
                name={p.image}
                alt={p.title}
                sizes="(min-width: 768px) 33vw, 100vw"
                className="aspect-[4/3] transition-transform duration-500 group-hover:scale-[1.03] md:aspect-[4/5]"
              />
              {p.hours && (
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 font-heading text-xs font-semibold uppercase tracking-wider text-ink">
                  {p.hours}
                </span>
              )}
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-semibold uppercase tracking-wide text-ink">{p.title}</h3>
              <p className="mt-2 flex-1 text-brown">{p.summary}</p>
              <ProgramLink program={p} />
            </div>
          </article>
        </FadeIn>
      ))}
    </div>
  );
}

function ProgramLink({ program, light }: { program: Program; light?: boolean }) {
  const cls = cn(
    "mt-4 inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-wider",
    light ? "text-gold" : "text-tan hover:text-brown",
  );
  if (program.href) {
    return (
      <Link href={program.href} className={cls}>
        View course <FaArrowRight aria-hidden />
      </Link>
    );
  }
  return (
    <a
      href={waLink(`Hello! I'd like details on the ${program.title}.`)}
      target="_blank"
      rel="noopener noreferrer"
      className={cls}
    >
      Ask for dates <FaArrowRight aria-hidden />
    </a>
  );
}

/* Image cards with the text laid over the photo */
export function OverlayCards({ items }: { items: Program[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((p, i) => (
        <FadeIn key={p.slug} delay={i * 80}>
          <article className="group relative isolate flex aspect-square flex-col justify-end overflow-hidden rounded-[20px] p-6 text-white md:aspect-[3/4]">
            <Photo
              name={p.image}
              alt=""
              sizes="(min-width: 768px) 33vw, 100vw"
              className="absolute inset-0 -z-10 transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
            {p.hours && (
              <span className="mb-3 self-start rounded-full bg-gold px-3 py-1 font-heading text-[0.7rem] font-semibold uppercase tracking-wider text-ink">
                {p.hours}
              </span>
            )}
            <h3 className="text-xl font-semibold uppercase tracking-wide">{p.title}</h3>
            <p className="mt-2 text-white/85">{p.summary}</p>
            <ProgramLink program={p} light />
          </article>
        </FadeIn>
      ))}
    </div>
  );
}

/* Image beside text, the main storytelling block */
export function Split({
  image,
  alt,
  reverse,
  tone = "white",
  imageClass = "aspect-[4/3] md:aspect-auto md:min-h-[400px]",
  position,
  children,
}: {
  image: ImageName;
  alt: string;
  reverse?: boolean;
  tone?: Tone;
  imageClass?: string;
  position?: string;
  children: ReactNode;
}) {
  return (
    <Section tone={tone}>
      <div className="grid items-stretch gap-6 md:grid-cols-2 md:gap-10">
        <FadeIn className={cn("h-full", reverse && "md:order-2")}>
          <Photo name={image} alt={alt} position={position} className={cn("h-full rounded-[20px]", imageClass)} />
        </FadeIn>
        <FadeIn className="flex flex-col justify-center" delay={100}>
          {children}
        </FadeIn>
      </div>
    </Section>
  );
}

export function CheckList({ items, light, cols = 1 }: { items: string[]; light?: boolean; cols?: 1 | 2 }) {
  return (
    <ul className={cn("grid gap-x-6 gap-y-2.5", cols === 2 && "sm:grid-cols-2")}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className={cn(
              "mt-1 grid size-5 shrink-0 place-items-center rounded-full",
              light ? "bg-gold text-ink" : "bg-gold text-gold-deep",
            )}
          >
            <FaCheck className="size-2.5" aria-hidden />
          </span>
          <span className={light ? "text-white/90" : "text-ink"}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* Bento photo grid: first image large, the rest fill around it.
   Pass 5 or 9 images so every row is filled. */
export function Gallery({ images }: { images: { name: ImageName; alt: string }[] }) {
  return (
    <div className="grid auto-rows-[160px] grid-cols-2 gap-3 md:auto-rows-[200px] md:grid-cols-4">
      {images.map((im, i) => (
        <FadeIn key={im.name} delay={i * 50} className={cn(i === 0 && "col-span-2 row-span-2")}>
          <Photo
            name={im.name}
            alt={im.alt}
            sizes={i === 0 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
            className="h-full rounded-[16px]"
          />
        </FadeIn>
      ))}
    </div>
  );
}

export { Title };
