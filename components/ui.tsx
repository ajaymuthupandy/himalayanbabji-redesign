import Image from "next/image";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { img, type ImageName } from "@/lib/images";

export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const tones = {
  white: "bg-white",
  cream: "bg-cream",
  beige: "bg-beige",
  ink: "bg-ink text-white",
  brown: "bg-brown text-white",
} as const;

export type Tone = keyof typeof tones;

export function Section({
  tone = "white",
  className,
  inner,
  id,
  children,
}: {
  tone?: Tone;
  className?: string;
  inner?: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn(tones[tone], "py-10 md:py-12", className)}>
      <div className={cn("mx-auto w-full max-w-7xl px-4 md:px-6", inner)}>{children}</div>
    </section>
  );
}

export function Title({
  as: Tag = "h2",
  sub,
  center,
  light,
  flush,
  className,
  children,
}: {
  as?: "h1" | "h2" | "h3";
  sub?: string;
  center?: boolean;
  light?: boolean;
  flush?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn(!flush && "mb-6 md:mb-7", center && "mx-auto max-w-2xl text-center", className)}>
      <Tag
        className={cn(
          "text-2xl font-semibold uppercase tracking-wide md:text-[2rem]",
          light ? "text-white" : "text-ink",
        )}
      >
        {children}
      </Tag>
      {sub && <p className={cn("mt-2 text-lg", light ? "text-white/75" : "text-brown")}>{sub}</p>}
    </div>
  );
}

const buttonStyles = {
  solid: "bg-brown text-white hover:bg-brown-dark",
  light: "bg-white text-ink hover:bg-cream",
  outline: "border border-current text-current hover:bg-white hover:text-ink",
  outlineDark: "border border-brown text-brown hover:bg-brown hover:text-white",
} as const;

export function Button({
  href,
  variant = "solid",
  className,
  children,
  ...rest
}: { href: string; variant?: keyof typeof buttonStyles } & Omit<ComponentProps<"a">, "href">) {
  const external = href.startsWith("http");
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-[28px] px-6 py-3 font-heading text-sm font-medium uppercase tracking-wider transition-colors duration-200",
    buttonStyles[variant],
    className,
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}

export function Photo({
  name,
  alt,
  className,
  sizes = "(min-width: 768px) 50vw, 100vw",
  priority,
  position,
}: {
  name: ImageName;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  position?: string;
}) {
  const { src } = img(name);
  return (
    <div className={cn(!className?.includes("absolute") && "relative", "overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        style={position ? { objectPosition: position } : undefined}
      />
    </div>
  );
}

export function Chip({ children, light }: { children: ReactNode; light?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3.5 py-1.5 text-[0.95rem]",
        light ? "bg-white/10 text-white" : "bg-cream text-brown ring-1 ring-beige",
      )}
    >
      {children}
    </span>
  );
}
