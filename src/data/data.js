import heroImg from "../assets/hero.svg";
import ctaImg from "../assets/cta.svg";
import contactImg from "../assets/contact.svg";

import seoImg from "../assets/service-seo.svg";
import ppcImg from "../assets/service-ppc.svg";
import socialImg from "../assets/service-social.svg";
import emailImg from "../assets/service-email.svg";
import contentImg from "../assets/service-content.svg";
import analyticsImg from "../assets/service-analytics.svg";

import johnImg from "../assets/team-john.svg";
import janeImg from "../assets/team-jane.svg";
import michaelImg from "../assets/team-michael.svg";
import emilyImg from "../assets/team-emily.svg";
import brianImg from "../assets/team-brian.svg";
import sarahImg from "../assets/team-sarah.svg";

export const navLinks = [
  { id: 1, label: "About us", href: "#about" },
  { id: 2, label: "Services", href: "#services" },
  { id: 3, label: "Use Cases", href: "#cases" },
  { id: 4, label: "Pricing", href: "#pricing" },
  { id: 5, label: "Blog", href: "#blog" },
];

export const hero = {
  title: "Navigating the digital landscape for success",
  text: "Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.",
  button: "Book a consultation",
  image: heroImg,
};

export const clientLogos = ["amazon", "dribbble", "HubSpot", "Notion", "NETFLIX", "zoom"];

export const sectionHeadings = {
  services: {
    title: "Services",
    text: "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:",
  },
  cases: {
    title: "Case Studies",
    text: "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies",
  },
  process: {
    title: "Our Working Process",
    text: "Step-by-Step Guide to Achieving Your Business Goals",
  },
  team: {
    title: "Team",
    text: "Meet the skilled and experienced team behind our successful digital marketing strategies",
  },
  testimonials: {
    title: "Testimonials",
    text: "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services",
  },
  contact: {
    title: "Contact Us",
    text: "Connect with Us: Let’s Discuss Your Digital Marketing Needs",
  },
};

export const services = [
  { id: 1, lines: ["Search engine", "optimization"], variant: "light", image: seoImg, alt: "Magnifying glass" },
  { id: 2, lines: ["Pay-per-click", "advertising"], variant: "green", image: ppcImg, alt: "Mouse cursor" },
  { id: 3, lines: ["Social Media", "Marketing"], variant: "blue", image: socialImg, alt: "Smiley face" },
  { id: 4, lines: ["Email", "Marketing"], variant: "light", image: emailImg, alt: "Envelope" },
  { id: 5, lines: ["Content", "Creation"], variant: "green", image: contentImg, alt: "Document" },
  { id: 6, lines: ["Analytics and", "Tracking"], variant: "blue", image: analyticsImg, alt: "Bar chart" },
];

export const cta = {
  title: "Let’s make things happen",
  text: "Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.",
  button: "Get your free proposal",
  image: ctaImg,
};

export const caseStudies = [
  { id: 1, text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales." },
  { id: 2, text: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic." },
  { id: 3, text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales." },
];

export const processSteps = [
  { id: 1, number: "01", title: "Consultation", text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements." },
  { id: 2, number: "02", title: "Research and Strategy Development", text: "We research your market and competitors, then build a custom strategy to reach your goals." },
  { id: 3, number: "03", title: "Implementation", text: "Our team launches the campaigns across the chosen channels according to the strategy." },
  { id: 4, number: "04", title: "Monitoring and Optimization", text: "We track performance continuously and optimize campaigns for better results." },
  { id: 5, number: "05", title: "Reporting and Communication", text: "You receive regular reports and we stay in close contact to discuss progress." },
  { id: 6, number: "06", title: "Continual Improvement", text: "We keep refining our approach so your results keep growing over time." },
];

export const team = [
  { id: 1, name: "John Smith", role: "CEO and Founder", image: johnImg, bio: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy" },
  { id: 2, name: "Jane Doe", role: "Director of Operations", image: janeImg, bio: "7+ years of experience in project management and team leadership. Strong organizational and communication skills" },
  { id: 3, name: "Michael Brown", role: "Senior SEO Specialist", image: michaelImg, bio: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization" },
  { id: 4, name: "Emily Johnson", role: "PPC Manager", image: emilyImg, bio: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis" },
  { id: 5, name: "Brian Williams", role: "Social Media Specialist", image: brianImg, bio: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement" },
  { id: 6, name: "Sarah Kim", role: "Content Creator", image: sarahImg, bio: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries" },
];

export const testimonials = [
  { id: 1, name: "John Smith", role: "Marketing Director at XYZ Corp", quote: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence." },
  { id: 2, name: "Jane Doe", role: "CEO at ABC Ltd", quote: "Positivus helped us double our leads in six months. Their SEO and PPC work is outstanding and the communication is always clear." },
  { id: 3, name: "Michael Brown", role: "Founder at Brandly", quote: "A reliable partner for our social media. Our engagement has grown steadily since we started working together." },
  { id: 4, name: "Emily Johnson", role: "COO at Shopzy", quote: "Great reporting and communication. We always know exactly how our campaigns are performing." },
  { id: 5, name: "Sarah Kim", role: "Head of Growth at Nexa", quote: "Professional, creative and results-driven. We highly recommend their team to any growing business." },
];

export const contact = {
  image: contactImg,
  options: ["Say Hi", "Get a Quote"],
};

export const footer = {
  info: [
    "Email: info@positivus.com",
    "Phone: 555-567-8901",
    "Address: 1234 Main St, Moonstone City, Stardust State 12345",
  ],
  social: ["in", "f", "x"],
  copyright: "© 2023 Positivus. All Rights Reserved.",
};
