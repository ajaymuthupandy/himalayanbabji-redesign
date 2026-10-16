import type { ImageName } from "./images";

export const site = {
  name: "Himalayan Babaji Retreats",
  tagline: "Art of expressing your true self",
  url: "https://himalayanbabajiretreats.com",
  location: "Ubud, Bali, Indonesia",
  hours: "Workshops 9am – 6pm",
  whatsapp: "6287789639325",
  whatsappDisplay: "+62 877 8963 9325",
  // Fill these in to show the icons in the footer.
  socials: {
    facebook: "",
    instagram: "",
  },
};

export function waLink(message = "Hello! I would like to know more about your yoga teacher training in Bali.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/retreats", label: "Retreats" },
  { href: "/instructors", label: "Instructors" },
  { href: "/events", label: "Events" },
  { href: "/online-courses", label: "Online Courses" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/resources", label: "Resources" },
  { href: "/locations", label: "Locations" },
];

export type Program = {
  slug: string;
  title: string;
  hours?: string;
  summary: string;
  image: ImageName;
  href?: string;
};

export const programs: Program[] = [
  {
    slug: "multi-style",
    title: "Multi-Style YTTC",
    hours: "100 · 200 · 300 Hr",
    summary: "Hatha, Ashtanga, Kundalini and Kriya Yoga with pranayama, meditation and teaching methodology.",
    image: "1-16-1",
    href: "/multi-style-yttc-in-bali",
  },
  {
    slug: "kundalini",
    title: "Kundalini YTTC",
    hours: "200 Hr",
    summary: "Chakras, nadis, kriyas, mantra and mudra to awaken the dormant energy within.",
    image: "wa-2026-06-07-at-23.14.43-3",
  },
  {
    slug: "meditation",
    title: "Meditation Teacher Training",
    summary: "Concentration, breath awareness, mantra and chakra meditation as a science of consciousness.",
    image: "1-11-3-1",
  },
];

export const monthlyEvents: Program[] = [
  {
    slug: "200-multi-style",
    title: "200 Hrs Multi-Style YTTC",
    hours: "Every month",
    summary: "Hatha, Ashtanga, Kundalini, anatomy and teaching methodology in the Himalayan tradition.",
    image: "wa-2026-06-07-at-23.14.43-2",
    href: "/multi-style-yttc-in-bali",
  },
  {
    slug: "200-kundalini",
    title: "200 Hrs Kundalini YTTC",
    hours: "Every month",
    summary: "Understand the subtle energy system and learn to teach Kundalini Yoga with confidence.",
    image: "wa-2026-06-10-at-17.21.08-3",
  },
  {
    slug: "500-holistic",
    title: "500 Hrs Holistic YTTC",
    hours: "Every month",
    summary: "An advanced path into yoga as a complete science of body, mind, energy and consciousness.",
    image: "dsc07358",
  },
];

export const practices = [
  { icon: "asana", title: "Yoga Asana", text: "Master alignment, flexibility and strength." },
  { icon: "pranayama", title: "Pranayama", text: "Ancient breathing techniques for vitality." },
  { icon: "meditation", title: "Meditation", text: "Develop mindfulness and inner peace." },
  { icon: "kundalini", title: "Kundalini Yoga", text: "Awaken consciousness through kriya and mantra." },
  { icon: "philosophy", title: "Yoga Philosophy", text: "Explore the wisdom of ancient yogic traditions." },
  { icon: "teaching", title: "Teaching Methodology", text: "Build confidence as a professional yoga teacher." },
] as const;

export const vipassanaBenefits = [
  "Deep mindfulness and self-awareness",
  "Less stress, anxiety and restlessness",
  "Emotional balance and resilience",
  "Sharper concentration and clarity",
  "Release of physical and emotional tension",
  "Personal growth and spiritual awakening",
];

export const teachers = [
  {
    name: "18 Siddha Yogi Raj",
    role: "Siddha tradition · Kriya & Kundalini",
    image: "wa-2026-06-28-at-13.33.15-1" as ImageName,
    short: "Teaches spirituality as direct experience, not belief.",
    bio: [
      "A yogi and philosopher preserving the timeless wisdom of the Siddha tradition: Sanatana Dharma, Kundalini, Kriya Yoga and meditation as practical disciplines for the evolution of consciousness.",
      "Through his books and teachings he guides seekers to turn inward and live with clarity, compassion, discipline and inner freedom.",
    ],
    focus: ["Siddha Yoga", "Kriya Yoga", "Kundalini", "Meditation"],
  },
  {
    name: "Kshatriya Yogi Shaktivel",
    role: "Meditation · Vipassana · Holistic living",
    image: "1-115-1" as ImageName,
    short: "Approaches spirituality as a science of consciousness.",
    bio: [
      "A contemporary yogi and teacher reviving the experiential wisdom of Sanatana Dharma, rooted in meditation, Kriya and Kundalini Yoga, Vipassana, Brahmacharya and holistic living.",
      "He has guided students from many cultures toward discipline and self-realization, living fully in the world rather than escaping it.",
    ],
    focus: ["Kriya Yoga", "Kundalini", "Vipassana", "Brahmacharya"],
  },
];

export const ttcLevels = [
  {
    hours: "100",
    title: "100 Hour YTTC",
    text: "Deepen your practice through Hatha, Vinyasa, Ashtanga, Yin, pranayama, meditation and philosophy.",
  },
  {
    hours: "200",
    title: "200 Hour YTTC",
    text: "A strong teaching foundation: asana, anatomy, philosophy, pranayama, meditation and methodology.",
  },
  {
    hours: "300",
    title: "300 Hour Advanced YTTC",
    text: "Advance your teaching, personal practice and grasp of traditional and contemporary techniques.",
  },
];

export const yogaStyles = [
  "Hatha Yoga",
  "Ashtanga Yoga",
  "Vinyasa Yoga",
  "Yin Yoga",
  "Restorative Yoga",
  "Pranayama",
  "Meditation",
  "Yoga Philosophy",
  "Yoga Anatomy",
  "Alignment & Adjustment",
  "Yoga Nidra",
  "Teaching Methodology",
  "Sequencing & Class Planning",
];

export const posts = [
  {
    title: "Meditation Teacher Training in Bali: A Journey into Inner Awareness",
    excerpt: "In a world of stress and constant distraction, meditation training offers a path back to stillness.",
    date: "2026-07-03",
    href: "https://himalayanbabajiretreats.com/meditation-teacher-training-in-bali/",
    image: "1-13-1" as ImageName,
  },
  {
    title: "What Is Kundalini Awakening? A Guide According to the Himalayan Tradition",
    excerpt: "The authentic path of Kundalini through Himalayan yoga, meditation and pranayama.",
    date: "2026-07-02",
    href: "https://himalayanbabajiretreats.com/what-is-kundalini-awakening-a-guide-according-to-the-himalayan-tradition/",
    image: "1-11-2-2" as ImageName,
  },
];

// Add real student reviews here; the testimonials page shows them when present.
export const testimonials: { quote: string; name: string; course: string }[] = [];
