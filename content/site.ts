/**
 * All editable site content lives here. Update this file to change services,
 * prices, portfolio entries, stats, and contact info. No component edits needed.
 */

export const site = {
  name: "Modus Repair",
  tagline: "Local electronics and household repair in Loudoun County, VA",
  description:
    "Fast, affordable repair for phones, tablets, laptops, game consoles, and household items. Free diagnostic on every device. Serving Loudoun County and nearby areas.",
  // TODO: Replace with your custom domain once you buy one (e.g. "https://modusrepair.com").
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://modus-repair.vercel.app",
  serviceArea: "Serving Loudoun County and nearby areas.",
  owner: {
    // TODO: Add your first name so the About page feels personal (e.g. "Hi, I'm Alex").
    firstName: "",
  },
  contact: {
    email: "repairmodus@gmail.com",
    phoneDisplay: "703-887-7027",
    phoneHref: "tel:+17038877027",
  },
  // TODO: Add social links if you want them in the footer and structured data, or leave empty.
  social: [] as { label: string; href: string }[],
};

export const stats = [
  { value: "Hundreds", label: "of customers served" },
  { value: "$4,000+", label: "in repairs completed" },
  { value: "Free", label: "diagnostic on every device" },
  { value: "Local", label: "Loudoun County based" },
];

export const diagnosticNote =
  "Every repair starts with a free diagnostic. Prices below are starting prices. Your final quote depends on the model and parts, and you'll approve it before any work begins.";

export type Service = { name: string; price: string; note?: string };
export type ServiceCategory = {
  id: string;
  title: string;
  blurb: string;
  services: Service[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "phones-tablets",
    title: "Phones and tablets",
    blurb: "iPhone, Samsung, Pixel, iPad, and most other phones and tablets.",
    services: [
      { name: "Screen replacement", price: "from $89" },
      { name: "Battery replacement", price: "from $59" },
      { name: "Charging port repair", price: "from $49" },
    ],
  },
  {
    id: "laptops-computers",
    title: "Laptops and computers",
    blurb: "MacBook, Windows laptops, and desktops.",
    services: [
      { name: "Battery replacement", price: "from $69" },
      { name: "Keyboard replacement", price: "from $79" },
      { name: "Screen replacement", price: "from $119" },
      { name: "Cleanup, tune-up, and software issues", price: "from $49" },
    ],
  },
  {
    id: "consoles-controllers",
    title: "Game consoles and controllers",
    blurb: "PlayStation, Xbox, Nintendo Switch, and controllers.",
    services: [
      { name: "Console HDMI port replacement (PS5, PS4, Xbox)", price: "from $99" },
      { name: "Controller and Joy-Con stick drift", price: "from $29" },
    ],
  },
  {
    id: "household",
    title: "Household items and small appliances",
    blurb: "Lamps, small kitchen appliances, fans, speakers, and more.",
    services: [{ name: "Free quote, repairs", price: "from $39" }],
  },
];

export type PortfolioItem = {
  title: string;
  category: string;
  description: string;
  // Image paths are relative to /public. To use a real photo, drop it in
  // /public/portfolio (e.g. iphone-screen-before.jpg) and update the path here.
  before: string;
  after: string;
};

// TODO: Replace these placeholder entries and images with your real past repairs.
export const portfolio: PortfolioItem[] = [
  {
    title: "iPhone 13 cracked screen",
    category: "Phones and tablets",
    description: "Shattered display replaced with a new panel. Face ID and True Tone working. Same-day turnaround.",
    before: "/portfolio/placeholder-1-before.svg",
    after: "/portfolio/placeholder-1-after.svg",
  },
  {
    title: "PS5 HDMI port replacement",
    category: "Game consoles",
    description: "Bent HDMI port caused no signal. Replaced the port and tested 4K output.",
    before: "/portfolio/placeholder-2-before.svg",
    after: "/portfolio/placeholder-2-after.svg",
  },
  {
    title: "MacBook Air keyboard",
    category: "Laptops and computers",
    description: "Liquid damage left several keys dead. Keyboard replaced and the board cleaned.",
    before: "/portfolio/placeholder-3-before.svg",
    after: "/portfolio/placeholder-3-after.svg",
  },
  {
    title: "Joy-Con stick drift",
    category: "Controllers",
    description: "Left stick drifting in every game. Swapped in a new analog stick module.",
    before: "/portfolio/placeholder-4-before.svg",
    after: "/portfolio/placeholder-4-after.svg",
  },
  {
    title: "Samsung charging port",
    category: "Phones and tablets",
    description: "Phone would only charge at an angle. Cleaned and replaced the USB-C port.",
    before: "/portfolio/placeholder-5-before.svg",
    after: "/portfolio/placeholder-5-after.svg",
  },
  {
    title: "Stand mixer won't power on",
    category: "Household items",
    description: "Traced a broken wire in the power cord. Repaired and safety tested.",
    before: "/portfolio/placeholder-6-before.svg",
    after: "/portfolio/placeholder-6-after.svg",
  },
];

export const deviceTypes = [
  "Phone",
  "Tablet",
  "Laptop or computer",
  "Game console",
  "Controller or Joy-Con",
  "Household item or appliance",
  "Other",
];

export const contactMethods = ["Text", "Phone call", "Email"];

// TODO: Double-check these claims (turnaround times, etc.) match how you actually work.
export const whyLocal = [
  {
    title: "Faster",
    text: "No shipping your device across the country and waiting weeks. Most common repairs are done in a day or two, many the same day.",
  },
  {
    title: "Cheaper",
    text: "No storefront rent or corporate overhead, so you pay for the repair, not the brand. The diagnostic is always free.",
  },
  {
    title: "Personal",
    text: "You talk directly to the person fixing your device. No ticket numbers, no call centers, no runaround.",
  },
];
