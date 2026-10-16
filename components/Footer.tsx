import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLocationDot, FaWhatsapp, FaClock } from "react-icons/fa6";
import { site, waLink } from "@/lib/site";

async function currentYear() {
  "use cache";
  return new Date().getFullYear();
}

export default async function Footer() {
  const year = await currentYear();
  const socials = [
    { href: site.socials.facebook, label: "Facebook", Icon: FaFacebookF },
    { href: site.socials.instagram, label: "Instagram", Icon: FaInstagram },
  ].filter((s) => s.href);

  return (
    <footer className="bg-black text-xs text-white/75">
      <div className="mx-auto max-w-7xl px-4 py-3 md:px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-cream">
              <Image src="/images/logo-mark.png" alt="" width={445} height={240} className="h-4 w-auto" />
            </span>
            <span className="font-heading text-[0.68rem] font-semibold uppercase leading-snug tracking-[0.18em] text-white">
              Himalayan Babaji Retreats
              <span className="block text-[0.58rem] font-medium tracking-[0.14em] text-tan sm:text-[0.62rem] sm:tracking-[0.22em]">{site.tagline}</span>
            </span>
          </Link>

          <ul className="flex flex-wrap gap-x-5 gap-y-1.5">
            <li className="flex items-center gap-2">
              <FaLocationDot className="text-tan" aria-hidden /> {site.location}
            </li>
            <li className="flex items-center gap-2">
              <FaClock className="text-tan" aria-hidden /> {site.hours}
            </li>
            <li>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
                <FaWhatsapp className="text-tan" aria-hidden /> {site.whatsappDisplay}
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-2.5 flex flex-col items-center gap-2 border-t border-white/10 pt-2.5">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="grid size-7 place-items-center rounded-full border border-white/20 hover:bg-white hover:text-black"
              >
                <Icon aria-hidden />
              </a>
            ))}
            <p className="text-center text-[0.7rem] text-white/45">© {year} Himalayan Babaji Retreats</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
