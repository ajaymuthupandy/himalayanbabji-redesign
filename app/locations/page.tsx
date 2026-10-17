import type { Metadata } from "next";
import { FaClock, FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import { Gallery, PageHero } from "@/components/blocks";
import { Button, Section, Title } from "@/components/ui";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Location",
  description: "Himalayan Babaji Retreats is located in Ubud, Bali, Indonesia.",
};

const mapsQuery = encodeURIComponent("Ubud, Bali, Indonesia");

export default function LocationsPage() {
  const details = [
    { Icon: FaLocationDot, label: "Retreats", value: site.location },
    { Icon: FaClock, label: "Workshops", value: "9am – 6pm" },
    { Icon: FaWhatsapp, label: "WhatsApp", value: site.whatsappDisplay, href: waLink() },
  ];

  return (
    <>
      <PageHero title="Our Location" sub="Training nestled in the serenity of Ubud, Bali." image="1-7" position="center 40%" />

      <Section>
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col">
            <Title sub="In the spiritual heart of Bali.">Visit Us in Ubud</Title>
            <ul className="space-y-3">
              {details.map(({ Icon, label, value, href }) => (
                <li key={label} className="flex items-center gap-4 rounded-[16px] bg-cream p-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-gold">
                    <Icon className="size-5 text-gold-deep" aria-hidden />
                  </span>
                  <div>
                    <p className="font-heading text-xs font-semibold uppercase tracking-wider text-tan">{label}</p>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="text-lg text-ink hover:text-brown">
                        {value}
                      </a>
                    ) : (
                      <p className="text-lg text-ink">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}>Get directions</Button>
            </div>
          </div>
          <iframe
            title="Map of Ubud, Bali"
            src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="min-h-[340px] w-full rounded-[20px] border-0 bg-beige md:h-full"
          />
        </div>
      </Section>

      <Section tone="cream">
        <Title sub="A peaceful sanctuary away from daily distractions.">The Space</Title>
        <Gallery
          images={[
            { name: "1-208", alt: "Graduating group on the open-air deck" },
            { name: "1-73", alt: "Teacher during a ceremony" },
            { name: "1-118", alt: "Garland ceremony in the studio" },
            { name: "1-12-1", alt: "Students standing in the bright studio" },
            { name: "1-13", alt: "Student meditating on the wooden deck" },
          ]}
        />
      </Section>
    </>
  );
}
