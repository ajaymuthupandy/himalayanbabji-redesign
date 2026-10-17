import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLocationDot, FaWhatsapp, FaClock } from "react-icons/fa6";
import { site, waLink } from "@/lib/site";

async function currentYear() {
  "use cache";
  return new Date().getFullYear();
}

const links = [
  { href: "/courses", label: "Courses" },
  { href: "/retreats", label: "Retreats" },
  { href: "/locations", label: "Locations" },
];

export default async function Footer() {
  const year = await currentYear();
  const socials = [
    { href: site.socials.instagram, label: "Instagram", Icon: FaInstagram },
    { href: site.socials.facebook, label: "Facebook", Icon: FaFacebookF },
  ].filter((s) => s.href);

  const info = [
    { Icon: FaLocationDot, text: site.location },
    { Icon: FaClock, text: site.hours },
    { Icon: FaWhatsapp, text: site.whatsappDisplay, href: waLink() },
  ];

  return (
    <footer className="border-t border-tan/40 bg-night text-sm text-white/80">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col gap-6 py-7 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" className="inline-flex items-center gap-4">
            <span className="grid size-14 shrink-0 place-items-center rounded-full bg-cream ring-1 ring-tan/50">
              <Image src="/images/logo-mark.png" alt="" width={445} height={240} className="h-6 w-auto" />
            </span>
            <span className="font-heading text-xs font-semibold uppercase leading-snug tracking-[0.2em] text-white sm:text-sm">
              Himalayan Babaji Retreats
              <span className="mt-1 block text-[0.62rem] font-medium tracking-[0.22em] text-tan sm:text-[0.68rem]">
                {site.tagline}
              </span>
            </span>
          </Link>

          <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-0">
            {info.map(({ Icon, text, href }) => {
              const body = (
                <>
                  <Icon className="text-lg text-tan" aria-hidden /> {text}
                </>
              );
              return (
                <li
                  key={text}
                  className="flex items-center sm:border-white/15 sm:px-6 sm:first:pl-0 sm:not-first:border-l lg:first:pl-6 lg:first:border-l lg:last:pr-0"
                >
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white">
                      {body}
                    </a>
                  ) : (
                    <span className="flex items-center gap-3">{body}</span>
                  )}
                </li>
              );
            })}
          </ul>

          {socials.length > 0 && (
            <div className="flex gap-2.5">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid size-9 place-items-center rounded-full bg-white/10 transition-colors hover:bg-tan hover:text-ink"
                >
                  <Icon aria-hidden />
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col items-center gap-3 border-t border-white/10 py-4 text-xs text-white/50 sm:flex-row sm:justify-between">
          <p>© {year} Himalayan Babaji Retreats. All rights reserved.</p>
          <ul className="flex items-center sm:pr-16">
            {links.map(({ href, label }) => (
              <li key={href} className="border-white/20 px-4 not-first:border-l last:pr-0">
                <Link href={href} className="hover:text-tan">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
